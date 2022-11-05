import { DetailedHTMLProps, MouseEventHandler, ReactNode } from "react";

export type typographyProps = {
  text?: string;
  textColor?: string;
  textWeight?: string;
  classes?: string;
};

export type InputProps = {
  label?: string;
  type?: string;
  forAuth?: boolean;
  onSearch?: MouseEventHandler<HTMLButtonElement>;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type ButtonProps = {
  btnText?: string | ReactNode;
  isSecondary?: boolean;
  otherClasses?: string;
} & DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
