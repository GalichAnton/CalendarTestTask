import React, { FC } from 'react';

import cn from 'classnames';

import styles from './textarea.module.scss';
import { ITextAreaProps } from './textareaProps';

const TextArea: FC<ITextAreaProps> = (props) => {
  const { value, name, disabled, ...otherProps } = props;
  return (
    <textarea
      name={name}
      className={cn(styles.textArea, {
        [styles.textAreaFull]: value?.length,
      })}
      {...otherProps}
      value={value}
      disabled={disabled}
    />
  );
};
export default TextArea;
