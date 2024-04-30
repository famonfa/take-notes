import { type } from "os";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: boolean;
  subtitle?: boolean;
  par?: boolean;
  css?: string;
  titleSecondary?: boolean;
  info?: boolean;
  infoSideBar?: boolean;
  textType?: string;
  mark?: string;
};

export const Text = ({
  children,
  title,
  subtitle,
  par,
  titleSecondary,
  info,
  css,
  infoSideBar,
  textType,
  mark,
}: Props) => {
  const ttTitle = textType === "heading";
  const ttSubtitle = textType === "subtitle";
  const ttPar = textType === "paragraph";

  const style = {
    fontWeight: mark === "bold" ? "bold" : "normal",
    fontStyle: mark === "italic" ? "italic" : "normal",
  };

  return (
    <>
      {(title || ttTitle) && (
        <h1
          className={`${css} dark:text-white text-gray-700 text-3xl mb-4 font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900`}
        >
          {children}
        </h1>
      )}
      {(subtitle || ttSubtitle) && (
        <h2
          className={`${css} dark:text-white text-2xl mb-4 font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-pretty`}
        >
          {children}
        </h2>
      )}
      {(par || ttPar) && (
        <p
          style={style}
          className={`${css} dark:text-white text-lg mb-4 font-sans antialiased font-normal  text-gray-700`}
        >
          {children}
        </p>
      )}
      {titleSecondary && (
        <h4
          className={`${css} dark:text-white text-block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900`}
        >
          {children}
        </h4>
      )}
      {info && (
        <h5
          className={`${css}  dark:text-white text-1xl mb-4 font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900`}
        >
          {children}
        </h5>
      )}
      {infoSideBar && (
        <h5
          className={`${css}  dark:text-white font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-700 truncate text-sm`}
        >
          {children}
        </h5>
      )}
    </>
  );
};
