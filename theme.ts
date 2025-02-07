import localFont from 'next/font/local';
import { createTheme, DEFAULT_THEME, MantineProvider, mergeThemeOverrides } from '@mantine/core';

//Local Font from Next JS
const antaFont = localFont({
  src: './fonts/anta-v1-latin-regular.woff2',
});

//Theme with Kanit Font Family and Default Theme Font Family
export const theme2 = createTheme({
  fontFamily: `${antaFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
});

// const myTheme = mergeThemeOverrides(theme, theme2);

// export const theme = createTheme({
//   /* Put your mantine theme override here */
// });
