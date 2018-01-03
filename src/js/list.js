require(["config"], function(){
	require(["jquery", "template", "load"], function($, template){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// 渲染数据
			var html = template("list_template", renderData);
			$(".main").html(html);
		});
	});
});