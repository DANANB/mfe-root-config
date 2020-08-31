import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@dananb/navbar",
//   app: () => System.import("@dananb/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@dananb/navbar",
  app: () => System.import("@dananb/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@dananb/view-todos",
  app: () => System.import("@dananb/view-todos"),
  activeWhen: ["/todos"],
});

registerApplication({
  name: "@dananb/add-todo",
  app: () => System.import("@dananb/add-todo"),
  activeWhen: ["/add"],
});

start({
  urlRerouteOnly: true,
});
