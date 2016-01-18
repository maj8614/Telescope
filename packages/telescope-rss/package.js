Package.describe({
  name: "telescope:rss",
  summary: "Telescope RSS package",
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-rss.git"
});

Npm.depends({rss: "1.1.1"});

Package.onUse(function (api) {

<<<<<<< HEAD
<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master
=======
  api.use(['telescope:core@0.25.6']);
>>>>>>> TelescopeJS/master

  api.addFiles(['lib/server/rss.js', 'lib/server/routes.js'], ['server']);

});
