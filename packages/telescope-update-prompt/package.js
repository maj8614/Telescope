Package.describe({
  name: "telescope:update-prompt",
  summary: "Telescope update prompt package.",
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-update-prompt.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master


  api.addFiles([
    'lib/package_versions.js'
  ], ['client','server']);

  api.addFiles([
    'lib/client/update.js',
    'lib/client/templates/update_banner.html',
    'lib/client/templates/update_banner.js',
    'lib/client/templates/update_banner.css'
  ], ['client']);

  api.addFiles([
    'lib/server/phone_home.js'
  ], ['server']);

  api.export([
    'compareVersions'
  ]);
});
