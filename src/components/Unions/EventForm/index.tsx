import React, { FC } from 'react';

import Button from '../../UI/Button';
import CalendarDateItem from '../../UI/CalendarDateItem';
import Input from '../../UI/Input';
import TextArea from '../../UI/TextArea';
import styles from './eventform.module.scss';
import { IEventFormProps } from './eventformProps';

const EventForm: FC<IEventFormProps> = (props) => {
  const {
    selected,
    title,
    description,

    setDate,
    setTitle,
    setDescription,

    disableBtn,
    onSubmit,
  } = props;

  return (
    <div className={styles.eventForm}>
      <span className={styles.headerText}>Добавить событие</span>
      <CalendarDateItem
        selected={selected}
        onChange={setDate}
        placeholderText="ДД.ММ.ГГ"
      />
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder="Укажите краткое название"
      />
      <TextArea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
        placeholder="Введите описание"
      />

      <Button disabled={disableBtn} onClick={onSubmit}>
        Добавить
      </Button>
    </div>
  );
};
export default EventForm;
