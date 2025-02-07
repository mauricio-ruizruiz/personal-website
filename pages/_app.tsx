import localFont from 'next/font/local';

import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { createTheme, DEFAULT_THEME, MantineProvider, mergeThemeOverrides } from '@mantine/core';

// import { theme } from '../theme';
// import { theme2 } from '@/theme';

//Local Font from Next JS
const antaFont = localFont({
  src: './anta-v1-latin-regular.woff2',
});

//Theme with Anta Font Family and Default Theme Font Family
const theme2 = createTheme({
  fontFamily: `${antaFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme2}>
      <Head>
        <title>mauricio ruiz ruiz</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
