require.config({
	baseUrl : "/", 
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min", "lib/jquery/jquery-1.12.4.min"],
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom",
		"fly" : "lib/jquery_plugins/jquery.fly",
		"template" : "lib/arttemplate/template",
		"load" : "js/loadHeaderFooter"
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		}
	}
});