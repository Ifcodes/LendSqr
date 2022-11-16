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

export type UserDataType = {
   createdAt?: string,
    orgName?: string,
    userName?: string,
    email?: string,
    phoneNumber?: string,
    lastActiveDate?: string,
    profile?: {
      firstName?: string,
      lastName?: string,
      phoneNumber?: string,
      avatar?: string,
      gender?: string,
      bvn?: string,
      address?: string,
      currency?: string,
    },
    guarantor?: {
      firstName?: string,
      lastName?: string,
      phoneNumber?: string,
      gender?: string,
      address?: string,
    },
    accountBalance?: string,
    accountNumber?: string,
    socials?: {
      facebook?: string,
      instagram?: string,
      twitter?: string,
    },
    education?: {
      level?: string,
      employmentStatus?: string,
      sector?: string,
      duration?: string,
      officeEmail?: string,
      monthlyIncome?: Array<string>,
      loanRepayment?: string,
    },
    id?: string,
}
