var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    console.log('this.collection', this.collection);
    this.collection.forEach(function(video) {
      var entry = new VideoListEntryView({ model: video});
      entry.render();
    });
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
