(function ($j) {

  "use strict";

  var app = {

	  query: 'https://api.github.com/users/chris-brown/repos',
	  containerId: '#container',

	  init: function(){
	  	this.getData();
	  },

	  getData: function(){
	  	$j.getJSON(this.query, $j.proxy(this.callback, this))
	  },

	  callback: function(data){
	  	if(data && data.length > 0){
		  	var compiledTemplate = Handlebars.templates['demo-list'];
		  	$j(this.containerId).html(compiledTemplate(data));
	  	}
	  }

  }

  app.init();

})(jQuery);