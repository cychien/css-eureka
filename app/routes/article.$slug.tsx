import * as React from "react";
import { LoaderFunction, useLoaderData } from "remix";
import Spacer from "~/components/Spacer";
import Tag from "~/components/Tag";
import CATEGORIES from "~/constants/categories";
import { getMdxPost } from "~/utils/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";
import { ThumbsUp } from "react-feather";
import RefsSection from "~/components/mdx/RefsSection";
import CodeBlock from "~/components/mdx/CodeBlock";
import InlineCode from "~/components/mdx/InlineCode";

async function getLoaderData(slug: string) {
  return await getMdxPost(slug);
}

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  try {
    return await getLoaderData(params.slug);
  } catch (err) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
};

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>;

function Article() {
  const post = useLoaderData<LoaderData>();

  const code = post.code;
  const PostComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Spacer size="0" className="!h-[24px] sm:!h-[40px]" />
      <div className="container mx-auto">
        <div className="relative">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <Spacer size="lg" />
          <Tag>{CATEGORIES[post.category]}</Tag>
          <svg
            width="102"
            height="65"
            viewBox="0 0 102 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="absolute right-0 top-[12px] hidden sm:block"
          >
            <rect width="102" height="65" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_55_118"
                  transform="scale(0.00980392 0.0153846)"
                />
              </pattern>
              <image
                id="image0_55_118"
                width="102"
                height="65"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <Spacer size="0" className="!h-[50px] lg:!h-[84px]" />
        <main className="relative lg:pl-[84px]">
          <div className="absolute left-0 top-[14px] bg-secondary-300 h-[8px] w-[42px] rounded-r hidden lg:block" />
          <div className="flex items-start space-x-4xl">
            <article className="prose prose-lg max-w-full prose-h2:text-2xl prose-h3:text-xl prose-a:no-underline prose-headings:relative lg:max-w-[676px]">
              <PostComponent
                // @ts-ignore
                components={{ RefsSection, pre: CodeBlock, code: InlineCode }}
              />
            </article>
            <div className="sticky top-[96px] items-center space-x-xs hidden lg:flex">
              <button className="rounded-full p-sm border border-gray-200 bg-gray-100 group transition-transform will-change-transform hover:scale-125">
                <ThumbsUp className="text-gray-400 group-hover:text-gray-500" />
              </button>
              <div className="text-sm text-gray-500">Likes</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Article;
