Package.describe({
  name: "telescope:subscribe-to-posts",
  summary: "Subscribe to posts to be notified when they get new comments",
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
  git: "https://github.com/TelescopeJS/telescope-subscribe-to-posts.git"
});


Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

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

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  api.addFiles([
    'lib/subscribe-to-posts.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/post_subscribe.html',
    'lib/client/templates/post_subscribe.js',
    'lib/client/templates/user_subscribed_posts.html',
    'lib/client/templates/user_subscribed_posts.js'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/publications.js'
  ], ['server']);

  // i18n languages (must come last)

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
    'subscribeItem',
    'unsubscribeItem'
  ]);

});
