Package.describe({
  name: "telescope:debug",
  summary: "Telescope debug package",
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
  git: "https://github.com/TelescopeJS/Telescope.git",
  debugOnly: true
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

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
    'lib/debug.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates.js',
    'lib/client/stylesheets/highlight.scss'
  ], ['client']);

});
