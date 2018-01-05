require(["config"], function(){
	require(["jquery","carousel","load"], function($){
		$(".banner").eq(0).carousel({
			imgs:[
				{src:"../images/bg1.jpg",href:"#"},
				{src:"../images/bg2.jpg",href:"#"},
				{src:"../images/bg3.jpg",href:"#"},
				{src:"../images/bg4.jpg",href:"#"},
				{src:"../images/bg5.jpg",href:"#"}

			],
			width:1263,
			height:430,
			type:"fade",
			duration:2000
		})
	});
});