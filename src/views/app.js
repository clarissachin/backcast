var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(
      // window.exampleVideoData
    );

    this.render();

    // listen for videos sync once(?)
    this.videos.on('sync', () => {
      // trigger select on first video
      this.videos.at(0).select();
    });

    this.videos.search('jumping cats');
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
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    // this.$el.html(this.template({
    //   searchView: searchView.render().$el,
    //   listView: listView.render(),
    //   playerView: playerView.render()
    // }));

    return this;
  },

  template: templateURL('src/templates/app.html')
  
});

