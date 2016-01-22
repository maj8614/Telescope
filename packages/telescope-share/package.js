Package.describe({
  name: "telescope:share",
  summary: "Telescope share module package",
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
  git: "https://github.com/TelescopeJS/telescope-share.git"
});

Package.onUse(function (api) {

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
    'lib/share.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/post_share.html',
    'lib/client/post_share.js',
    'lib/client/post_share.scss'
  ], ['client']);

  // api.export();
});
