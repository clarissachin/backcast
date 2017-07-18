var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
