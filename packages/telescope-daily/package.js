Package.describe({
  name: "telescope:daily",
  summary: "Telescope daily view",
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

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    'telescope:core@0.23.0',
    'telescope:singleday@0.23.0',
=======
    'telescope:core@0.25.5'
>>>>>>> TelescopeJS/master
=======
    'telescope:core@0.25.6'
>>>>>>> TelescopeJS/master
=======
    'telescope:core@0.25.6'
>>>>>>> TelescopeJS/master
  ]);

  api.addFiles([
    'package-tap.i18n',
    'lib/daily.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/after_day.html',
    'lib/client/templates/before_day.html',
    'lib/client/templates/posts_daily.html',
    'lib/client/templates/posts_daily.js',
    'lib/client/templates/day_heading.html',
    'lib/client/templates/load_more_days.html',
    'lib/client/templates/load_more_days.js',
    'lib/client/stylesheets/daily.scss',
    ], ['client']);

  api.addFiles([
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

});
