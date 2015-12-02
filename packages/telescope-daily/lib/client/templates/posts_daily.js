Template.posts_daily.onCreated(function () {
<<<<<<< HEAD
  var instance = this;
  instance.daysCount = new ReactiveVar(instance.data.daysCount);
});

Template.posts_daily.helpers({
  days: function () {
    var instance = Template.instance();
    var daysCount = instance.daysCount.get();

=======
  var template = this;
  var daysCount = FlowRouter.getQueryParam("days") || daysPerPage;
  template.daysCount = new ReactiveVar(daysCount);
});

Template.posts_daily.helpers({
  days: function () {
    var instance = Template.instance();
    var daysCount = instance.daysCount.get();

>>>>>>> TelescopeJS/master
    var daysArray = [];
    for (var i = 0; i < daysCount; i++) {
      daysArray.push({
        date: moment().subtract(i, 'days').startOf('day').toDate(),
        index: i
      });
    }
    return daysArray;
  },
<<<<<<< HEAD
  context: function () {
    var instance = Template.instance();
    var daysCount = instance.daysCount.get();

    // var days = Template.parentData(1);
    var context = {
      terms: {
        view: "singleday",
        date: this.date,
        after: moment(this.date).startOf('day').toDate(),
        before: moment(this.date).endOf('day').toDate(),
        enableCache: daysCount <= 15 ? true : false // only cache first 15 days
      }
    };
=======
  arguments: function () {
    var instance = Template.instance();
    var daysCount = instance.daysCount.get();

    FlowRouter.watchPathChange();
    var terms = _.clone(FlowRouter.current().queryParams);

    terms = _.extend(terms, {
      view: "top",
      date: this.date,
      after: moment(this.date).format("YYYY-MM-DD"),
      before: moment(this.date).format("YYYY-MM-DD"),
      enableCache: daysCount <= 15 ? true : false // only cache first 15 days
    });

    var context = {terms: terms};
>>>>>>> TelescopeJS/master
    return context;
  },
  loadMoreHandler: function () {
    var instance = Template.instance();
    var daysCount = instance.daysCount.get();

    return function () {
      var newCount = daysCount + daysPerPage;
      instance.daysCount.set(newCount);
    };
  }
});
