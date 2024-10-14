import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label
        className={`block text-white mb-2 text-2xl font-sm lg:text-sm xl:text-2xl`}
      >
        {labelText}
      </label>
      <input
        className={`border rounded-md disabled:border-slate-100 w-full block outline-none py-2 px-1 transition-all text-blackfont-sm text-black lg:text-sm xl:text-2xl bg-slate-50 focus:shadow focus:shadow-blue-500 
              ${
                error ? " border-red-500 animate-shake" : "border-slate-400"
              }`}
        {...props}
      ></input>
    </div>
  );
};

export default InputBox;
