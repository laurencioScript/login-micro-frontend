import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@laurencio-academy/login",
  app: () =>
    System.import(
      "@laurencio-academy/login"
    ),
  activeWhen: ["/laurencio45"],
  customProps: {
    btnText : 'Entrar',
    labelUsername : 'Email',
    labelPassword : 'Password',
    optionalText : 'Às vezes as coisas demoram, mas acontecem. O importante é saber esperar e não perder a fé!',
    btnEvent : () => {console.log('teeeeeeeeeeeeste')},
  }
});

registerApplication({
  name: "@laurencio-academy/login 1",
  app: () =>
    System.import(
      "@laurencio-academy/login"
    ),
  activeWhen: ["/laurencio43"],
  customProps: {
    btnText : 'Entrar',
    labelUsername : 'Email',
    labelPassword : 'Password',
    optionalText : 'laurencio 42',
    btnEvent : () => {console.log('teeeeeeeeeeeeste')},
  }
});


start({
  urlRerouteOnly: true,
});
