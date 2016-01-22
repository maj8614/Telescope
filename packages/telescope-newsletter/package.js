Package.describe({
  name: "telescope:newsletter",
  summary: "Telescope email newsletter package",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.7",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.7",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-newsletter.git"
});

Npm.depends({
  "html-to-text": "1.3.1"
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
    'miro:mailchimp@1.1.0',
  ]);

  api.addFiles([
    'package-tap.i18n',
    'lib/newsletter.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/newsletter_banner.html',
    'lib/client/templates/newsletter_banner.js',
    'lib/client/stylesheets/newsletter_banner.scss'
  ], ['client']);

  api.addFiles([
    'lib/server/campaign.js',
    'lib/server/cron.js',
    'lib/server/mailchimp.js',
    'lib/server/routes.js',
    'lib/server/templates/emailDigest.handlebars',
    'lib/server/templates/emailDigestConfirmation.handlebars',
    'lib/server/templates/emailPostItem.handlebars'
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
    'resetNewsletterSchedule'
  ]);
});
