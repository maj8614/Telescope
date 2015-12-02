Package.describe({
  name: "telescope:i18n",
  summary: "Telescope i18n package",
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

<<<<<<< HEAD
  api.use(['telescope:lib@0.23.0']);
=======
  api.use(['telescope:lib@0.25.5']);
>>>>>>> TelescopeJS/master

  api.use(["session"], "client");

  api.addFiles(['i18n.js'], ['client', 'server']);

  api.export([
    'i18n'
  ]);
});
