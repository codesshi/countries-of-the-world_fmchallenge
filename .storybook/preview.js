import '../src/index.css';
import {ThemeProvider} from '../src/hooks/useTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen"
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const themeDecorator = (Story, context) => {
  const theme = context.globals.theme

  return <ThemeProvider defaultTheme={theme}><Story {...context}/></ThemeProvider>
}

export const decorators = [themeDecorator]