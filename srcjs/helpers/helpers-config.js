import { createStore } from 'framework7';
 
export const setConfig = () => {
  // collect all data elements stored in body
  let config = $(document).find("script[data-for='app']");
  config = JSON.parse(config.html());
  
  // always erase existing root value just in case the user changes the root.
  // This may be harmful
  config.root = "#app";
  
  // check if the app is intended to be a PWA
  let isPWA = $('body').attr('data-pwa') === "true";
  
  if (isPWA) {
    config.serviceWorker = {
      path: window.location.pathname + "service-worker.js",
      scope: window.location.pathname
    };
  }
  
  // Widgets cache
  config.store = createStore({
    state: {
      // any other widget type to cache ...
      popovers: [],
      tooltips: [],
      actions: []
    },
    actions: {
      //toggleDarkTheme: function() {
      //  let self = this;
      //  let $html = self.$("html");
      //  $html.toggleClass("theme-dark");
      //}
    }
  });
  
  return config;
};