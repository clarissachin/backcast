var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    
    this.collection.forEach(video => {
      var entry = new VideoListEntryView({model: video});
      this.$el.append(entry.render());
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
