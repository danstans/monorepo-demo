import React from "react"
import { UiProvider, muiTheme } from "ui";
// import { ThemeProvider } from 'emotion-theming';


export const decorators = [
  (Story) => (
    <UiProvider>
        <div className="flex justify-center" style={{ minWidth: 580 }}>
          <Story />
        </div>
    </UiProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
