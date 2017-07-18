var Videos = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3',

  model: Video, 

  search: function(searchString) {
    Backbone.ajax({
      url: this.url + '/search',
      method: 'GET',
      data: { 
        q: searchString,
        part: 'snippet',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY
       },
      success: (data) => {
        data = this.parse(data);
        this.reset(data);
        this.trigger('sync');
      },
      error: function(data) {
        console.log('Failure: ', data);
      }
    }); 
  }, 

  parse: function(data) {
    return data.items;
  }

});
