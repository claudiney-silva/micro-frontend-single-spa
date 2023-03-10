import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@ccs/react-single",
  app: () =>
    System.import("@ccs/react-single"),
    activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@ccs/react-multiples",
  app: () =>
    System.import("@ccs/react-multiples"),
    activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@ccs/react-route",
  app: () =>
    System.import("@ccs/react-route"),
    activeWhen: (location) => location.pathname === '/react-route',
});

registerApplication({
  name: "@ccs/react-lazy",
  app: () =>
    System.import("@ccs/react-lazy"),
    activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@ccs/react-header",
  app: () =>
    System.import("@ccs/react-header"),
    activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
