Package.describe({
  name: "telescope:pages",
  summary: "Telescope static pages package",
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
  git: "https://github.com/TelescopeJS/telescope-pages.git"
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
    'lib/pages.js',
    'lib/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/stylesheets/pages.scss',
    'lib/client/templates/page.html',
    'lib/client/templates/page.js',
    'lib/client/templates/page_item.html',
    'lib/client/templates/page_item.js',
    'lib/client/templates/pages.html',
    'lib/client/templates/pages.js',
    'lib/client/templates/pages_menu.html',
    'lib/client/templates/pages_menu.js'
  ], 'client');

  api.addFiles([
    'lib/server/publications.js'
  ], ['server']);

<<<<<<< HEAD
  var languages = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "et", "fr", "hu", "it", "ja", "ko", "nl", "pl", "pt-BR", "ro", "ru", "sv", "th", "tr", "vi", "zh-CN"];
=======
  var languages = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "et", "fr", "hu", "id", "it", "ja", "kk", "ko", "nl", "pl", "pt-BR", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh-CN"];
>>>>>>> TelescopeJS/master
  var languagesPaths = languages.map(function (language) {
    return "i18n/"+language+".i18n.json";
  });
  api.addFiles(languagesPaths, ["client", "server"]);

  api.export([
    'Pages'
  ]);
});
