var VideoPlayerView = Backbone.View.extend({
  initialize: function() { 
    this.collection.on('select', this.render, this);
  },

  render: function(e) {
    //console.log(e);
    if (!e) {
      this.$el.html('<div class="loading">Please wait...</div>');
      return this.$el;
    } else {
      this.$el.html(this.template(e.attributes));
    }  
  },

  template: templateURL('src/templates/videoPlayer.html')

});
