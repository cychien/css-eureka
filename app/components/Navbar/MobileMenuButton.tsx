import * as React from "react";
import cx from "classnames";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function MobileMenuButton({
  isOpen,
  onClick,
  className,
}: MobileMenuButtonProps) {
  return (
    <button
      aria-label="Open menu"
      className={cx("relative h-[19px] w-[24px]", className)}
      onClick={onClick}
    >
      <Bar
        className={cx(
          "absolute top-0",
          isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        )}
      />
      <Bar
        className={cx("absolute top-[8px]", isOpen ? "rotate-45" : "rotate-0")}
      />
      <Bar
        className={cx("absolute top-[8px]", isOpen ? "-rotate-45" : "rotate-0")}
      />
      <Bar
        className={cx(
          "absolute top-[16px]",
          isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
        )}
      />
    </button>
  );
}

type BarProps = {
  className?: string;
};

function Bar({ className }: BarProps) {
  return (
    <span
      className={cx(
        "block h-[3px] w-[24px] bg-gray-500 transition ease-in-out duration-200",
        className
      )}
    />
  );
}

export default MobileMenuButton;
