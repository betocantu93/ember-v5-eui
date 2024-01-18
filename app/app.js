import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-new/config/environment';

import darkTheme from "@ember-eui/core/themes/dark.css";
// import euiExtensions from "@ember-eui/core/styles/ember-eui.css"

// darkTheme;
// euiExtensions;

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
