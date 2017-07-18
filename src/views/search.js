var SearchView = Backbone.View.extend({
  events: {
    'click button': 'triggerSearch',
    'keyup' : 'checkIf13'
  },

  checkIf13: function(code) {
    if (code.keyCode === 13) {
      this.triggerSearch();
    }
  },
  triggerSearch: function() {
    this.collection.search(this.$('input').val());      
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
