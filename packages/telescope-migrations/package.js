Package.describe({
  name: "telescope:migrations",
  summary: "Telescope migrations package",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master
=======
  api.use(['telescope:core@0.25.6']);
>>>>>>> TelescopeJS/master
=======
  api.use(['telescope:core@0.25.6']);
>>>>>>> TelescopeJS/master

  api.addFiles([
    'lib/server/migrations.js'
  ], ['server']);

  api.export([
    'Migrations'
  ]);
});
