window.App = Ember.Application.create();

App.Router.map(function() {
  this.route("folders");
});

App.FoldersView = Em.View.extend()

App.Item = Ember.Object.extend()


App.ItemListView = Em.CollectionView.extend({
  didInsertElement: function(){console.log("fu")},
  tagName: 'ul',
  classNames: ['draggable'],
  itemViewClass: JQ.DragView.extend({
    templateName: 'item',
    classNames: ['box'],
    revert: 'invalid',
    start: function(event, ui){
      //Grabs the Content and converts to JSON, then attaches the data
      var model = JSON.stringify(this.get('content'));
      this.$().data("model", model);
    },

  }),
  // Stub data
  content: [App.Item.create({name:'item1'}), 
            App.Item.create({name:'item2'}),
            App.Item.create({name:'item3'})]
})

App.ItemDropView = JQ.DropView.extend({
  content: [],
  templateName: 'dropzone',
  tagName: 'section',
  classNames: ['dropZone'],
  accept: '.box',
  revert: 'invalid',
  drop: function( event, ui ) {
      var model = null;
      if(ui){
        model = JSON.parse($(ui.helper.context).data('model'));
        model = App.Item.create(model);
        }
      if(model)
      {
        window.cont = this.get('content');
        cont.pushObject(model);
        this.set('content', cont);
      }
  }
})

App.DragDropComponent = Em.Component.extend({
  testAttr: "hi",
  didInsertElement: function(){console.log("dragComp")}
})