JQ.DragView = Ember.View.extend(JQ.Widget, {
  uiType: 'draggable',
  uiOptions: ['disabled', 'addClasses', 'appendTo', 'axis', 'cancel', 
            'connectToSortable', 'containment', 'cursor', 'delay', 'revert',
            'distance', 'grid', 'handle', 'snap', 'snapMode', 'stack'],
  uiEvents: ['create', 'start', 'drag', 'stop']
})

JQ.DropView = Ember.View.extend(JQ.Widget, {
  uiType: 'droppable',
  uiOptions: ['accept', 'activeClass', 'addClasses', 'disabled','greedy',
              'hoverClass', 'scope', 'tolerance'],
  uiEvents: ['activate', 'create', 'deactivate', 'drop', 'out', 'over']  
})
