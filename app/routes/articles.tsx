import { Link, useLoaderData, useLocation } from "remix";
import type { MetaFunction, LoaderFunction } from "remix";
import MainPage from "~/components/MainPage";
import Spacer from "~/components/Spacer";
import ShiftBy from "~/components/ShiftBy";
import CATEGORIES, { categoryKeys } from "~/constants/categories";
import { getAllMdxPosts } from "~/utils/mdx.server";
import { ArrowRight } from "react-feather";
import cx from "classnames";
import Tag from "~/components/Tag";

export const meta: MetaFunction = () => {
  return {
    title: "帶你建立正確的 CSS 心智模型",
    description: "著重於告訴你為什麼，解釋那些 CSS 的奇怪部分",
  };
};

async function getLoaderData(category: string | null) {
  const allPosts = await getAllMdxPosts();
  const filteredPosts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;
  const sortedPosts = filteredPosts.sort(
    (a, b) =>
      new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
  );
  return sortedPosts;
}

export const loader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const category = searchParams.get("category");
  return await getLoaderData(category);
};

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>;

export default function Articles() {
  const { pathname, search } = useLocation();
  const posts = useLoaderData<LoaderData>();

  const currentCategory = new URLSearchParams(search).get("category");

  return (
    <MainPage
      pageName="文章"
      title="帶你建立正確的 CSS 心智模型"
      subTitle="著重於告訴你為什麼，解釋那些 CSS 的奇怪部分"
    >
      <div className="flex flex-row-reverse justify-between items-baseline">
        <aside className="hidden flex-1 md:max-w-[120px] lg:max-w-[150px] md:block">
          <div className="font-medium text-gray-500">分類</div>
          <Spacer size="lg" />
          <ul className="space-y-sm">
            <li>
              <Link
                to={pathname}
                prefetch="intent"
                className={cx(
                  "block text-sm font-medium",
                  !currentCategory
                    ? "text-primary-500"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                所有文章
              </Link>
            </li>
            {Object.entries(CATEGORIES).map(([value, name]) => (
              <li key={value}>
                <Link
                  to={`${pathname}?category=${value}`}
                  prefetch="intent"
                  className={cx(
                    "block text-sm font-medium",
                    currentCategory === value
                      ? "text-primary-500"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="space-y-3xl flex-1 md:max-w-[500px] lg:max-w-[664px]">
          {posts.map((post) => (
            <Article
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              publishDate={post.publish_date}
              category={post.category}
              link={`/article/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </MainPage>
  );
}

type ArticleProps = {
  title: string;
  excerpt: string;
  publishDate: string;
  category: typeof categoryKeys[number];
  link: string;
};

function Article({
  title,
  excerpt,
  publishDate,
  category,
  link,
}: ArticleProps) {
  return (
    <Link to={link} prefetch="intent" className="block group">
      <h3 className="text-xl font-bold group-hover:text-primary-500">
        {title}
      </h3>
      <Spacer size="0" className="!h-[20px]" />
      <p className="leading-relaxed text-gray-600">{excerpt}</p>
      <Spacer size="md" />
      <div className="flex space-x-md items-center">
        <Tag>{CATEGORIES[category]}</Tag>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 group-hover:text-gray-700">
            Read more
          </span>
          <div className="opacity-0 translate-x-0 transition ease-out will-change-transform group-hover:opacity-100 group-hover:translate-x-2xs">
            <ShiftBy y={1}>
              <ArrowRight className="h-[16px] w-[16px] text-gray-700" />
            </ShiftBy>
          </div>
        </div>
      </div>
    </Link>
  );
}
