import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import invariant from "tiny-invariant";
import { downloadDirList, downloadFile } from "./github.server";
import fs from "fs/promises";
import path from "path";
import { categoryKeys } from "~/constants/categories";
import rehypeMdxCodeMeta from "./rehype/rehypeMdxCodeMeta";

type FrontMatter = {
  title: string;
  excerpt: string;
  publish_date: string;
  category: typeof categoryKeys[number];
};

function isValidMeta(meta: any): meta is FrontMatter {
  return (
    meta &&
    meta.title &&
    meta.excerpt &&
    meta.publish_date &&
    categoryKeys.includes(meta.category)
  );
}

const POSTS_PATH = path.join(process.cwd(), "posts");

async function getSpecificComponents(slug: string) {
  if (process.env.NODE_ENV === "development") {
    const dirList = await fs.readdir(`${POSTS_PATH}/${slug}`);

    const componentContents = await Promise.all(
      dirList
        .filter((filename) => filename !== "index.mdx")
        .map(async (filename) => {
          const filePath = path.join(`${POSTS_PATH}/${slug}`, filename);
          const source = await fs.readFile(filePath, "utf-8");

          return {
            [`./${filename}`]: source,
          };
        })
    );

    let result = {} as Record<string, string>;

    componentContents.forEach((c) => {
      result[Object.keys(c)[0]] = Object.values(c)[0];
    });

    return result;
  }

  const dirList = await downloadDirList(`posts/${slug}`);

  const componentContents = await Promise.all(
    dirList
      .filter((file) => file.name !== "index.mdx")
      .map(async (file) => {
        const filePath = file.path;
        const source = await downloadFile(filePath);

        return {
          [`./${file.name}`]: source,
        };
      })
  );

  let result = {} as Record<string, string>;

  componentContents.forEach((c) => {
    result[Object.keys(c)[0]] = Object.values(c)[0];
  });

  return result;
}

async function getMdxPost(slug: string) {
  let source: string;

  if (process.env.NODE_ENV === "development") {
    const filePath = path.join(POSTS_PATH, slug, "index.mdx");
    source = await fs.readFile(filePath, "utf-8");
  } else {
    const contentPath = `posts/${slug}/index.mdx`;
    source = await downloadFile(contentPath);
  }

  const { content, data } = matter(source);

  const specificComps = await getSpecificComponents(slug);

  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );
  const { h, s } = await import("hastscript");
  const rehypeMdxCodeMetaPlugin = await rehypeMdxCodeMeta();

  const { code } = await bundleMDX({
    source: content,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: { class: "heading-link" },
            content: () => [
              h("span.sr-only", "Link to this heading"),
              s(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewbox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
                [
                  s("path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
                  }),
                  s("path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
                  }),
                ]
              ),
            ],
          },
        ],
        rehypeMdxCodeMetaPlugin,
      ];
      return options;
    },
    files: {
      ...specificComps,
    },
  });

  invariant(isValidMeta(data), `${slug} has bad meta data!`);
  invariant(typeof code === "string", `invalid code`);

  return {
    code,
    ...data,
  };
}

async function getAllMdxPosts() {
  if (process.env.NODE_ENV === "development") {
    const dirList = await fs.readdir(POSTS_PATH);

    return await Promise.all(
      dirList.map(async (filename) => {
        const filePath = path.join(POSTS_PATH, filename, "index.mdx");
        const source = await fs.readFile(filePath);
        const { data } = matter(source);

        invariant(isValidMeta(data), `${filename} has bad meta data!`);

        return {
          slug: filename,
          ...data,
        };
      })
    );
  }

  const dirList = await downloadDirList("posts");

  return await Promise.all(
    dirList.map(async (subDir) => {
      const subDirPath = subDir.path;
      const source = await downloadFile(`${subDirPath}/index.mdx`);
      const { data } = matter(source);

      invariant(isValidMeta(data), `${subDir.name} has bad meta data!`);

      return {
        slug: subDir.name,
        ...data,
      };
    })
  );
}

export { getMdxPost, getAllMdxPosts };
