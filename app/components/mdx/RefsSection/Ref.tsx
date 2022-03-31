import * as React from "react";

type Props = {
  text: string;
  link: string;
};

function Ref({ text, link }: Props) {
  return (
    <li className="pl-xs sm:pl-sm">
      <a href={link} target="_blank" className="hover:text-gray-500">
        {text}
      </a>
    </li>
  );
}

export { Ref };
