import React, { PropsWithChildren } from "react";

type Props = {
  css?: string;
  children: React.ReactNode;
};

const Container = ({ children, css }: Props) => {
  return (
    <div className={`${css} dark:bg-gray-900 bg-white flex m-3 p-3 `}>
      {children}
    </div>
  );
};

export default Container;
