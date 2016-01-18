Package.describe({
  name: "telescope:datetimepicker",
  summary: "Custom bootstrap-datetimepicker input type for AutoForm",
<<<<<<< HEAD
<<<<<<< HEAD
  version: "0.23.0",
=======
  version: "0.25.5",
>>>>>>> TelescopeJS/master
=======
  version: "0.25.6",
>>>>>>> TelescopeJS/master
  git: "https://github.com/TelescopeJS/telescope-datetimepicker.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
<<<<<<< HEAD
<<<<<<< HEAD
    'telescope:core@0.23.0',
    'tsega:bootstrap3-datetimepicker@4.14.30_4'
=======
    'telescope:core@0.25.5',
=======
    'telescope:core@0.25.6',
>>>>>>> TelescopeJS/master
    'tsega:bootstrap3-datetimepicker@4.17.37_1'
>>>>>>> TelescopeJS/master
  ]);

  api.addFiles([
    'datetimepicker.scss',
    'autoform-bs-datetimepicker.html',
    'autoform-bs-datetimepicker.js',
    'bootstrap-collapse-transitions.js'
  ], 'client');

  api.addAssets([
    'fonts/glyphicons-halflings-regular.eot',
    'fonts/glyphicons-halflings-regular.svg',
    'fonts/glyphicons-halflings-regular.ttf',
    'fonts/glyphicons-halflings-regular.woff'
  ], "client");

});
