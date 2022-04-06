import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import cx from "classnames";
import styles from "./styles/app.css";
import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import Footer from "./components/Footer";
import useToggle from "~/utils/hooks/useToggle";

export const meta: MetaFunction = () => {
  return {
    title: "CSS Eureka",
    description: "帶你重新理解 CSS",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      crossOrigin: "anonymous",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Noto+Sans+TC:wght@400;500;700&display=swap",
    },
  ];
};

export default function App() {
  const [isBodyLocked, toggleBodyLocked] = useToggle(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body className={cx({ "overflow-hidden": isBodyLocked })}>
        <Navbar toggleBodyLocked={toggleBodyLocked} />
        <Outlet />
        <Spacer size="0" className="!h-[120px] md:!h-[142px]" />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
