import { Link, NavLink, useLocation } from "remix";
import cx from "classnames";
import useToggle from "~/utils/hooks/useToggle";
import MobileMenuButton from "./MobileMenuButton";
import { motion } from "framer-motion";
import Spacer from "../Spacer";
import ShiftBy from "../ShiftBy";
import PAGES from "~/constants/pages";

type Props = {
  toggleBodyLocked: () => void;
};

function Navbar({ toggleBodyLocked }: Props) {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggle(false);
  const { pathname } = useLocation();

  return (
    <header className="py-xl z-10">
      <div className="wrapper mx-auto flex justify-between items-center sm:items-baseline">
        <Link
          to="/"
          prefetch="intent"
          className="text-3xl font-logo font-bold text-primary-500 leading-none rotate-0 transition-transform will-change-transform hover:-rotate-3"
        >
          CSS Eureka
        </Link>

        <nav aria-label="Main navigation" className="hidden sm:block">
          <ul className="flex space-x-xl">
            {PAGES.map((page) => (
              <li key={page.link}>
                <ShiftBy y={-10}>
                  <Link
                    to={page.link}
                    prefetch="intent"
                    className={cx(
                      "block font-medium relative text-lg",
                      (
                        page.link === "/articles"
                          ? pathname.match(/^(\/articles|\/article)/)
                          : pathname.startsWith(page.link)
                      )
                        ? "!text-primary-500"
                        : "text-gray-500 hover:text-gray-600"
                    )}
                  >
                    <>
                      {page.name}
                      {(page.link === "/articles"
                        ? pathname.match(/^(\/articles|\/article)/)
                        : pathname.startsWith(page.link)) && (
                        <svg
                          className="absolute bottom-[-10px] left-[-4px] max-w-none"
                          width="46"
                          height="7"
                          viewBox="0 0 46 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5C19.6018 2.73613 52.2588 -0.433289 42.0722 5"
                            stroke="#FDA4AF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="animate-[draw-navlink-stroke_300ms_ease-out]"
                          />
                        </svg>
                      )}
                    </>
                  </Link>
                </ShiftBy>
              </li>
            ))}
          </ul>
        </nav>

        <motion.nav
          aria-label="Main navigation"
          className={cx(
            "fixed inset-0 bg-secondary-300 p-md z-10 sm:hidden",
            !isMobileMenuOpen && "hidden"
          )}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "100vh" },
            closed: { opacity: 0, height: 0 },
          }}
        >
          <Spacer size="3xl" />
          <motion.ul
            className="space-y-lg"
            variants={{
              open: {
                transition: { delayChildren: 0.2, staggerChildren: 0.1 },
              },
            }}
          >
            {PAGES.map((page) => (
              <motion.li
                key={page.link}
                className="font-medium text-2xl"
                variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              >
                <Link
                  to={page.link}
                  prefetch="intent"
                  onClick={() => {
                    toggleMobileMenu();
                    toggleBodyLocked();
                  }}
                  className={
                    (
                      page.link === "/articles"
                        ? pathname.match(/^(\/articles|\/article)/)
                        : pathname.startsWith(page.link)
                    )
                      ? "text-primary-500"
                      : "text-gray-500"
                  }
                >
                  {page.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        <ShiftBy y={-10} className="z-10 sm:hidden">
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => {
              toggleMobileMenu();
              toggleBodyLocked();
            }}
          />
        </ShiftBy>
      </div>
    </header>
  );
}

export default Navbar;
