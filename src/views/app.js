var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(
      window.exampleVideoData
    );
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    // make searchView
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();

    // make listView
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    // make playerView
    var playerView = new VideoPlayerView({
      collection: this.videos
    });

    // this.$el.html(this.template({
    //   searchView: searchView.render().$el,
    //   listView: listView.render(),
    //   playerView: playerView.render()
    // }));

    return this;
  },

  template: templateURL('src/templates/app.html')
  
});

