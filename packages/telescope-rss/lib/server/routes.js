<<<<<<< HEAD
Meteor.startup(function () {

    // New Post RSS

    Router.route('/feed.xml', function () {
      this.response.write(servePostRSS('new', 'feed.xml'));
      this.response.end();
    }, {
      name: 'feed',
      where: 'server'
    });

    // New Post RSS

    Router.route('/rss/posts/new.xml', function () {
      this.response.write(servePostRSS('top', 'rss/posts/new.xml'));
      this.response.end();
    }, {
      name: 'rss_posts_new',
      where: 'server'
    });

    // Categories RSS

    Router.route('/rss/category/:slug/feed.xml', function () {
      this.response.write(servePostRSS('new', '/rss/category/:slug/feed.xml',this.params.slug));
      this.response.end();
    }, {
      name: 'rss_posts_category',
      where: 'server'
    });

    // Top Post RSS

    Router.route('/rss/posts/top.xml', function () {
      this.response.write(servePostRSS('top', 'rss/posts/top.xml'));
      this.response.end();
    }, {
      name: 'rss_posts_top',
      where: 'server'
    });
=======
Picker.route('/feed.xml', function(params, req, res, next) {
  if (typeof params.query.view === "undefined") {
    params.query.view = 'new';
  }
  res.end(servePostRSS(params.query, 'feed.xml'));
});
>>>>>>> TelescopeJS/master

Picker.route('/rss/posts/new.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new'}, '/rss/posts/new.xml'));
});

Picker.route('/rss/posts/top.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'top'}, '/rss/posts/top.xml'));
});

Picker.route('/rss/posts/best.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'best'}, '/rss/posts/best.xml'));
});

Picker.route('/rss/category/:slug/feed.xml', function(params, req, res, next) {
  res.end(servePostRSS({view: 'new', cat: params.slug}, '/rss/category/:slug/feed.xml'));
});

Picker.route('/rss/comments.xml', function(params, req, res, next) {
  res.end(serveCommentRSS({}, '/rss/comments.xml'));
});
