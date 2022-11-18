const fs = require('fs'); // модуль для работы с файловой системой
const path = require('path'); // модуль для преобразования пути
const minimist = require('minimist'); // модуль для преобразования строки аргументов в объект

const args = minimist(process.argv);

const srcPath = [__dirname, '..', 'src']; // путь до папки src текущего проекта
const arrPath = args.path.split('/'); // разбиваем путь из аргумента командной строки на массив
const componentName = arrPath[arrPath.length - 1]; // последний элемент - название компонента

// создание директорий из аргумента (при необходимости)
const currentArray = [];
arrPath.forEach(element => {
  currentArray.push(element);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) { // проверка - существует такая директория или нет?
    fs.mkdirSync(currentResolvePath); // если нет, то создаем новую
  }
});

const componentPath = [...srcPath, ...arrPath];

// создание компонента
const componentCode = `import React, { FC } from 'react';
import { I${componentName}Props } from './${componentName.toLowerCase()}Props';
import styles from './${componentName.toLowerCase()}.module.scss';

const ${componentName}:FC<I${componentName}Props> = () => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
    </div>
  );
};
export default ${componentName};`;
fs.writeFileSync(path.resolve(...componentPath, `index.tsx`), componentCode);



// создание файла стилей
const styleCode = `.${componentName.toLowerCase()} {}`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName.toLowerCase()}.module.scss`), styleCode);

// создание файла prop types
const propTypesCode = `export interface I${componentName}Props {}`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName.toLowerCase()}Props.ts`), propTypesCode);

// создание файла stories
const storiesCode = `import React from 'react';
import { Meta, Story } from '@storybook/react';

import {I${componentName}Props} from './${componentName}Props';

export default {
  title: '',
  component: ${componentName},
} as Meta;

const Template: Story<I${componentName}Props> = (args) => {
  const { children, ...otherArgs } = args;

  return (
    <div>
      <${componentName} {...otherArgs}>{children} </${componentName}>
    </div>
  );
};

const baseArgs = {};`;
fs.writeFileSync(path.resolve(...componentPath, `${componentName.toLowerCase()}.stories.tsx`), storiesCode);



