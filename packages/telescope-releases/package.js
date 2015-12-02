Package.describe({
  name: "telescope:releases",
  summary: "Show Telescope release notes and phone home with some stats.",
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-releases.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  // --------------------------- 1. Meteor packages dependencies ---------------------------

<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.addFiles([
    'lib/releases.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/current_release.html',
    'lib/client/templates/current_release.js'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/publications.js',
    'lib/server/import_releases.js'
  ], ['server']);

<<<<<<< HEAD
  api.addFiles('releases/0.11.0.md', 'server', { isAsset: true });
  api.addFiles('releases/0.11.1.md', 'server', { isAsset: true });
  api.addFiles('releases/0.12.0.md', 'server', { isAsset: true });
  api.addFiles('releases/0.13.0.md', 'server', { isAsset: true });
  api.addFiles('releases/0.14.0.md', 'server', { isAsset: true });
  api.addFiles('releases/0.14.1.md', 'server', { isAsset: true });
  api.addFiles('releases/0.14.2.md', 'server', { isAsset: true });
  api.addFiles('releases/0.14.3.md', 'server', { isAsset: true });
  api.addFiles('releases/0.15.0.md', 'server', { isAsset: true });
  api.addFiles('releases/0.20.4.md', 'server', { isAsset: true });
  api.addFiles('releases/0.20.5.md', 'server', { isAsset: true });
  api.addFiles('releases/0.20.6.md', 'server', { isAsset: true });
  api.addFiles('releases/0.21.1.md', 'server', { isAsset: true });
  api.addFiles('releases/0.22.1.md', 'server', { isAsset: true });
  api.addFiles('releases/0.22.2.md', 'server', { isAsset: true });
  api.addFiles('releases/0.23.0.md', 'server', { isAsset: true });

  // i18n languages (must come last)

  var languages = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "et", "fr", "hu", "it", "ja", "ko", "nl", "pl", "pt-BR", "ro", "ru", "sv", "th", "tr", "vi", "zh-CN"];
=======

  api.addAssets('releases/0.25.5.md', 'server');

  // i18n languages (must come last)

  var languages = ["ar", "bg", "cs", "da", "de", "el", "en", "es", "et", "fr", "hu", "id", "it", "ja", "kk", "ko", "nl", "pl", "pt-BR", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh-CN"];
>>>>>>> TelescopeJS/master
  var languagesPaths = languages.map(function (language) {
    return "i18n/"+language+".i18n.json";
  });
  api.addFiles(languagesPaths, ["client", "server"]);

  // -------------------------------- 3. Variables to export --------------------------------

  api.export([
    'Releases'
  ]);

});
