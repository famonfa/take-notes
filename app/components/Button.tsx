import React, { PropsWithChildren, forwardRef } from "react";
import css from "styled-jsx/css";
export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  children: React.ReactNode;
  css?: string;
  variant?: "primary" | "secondary" | "text";
  loading?: boolean;
  size?: "counter" | "default" | "small" | "tiny" | "row";
  row?: boolean;
  customColor?: string;
};

export type ButtonProps<E extends React.ElementType = "button"> =
  ButtonOwnProps<E> & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

export const Button = forwardRef(function Button<
  E extends React.ElementType = "button"
>(
  props: ButtonProps<E> &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.Ref<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) {
  if (props.small) {
    return (
      <button
        className={`${props.css}   gap-2 px-6 h-8  font-sans bg-gray-200 text-[0.625rem] font-bold text-center text-gray-900 uppercase  transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-teal-700/10 active:bg-teal-700/20`}
        type="button"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button
      className={`${props.css} gap-2 px-6 py-3 font-sans bg-gray-200 text-xs font-bold text-center text-gray-900 uppercase  transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-teal-700/10 active:bg-teal-700/20`}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
});

export const Submit = forwardRef(function Submit<
  E extends React.ElementType = "button"
>(
  props: ButtonProps<E> & React.ButtonHTMLAttributes<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <Button
      style={{ textAlign: "center" }}
      ref={ref}
      type="submit"
      onSubmit={props.onSubmit}
      {...props}
    />
  );
});
