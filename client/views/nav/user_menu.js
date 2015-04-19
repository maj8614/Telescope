Template.userMenu.helpers({
  menuLabel: function () {
    return getDisplayName(Meteor.user());
  },
  menuItems: function () {
    return Telescope.config.userMenu;
  },
  menuMode: function () {
    if (!!this.mobile) {
      return 'list';
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {
      return 'dropdown';
    } else {
      return 'accordion';
    }
  }
});
