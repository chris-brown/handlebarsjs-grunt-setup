(function ($j) {

  "use strict";

  var app = {

	  query: 'https://api.github.com/users/chris-brown/repos',
	  containerId: '#container',

	  init: function(){
	  	this.$container = $j(this.containerId);

	  	this.getData();
	  },

	  getData: function(){
	  	$j.getJSON(this.query, this.callback)
	  },

	  callback: function(data){
	  	if(data && data.length > 0){
		  	var compiledTemplate = Handlebars.templates['demo-list'];
		  	$j('#container').html(compiledTemplate(data));
	  	}
	  }

  }

  app.init();

})(jQuery);