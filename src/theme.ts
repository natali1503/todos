import { createTheme } from '@mui/material/styles';

export const themeSettings = (): object => {
  const breakpoints = {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  };
  return {
    breakpoints,
  };
};
type Theme = ReturnType<typeof createTheme>;
export function useMode(): [Theme] {
  const theme = createTheme(themeSettings());
  return [theme];
}
