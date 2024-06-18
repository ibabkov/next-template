import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

import { LANGUAGE } from '../constants/app';

function Document() {
  return (
    <Html lang={LANGUAGE}>
      <body>
        <Head />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
