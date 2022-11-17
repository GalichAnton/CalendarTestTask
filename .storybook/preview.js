import React from 'react';

import '../src/style-utils/index.scss'
import viewport from './viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport,
}