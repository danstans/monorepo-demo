module.exports = function (plop) {
  // create your generators here
  plop.setHelper("toKebab", (txt) =>
    txt
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );

  plop.setActionType("doTheThing", function (answers, config, plop) {
    // do something
    doSomething(config.configProp);
    // if something went wrong
    throw "error message";
    // otherwise
    return "success status message";
  });

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
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/ui/components/{{toKebab name}}/{{pascalCase name}}.tsx",
        templateFile: "packages/plop-templates/components/component.hbs",
      },
      {
        type: "add",
        path: "packages/ui/components/{{toKebab name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "packages/plop-templates/components/stories.hbs",
      },
      {
        type: "add",
        path: "packages/ui/components/{{toKebab name}}/{{pascalCase name}}.types.ts",
        templateFile: "packages/plop-templates/components/types.hbs",
      },
      {
        type: "add",
        path: "packages/ui/components/{{toKebab name}}/index.tsx",
        templateFile: "packages/plop-templates/components/index.hbs",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "packages/ui/index.ts",
        templateFile: "packages/plop-templates/injectable-index.ts.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        type: "append",
        path: "packages/ui/index.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './components/{{toKebab name}}';`,
      },
      {
        type: "append",
        path: "packages/ui/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `{{pascalCase name}},`,
      },
    ],
  });
};
