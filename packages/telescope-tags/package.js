Package.describe({
  name: "telescope:tags",
  summary: "Telescope tags package",
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-tags.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

<<<<<<< HEAD
  api.use(['telescope:core@0.23.0']);
=======
  api.use(['telescope:core@0.25.5']);
>>>>>>> TelescopeJS/master

  api.addFiles([
    'lib/categories.js',
    'lib/helpers.js',
    'lib/callbacks.js',
    'lib/parameters.js',
    'lib/custom_fields.js',
    'lib/methods.js',
    'lib/modules.js',
<<<<<<< HEAD
=======
    'lib/routes.js',
>>>>>>> TelescopeJS/master
    'package-tap.i18n'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/scss/categories.scss',
    'lib/client/templates/categories_admin.html',
    'lib/client/templates/categories_admin.js',
    'lib/client/templates/category_item.html',
    'lib/client/templates/category_item.js',
    'lib/client/templates/categories_menu.html',
    'lib/client/templates/categories_menu.js',
    'lib/client/templates/categories_menu_item.html',
    'lib/client/templates/categories_menu_item.js',
    'lib/client/templates/category_title.html',
    'lib/client/templates/category_title.js',
    'lib/client/templates/posts_category.html',
    'lib/client/templates/post_categories.html',
    'lib/client/templates/post_categories.js',
    'lib/client/templates/autoform_category.html',
    'lib/client/templates/autoform_category.js'
    ], ['client']);

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
    'Categories'
  ]);
});
