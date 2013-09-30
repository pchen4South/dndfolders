window.App = Ember.Application.create();

App.Router.map(function() {
  this.route("folders");
});

App.FoldersView = Em.View.extend()

App.DragDropComponent = Em.Component.extend({
  testAttr: "hi",
  didInsertElement: function(){console.log("dragComp")}
})