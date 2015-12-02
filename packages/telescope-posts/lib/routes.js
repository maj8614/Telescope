FlowRouter.route('/', {
  name: "postsDefault",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "main_posts_list"});
  }
});

FlowRouter.route('/posts/:_id/edit', {
  name: "postEdit",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "post_edit"});
  }
});

<<<<<<< HEAD
/**
 * Controller for best view
 */
Posts.controllers.best = Posts.controllers.list.extend({
  view: 'best'
});

/**
 * Controller for pending view
 */
Posts.controllers.pending = Posts.controllers.list.extend({
  view: 'pending'
});

/**
 * Controller for scheduled view
 */
Posts.controllers.scheduled = Posts.controllers.list.extend({
  view: 'scheduled'
});

/**
 * Controller for single post page
 */
Posts.controllers.page = RouteController.extend({

  template: 'post_page',

  subscriptions: function () {
    this.postSubscription = Telescope.subsManager.subscribe('singlePost', this.params._id);
    this.postUsersSubscription = Telescope.subsManager.subscribe('postUsers', this.params._id);
    this.commentSubscription = Telescope.subsManager.subscribe('commentsList', {view: 'postComments', postId: this.params._id});
  },

  post: function() {
    return Posts.findOne(this.params._id);
  },

  getTitle: function () {
    if (!!this.post())
      return this.post().title;
  },

  onBeforeAction: function () {
    if (!this.post()) {
      if (this.postSubscription.ready()) {
        this.render('not_found');
      }
    } else {
      this.next();
    }
  },

  onRun: function() {
    var sessionId = Meteor.default_connection && Meteor.default_connection._lastSessionId ? Meteor.default_connection._lastSessionId : null;
    Meteor.call('increasePostViews', this.params._id, sessionId);
    this.next();
  },

  data: function() {
    return {post: this.post()};
  },

  onAfterAction: function () {

    var post = this.post();

    // check if post is loaded yet
    if (post) {

      // Replace URL
      if (post.slug !== this.params.slug) {
        window.history.replaceState({}, "", post.getPageUrl());
      }
      $('link[rel="canonical"]').attr("href", post.getPageUrl(true));

      // Set SEO properties
      
      var props = {meta: {}, og: {}, twitter: {}};

      // Set site name
      props.og.site_name = Settings.get("title");

      // Set title
      props.title = post.title;

      // Set description
      if (!!post.body) {
        var description = Telescope.utils.trimWords(post.body, 100);
        props.meta.description = description;
        props.og.description = description;
      }

      // Set image
      if (!!post.thumbnailUrl) {
        var image = Telescope.utils.addHttp(post.thumbnailUrl);
        props.meta.image = image;
        props.og.image = image;
        props.twitter.image = image;
        props.twitter.card = "summary_large_image";
      }

      // Set Twitter username
      if (!!Settings.get("twitterAccount")) {
        props.twitter.site = Settings.get("twitterAccount");
      }
      
      SEO.set(props);

      $('title').text(post.title);

    }

  },

  fastRender: true
=======
FlowRouter.route('/posts/:_id/:slug?', {
  name: "postPage",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "post_page"});
  }
>>>>>>> TelescopeJS/master
});

var trackRouteEntry = function (context) {
  var sessionId = Meteor.default_connection && Meteor.default_connection._lastSessionId ? Meteor.default_connection._lastSessionId : null;
  Meteor.call('increasePostViews', context.params._id, sessionId);
}

FlowRouter.route('/submit', {
  name: "postSubmit",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "post_submit"});
  }
});