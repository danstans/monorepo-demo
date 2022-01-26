const Component = require("./packages/plop-templates/component");
const Hook = require("./packages/plop-templates/hook")

module.exports = function (plop) {
  Component(plop);
  Hook(plop);
};
