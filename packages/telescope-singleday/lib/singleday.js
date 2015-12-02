Telescope.menuItems.add("viewsMenu", {
  route: Posts.getRoute,
  label: 'singleday',
<<<<<<< HEAD
  description: 'posts_of_a_single_day'
});

Posts.views.add("singleday", function (terms) {
  return {
    find: {
      postedAt: {
        $gte: terms.after,
        $lt: terms.before
      }
    },
    options: {
      sort: {sticky: -1, score: -1}
    }
  };
});

_.findWhere(Telescope.modules.top,{template: "posts_views_nav"}).only.push("postsSingleDay");
=======
  description: 'posts_of_a_single_day',
  viewTemplate: 'single_day'
});
>>>>>>> TelescopeJS/master
