Package.describe({
  name: "telescope:events",
  summary: "Telescope event tracking package",
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  api.use([
<<<<<<< HEAD
<<<<<<< HEAD
    'telescope:lib@0.23.0',
    'telescope:i18n@0.23.0'
=======
    'telescope:lib@0.25.5',
    'telescope:i18n@0.25.5'
>>>>>>> TelescopeJS/master
=======
    'telescope:lib@0.25.6',
    'telescope:i18n@0.25.6'
>>>>>>> TelescopeJS/master
  ]);

  api.addFiles([
    'lib/events.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/analytics.js'
  ], ['client']);

  api.export([
    'Events'
  ]);
});
