require.config({
	baseUrl : "/", 
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"elevateZoom" : "/lib/jquery_plugins/jquery.elevateZoom-3.0.8.min",
		"fly" : "/lib/jquery_plugins/jquery.fly.min",
		"template" : "lib/arttemplate/template",
		"load" : "js/loadHeaderFooter",
		"carousel":"js/carousel"
	},
	shim : {
		"elevateZoom" : {
			deps : ["jquery"]
		},
		"carousel":{
			deps:["jquery"]
		},
		"cookie":{
			deps:["jquery"]
		},
		"fly":{
			deps:["jquery"]
		}
	}
});