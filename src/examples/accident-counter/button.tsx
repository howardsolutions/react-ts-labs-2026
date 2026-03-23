import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};
