import React, { FormEventHandler, useEffect, useState } from "react";
import { Button, Submit } from "../components/Button";

type Props = {
  children?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: FormEventHandler<HTMLButtonElement>;
  newComment?: string;
};

export const TextArea = ({
  placeholder,
  value,
  onChange,
  onClick,
  newComment,
}: Props) => {
  return (
    <div className="relative " data-twe-input-wrapper-init>
      <div className="flex flex-row items-center gap-3 ">
        <textarea
          className="peer min-h-[auto] focus:outline-none w-full rounded border-0 bg-transparent leading-[1.6]   data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 overflow-y-scroll no-scrollbar "
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        {newComment?.length && (
          <Submit
            onClick={onClick}
            css="h-3 w-3 text-xs justify-center self-end"
          >
            Add
          </Submit>
        )}
      </div>
    </div>
  );
};
