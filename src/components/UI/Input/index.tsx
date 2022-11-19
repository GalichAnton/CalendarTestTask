import React, { FC } from 'react';

import styles from './input.module.scss';
import { IInputProps } from './inputProps';

const Input: FC<IInputProps> = (props) => {
  const { error, label, name, value, ...otherProps } = props;
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        value={value}
        {...otherProps}
        name={name}
        className={styles.input}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default Input;
