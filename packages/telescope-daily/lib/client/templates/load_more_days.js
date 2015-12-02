Template.load_more_days.helpers({
<<<<<<< HEAD
  loadMoreDaysUrl: function () {
    var count = parseInt(this.daysCount) + daysPerPage;
    return '/daily/?days=' + count;
=======
  loadMoreDaysPath: function () {
    // FlowRouter.watchPathChange()
    // var currentQuery = _.clone(FlowRouter.current().queryParams);
    // var days = (FlowRouter.getQueryParam("days") || daysPerPage) + daysPerPage;
    // var newQuery = _.extend(currentQuery, {days: days});
    // return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);
>>>>>>> TelescopeJS/master
  }
});

Template.load_more_days.events({
  'click .load-more-days-button': function (e, instance) {
    e.preventDefault();
    instance.data.handler();
  }
});