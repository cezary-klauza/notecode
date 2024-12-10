"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

type SelectorProps = {
  values: string[];
  value: string;
  setValue: (value: string) => void;
};

const Selector: FC<SelectorProps> = ({ values, setValue, value }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandHandler = () => setIsExpanded((prev) => !prev);

  return (
    <button
      className="flex items-center bg-gray-2 rounded-full px-2 py-1 relative"
      onClick={expandHandler}
    >
      <ul
        className={clsx(
          "absolute w-max space-y-1 bg-white bottom-full left-1/2 -translate-x-1/2 mb-2 border border-gray-2 rounded-xl px-2 py-2 shadow-lg",
          isExpanded ? "block" : "hidden"
        )}
      >
        {values.map((v) => (
          <li
            key={v}
            className="w-full uppercase text-[10px] bg-transparent hover:bg-gray-2"
            onClick={() => setValue(v)}
          >
            {v}
          </li>
        ))}
      </ul>
      <p className="font-normal uppercase text-[10px]">{value}</p>
      <Image
        src="/down_arrow.svg"
        alt={isExpanded ? "collapse" : "expand"}
        width="16"
        height="16"
        className={clsx(isExpanded ? "rotate-180" : "rotate-0")}
      />
    </button>
  );
};

export default Selector;
