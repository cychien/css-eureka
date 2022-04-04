import { Link } from "remix";
import PAGES from "~/constants/pages";
import Spacer from "../Spacer";

function Footer() {
  return (
    <footer className="pt-xl pb-2xl md:pb-3xl bg-bg-200 border-t-[1px] border-t-bg-300">
      <div className="wrapper mx-auto">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex space-x-3xl">
            {PAGES.map((page) => (
              <Link
                key={page.link}
                to={page.link}
                prefetch="intent"
                className="text-gray-600 hover:text-gray-700"
              >
                {page.name}
              </Link>
            ))}
          </div>
          <Spacer size="lg" className="block md:hidden" />
          <div>
            <Link
              to="/"
              prefetch="intent"
              className="text-2xl font-logo font-bold text-primary-500"
            >
              CSS Eureka
            </Link>
            <Spacer size="xs" />
            <p className="text-sm text-gray-600">
              如果你曾深入研究過 CSS 規範，那你可能看過標
            </p>
            <Spacer size="lg" />
            <div className="flex space-x-sm">
              <div className="h-[32px] w-[32px] bg-gray-200 rounded-full"></div>
              <div className="h-[32px] w-[32px] bg-gray-200 rounded-full"></div>
              <div className="h-[32px] w-[32px] bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
