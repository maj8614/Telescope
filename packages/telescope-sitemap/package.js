Package.describe({
  name: "telescope:sitemap",
  summary: "Sitemap package for Telescope",
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
  git: "https://github.com/TelescopeJS/telescope-sitemap.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "telescope:core@0.23.0",
=======
    "telescope:core@0.25.5",
>>>>>>> TelescopeJS/master
=======
    "telescope:core@0.25.6",
>>>>>>> TelescopeJS/master
=======
    "telescope:core@0.25.6",
>>>>>>> TelescopeJS/master
    "gadicohen:sitemaps@0.0.20"
  ]);

  // server
  api.addFiles([
    "lib/server/sitemaps.js"
  ], ["server"]);

});
