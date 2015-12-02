Categories = new Mongo.Collection("categories");

// category schema
Categories.schema = new SimpleSchema({
  name: {
    type: String,
    editableBy: ["admin"]
  },
  description: {
    type: String,
    optional: true,
    editableBy: ["admin"],
    autoform: {
      rows: 3
    }
  },
  order: {
    type: Number,
    optional: true,
    editableBy: ["admin"]
  },
  slug: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  },
  image: {
    type: String,
    optional: true,
    editableBy: ["admin"]
  },
  parentId: {
    type: String,
    optional: true,
    editableBy: ["admin"],
    autoform: {
      options: function () {
        var categories = Categories.find().map(function (category) {
          return {
            value: category._id,
            label: category.name
          };
        });
        return categories;
      }
    }
  }
});

Meteor.startup(function(){
  Categories.internationalize();
});

<<<<<<< HEAD
/**
 * Get all of a category's parents
 * @param {Object} category
 */
Categories.getParents = function (category) {
  var categoriesArray = [];

  var getParents = function recurse (category) {
    var parent;
    if (parent = Categories.findOne(category.parentId)) {
      categoriesArray.push(parent);
      recurse(parent);
    }
  }(category);

  return categoriesArray;
};
Categories.helpers({getParents: function () {return Categories.getParents(this);}});

/**
 * Get all of a category's children
 * @param {Object} category
 */
Categories.getChildren = function (category) {
  var categoriesArray = [];

  var getChildren = function recurse (categories) {
    var children = Categories.find({parentId: {$in: _.pluck(categories, "_id")}}).fetch()
    if (children.length > 0) {
      categoriesArray = categoriesArray.concat(children);
      recurse(children);
    }
  }([category]);

  return categoriesArray;
};
Categories.helpers({getChildren: function () {return Categories.getChildren(this);}});

// category post list parameters
Posts.views.add("category", function (terms) {
  var category = Categories.findOne({slug: terms.category});
  var childCategories = category.getChildren(category);
  var categoriesIds = [category._id].concat(_.pluck(childCategories, "_id"));
  return {
    find: {'categories': {$in: categoriesIds}} ,
    options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
  };
});
=======
Categories.attachSchema(Categories.schema);
>>>>>>> TelescopeJS/master

Meteor.startup(function () {
  Categories.allow({
    insert: Users.is.adminById,
    update: Users.is.adminById,
    remove: Users.is.adminById
  });
});


<<<<<<< HEAD
// add callback that adds categories CSS classes
function addCategoryClass (postClass, post) {
  var classArray = _.map(getPostCategories(post), function (category){return "category-"+category.slug;});
  return postClass + " " + classArray.join(' ');
}
Telescope.callbacks.add("postClass", addCategoryClass);
=======
Settings.addField([
  {
    fieldName: 'categoriesBehavior',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        group: 'categories',
        instructions: 'Let users filter by one or multiple categories at a time.', 
        options: function () {
          return [
            {value: "single", label: i18n.t("categories_behavior_one_at_a_time")},
            {value: "multiple", label: i18n.t("categories_behavior_multiple")}
          ];
        }
      }
    }
  },
  {
    fieldName: 'hideEmptyCategories',
    fieldSchema: {
      type: Boolean,
      optional: true,
      autoform: {
        group: 'categories',
        instructions: 'Hide empty categories in navigation'
      }
    }
  }
]);
>>>>>>> TelescopeJS/master
