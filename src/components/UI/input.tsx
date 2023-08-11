import React from "react";
export interface InputProps extends React.ComponentPropsWithoutRef<"input"> { }

export const Input = ({ ...props }: InputProps) => {
  return <input {...props} className="input"></input>;
};
