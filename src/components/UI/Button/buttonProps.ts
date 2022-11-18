import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface IButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant?: ButtonVariant;
  width?: string;
}
