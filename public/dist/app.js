window.App = Ember.Application.create();

App.Router.map(function() {
  this.route("folders");
});

App.FoldersView = Em.View.extend()

App.Item = Ember.Object.extend()


App.ItemListView = Em.CollectionView.extend({
  tagName: 'ul',
  classNames: ['draggable'],
  itemViewClass: JQ.DragView.extend({
    //setup
    templateName: 'item',
    classNames: ['box'],
    revert: 'invalid',
    //helpers
    serializeData: function(model){
      return JSON.stringify(model);
    },
    start: function(event, ui){
      //Grabs the Content and converts to JSON, then attaches the data
      var dataString = this.serializeData(this.get('content');
      this.$().data("model", dataString);
    },

  }),
  // Stub data
  content: [App.Item.create({name:'item1'}), 
            App.Item.create({name:'item2'}),
            App.Item.create({name:'item3'})]
})

App.ItemDropView = JQ.DropView.extend({
  //settings / setup
  content: [],
  templateName: 'dropzone',
  tagName: 'section',
  classNames: ['dropZone'],
  accept: '.box',
  revert: 'invalid',
  
  //events and helper methods
  deserializeModel: function(dataString){
    var model;
    return model = App.Item.create(JSON.parse(dataString));
  },
  drop: function( event, ui ) {
      if(ui){
        //convert data from string back into Ember object
        model = this.deserializeModel($(ui.helper.context).data('model'));
        this.get('content').pushObject(model);
      }
  }
})

//component test, doesnt do anything atm
App.DragDropComponent = Em.Component.extend({
  didInsertElement: function(){console.log("dragComp")}
})