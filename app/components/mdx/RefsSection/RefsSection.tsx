import * as React from "react";
import Spacer from "~/components/Spacer";

type Props = {
  children: React.ReactNode;
};

function RefsSection({ children }: Props) {
  return (
    <>
      <Spacer size="2xl" />
      <aside className="relative sm:-mx-xl bg-secondary-200 px-lg py-xl rounded-lg not-prose">
        <div className="absolute top-0 left-[16px] -translate-y-1/2 text-secondary-700 font-medium">
          參考資料
        </div>
        <ul className="pl-sm sm:pl-lg list-disc">{children}</ul>
      </aside>
    </>
  );
}

export { RefsSection };
