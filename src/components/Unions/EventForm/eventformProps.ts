import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface IEventFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  selected: Date | null;
  title: string;
  description: string;

  setDate: (value: Date | null) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;

  disableBtn?: boolean;
  onSubmit: () => void;
}
