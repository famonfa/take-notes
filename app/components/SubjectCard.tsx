import Link from "next/link";
import React from "react";
import { Text } from "@/app/ui-styles/Text";
const SubjectCard = ({ email, name, description, href }: any) => {
  return (
    <div className="dark:bg-sky-400/10 relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full sm:w-[47%]  md:w-[32%] lg:w-[23%] lg:h-[15em] h-[13em]     flex-row ">
      <div className="p-6">
        <Text css="line-clamp-2" titleSecondary>
          {name}
        </Text>
        <Text css="line-clamp-2" info>
          {description}
        </Text>
        <Link href={href} className="absolute inset-x-0 bottom-1 start-1 end-0">
          <button
            className="flex items-center bottom 0gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;
