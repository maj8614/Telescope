daysPerPage = 5;

Telescope.menuItems.add("viewsMenu", {
  route: Posts.getRoute,
  name: 'daily',
  label: 'daily',
<<<<<<< HEAD
  description: 'day_by_day_view'
});

_.findWhere(Telescope.modules.top,{template: "posts_views_nav"}).only.push("postsDaily");
=======
  description: 'day_by_day_view',
  viewTemplate: 'posts_daily'
});
>>>>>>> TelescopeJS/master
