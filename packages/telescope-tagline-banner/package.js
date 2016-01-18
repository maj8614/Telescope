Package.describe({
  name: "telescope:tagline-banner",
  summary: "Show a banner containing your site's tagline on the homepage",
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  // --------------------------- 1. Meteor packages dependencies ---------------------------

<<<<<<< HEAD
<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master
=======
  api.use(['telescope:core@0.25.6']);
>>>>>>> TelescopeJS/master

  // ---------------------------------- 2. Files to include ----------------------------------

  api.addFiles([
    'lib/tagline.js',
    'package-tap.i18n'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/tagline_banner.html',
    'lib/client/templates/tagline_banner.js',
    'lib/client/stylesheets/tagline_banner.scss'
  ], ['client']);

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
