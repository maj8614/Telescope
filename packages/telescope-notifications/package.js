Package.describe({
  name: "telescope:notifications",
  summary: "Telescope notifications package",
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
  git: "https://github.com/TelescopeJS/telescope-notifications.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    'telescope:core@0.23.0',
=======
    'telescope:core@0.25.5',
>>>>>>> TelescopeJS/master
=======
    'telescope:core@0.25.6',
>>>>>>> TelescopeJS/master
=======
    'telescope:core@0.25.6',
>>>>>>> TelescopeJS/master
    'kestanous:herald@1.3.0',
    'kestanous:herald-email@0.5.0'
  ]);

  api.addFiles([
    'lib/herald.js',
    'lib/helpers.js',
    'lib/custom_fields.js',
    'lib/notifications.js',
    'lib/callbacks.js',
    'lib/modules.js',
    'lib/routes.js',
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/notification_item.html',
    'lib/client/templates/notification_item.js',
    'lib/client/templates/notifications_mark_as_read.html',
    'lib/client/templates/notifications_mark_as_read.js',
    'lib/client/templates/notification_new_comment.html',
    'lib/client/templates/notification_new_reply.html',
    'lib/client/templates/notification_post_approved.html',
    'lib/client/templates/notifications_menu.html',
    'lib/client/templates/notifications_menu.js',
    'lib/client/templates/unsubscribe.html',
    'lib/client/templates/unsubscribe.js',
  ], ['client']);

  api.addFiles([
    'lib/server/notifications-server.js',
    'lib/server/routes.js',
    'lib/server/templates/emailAccountApproved.handlebars',
    'lib/server/templates/emailNewComment.handlebars',
    'lib/server/templates/emailNewPost.handlebars',
    'lib/server/templates/emailNewPendingPost.handlebars',
    'lib/server/templates/emailPostApproved.handlebars',
    'lib/server/templates/emailNewReply.handlebars',
    'lib/server/templates/emailNewUser.handlebars'
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
    'Herald'
  ]);
});

// TODO: once user profile edit form is generated dynamically, add notification options from this package as well.
