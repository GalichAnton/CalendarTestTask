import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  disabled?: boolean;
  value?: string;
}
