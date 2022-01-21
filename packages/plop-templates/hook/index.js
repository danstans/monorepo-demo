module.exports = (plop) => {
  plop.setGenerator("Hook", {
    description: "New pacemaker hook",
    prompts: [
      {
        type: "input",
        name: "hookName",
        message: "What is the name of your hook? (e.g useState, useQuery)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/pacemaker/hooks/{{camelCase hookName}}.tsx",
        templateFile: "packages/plop-templates/hook/hook.hbs",
      },
    ],
  });
};
