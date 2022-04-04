import * as React from "react";
import Spacer from "../Spacer";

type PageProps = {
  pageName: string;
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

function MainPage({ pageName, title, subTitle, children }: PageProps) {
  return (
    <>
      <div className="mt-[-140px] pt-[140px] bg-secondary-100">
        <Spacer size="xl" className="hidden md:block" />
        <Spacer size="md" className="md:hidden" />
        <div className="wrapper mx-auto">
          <h1 className="sr-only">{pageName}</h1>
          <h2 className="text-xl text-gray-700 font-medium">{title}</h2>
          <Spacer size="md" />
          <div className="text-gray-600">{subTitle}</div>
          <Spacer size="2xl" />
        </div>
      </div>
      <Spacer size="3xl" className="hidden md:block" />
      <Spacer size="2xl" className="md:hidden" />
      <main className="wrapper mx-auto">{children}</main>
    </>
  );
}

export default MainPage;
