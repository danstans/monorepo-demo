module.exports = plop => {
plop.setGenerator("component", {
    description: "react component tsx",
    prompts: [
      {
        type: "list",
        name: "project",
        message: "Select a project to add a component to",
        choices: ["Kariko", "ui"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/pacemaker/components/{{dashCase name}}/{{pascalCase name}}.tsx",
        templateFile: "packages/plop-templates/components/component.hbs",
      },
      {
        type: "add",
        path: "packages/pacemaker/components/{{dashCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "packages/plop-templates/components/stories.hbs",
      },
      {
        type: "add",
        path: "packages/pacemaker/components/{{dashCase name}}/{{pascalCase name}}.types.ts",
        templateFile: "packages/plop-templates/components/types.hbs",
      },
      {
        type: "add",
        path: "packages/pacemaker/components/{{dashCase name}}/index.tsx",
        templateFile: "packages/plop-templates/components/index.hbs",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "packages/pacemaker/index.ts",
        templateFile: "packages/plop-templates/injectable-index.ts.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        type: "append",
        path: "packages/pacemaker/index.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './components/{{dashCase name}}';`,
      },
      {
        type: "append",
        path: "packages/pacemaker/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });
}