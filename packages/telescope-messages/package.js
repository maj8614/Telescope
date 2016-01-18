Package.describe({
  name: "telescope:messages",
  summary: "Telescope messages package",
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
  git: "https://github.com/TelescopeJS/telescope-messages.git"
=======
  version: "0.25.5",
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/Telescope.git"
>>>>>>> TelescopeJS/master
});

Package.onUse(function(api) {
  
  api.versionsFrom("METEOR@1.0");

<<<<<<< HEAD
<<<<<<< HEAD
  api.use(['telescope:lib@0.23.0']);
=======
  api.use(['telescope:lib@0.25.5']);
=======
  api.use(['telescope:lib@0.25.6']);
>>>>>>> TelescopeJS/master

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);
>>>>>>> TelescopeJS/master

  api.addFiles([
    'lib/client/messages.js',

    'lib/client/templates/messages.html',
    'lib/client/templates/messages.js',
    'lib/client/templates/message_item.html',
    'lib/client/templates/message_item.js'
  ], 'client');

  api.export('Messages', 'client');
});
