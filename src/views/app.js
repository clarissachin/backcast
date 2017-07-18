var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    // make searchView
    var searchView = new SearchView({collection: this.videos});
    // make listView
    var listView = new VideoListView({ collection: this.videos });
    // make playerView
    var playerView = new VideoPlayerView({ collection: this.videos });

    this.$el.html(this.template({
      searchView: searchView.render(),
      listView: listView.render(),
      playerView: playerView.render()
    }));

    console.log(this.$el);

    return this;
  },

  template: templateURL('src/templates/app.html')
  
});

