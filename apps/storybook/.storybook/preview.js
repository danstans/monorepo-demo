import React from "react"
import { UiProvider } from "pacemaker";
import { addParameters } from "@storybook/react";


export const decorators = [
  (Story) => (
    <UiProvider>
        <div className="flex justify-center" style={{ minWidth: 580 }}>
          <Story />
        </div>
    </UiProvider>
  ),
]


addParameters({
  options: {
    storySort: {
      order: [
        "Welcome",
        "*"
      ]
    }
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
