require(["config"], function(){
	require(["jquery", "template", "cookie" ,"fly","load"], function($, template,cookie){
		// 异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			// 准备渲染数据
			var renderData = {products : data.res_body.data};
			// 渲染数据
			var html = template("list_template", renderData);
			$(".buy").html(html);

		});
		//配置cookie插件的json数据自动转换
		$.cookie.json=true;
		//利用事件委派，为"加入购物车"绑定点击事件
		//保存:[{},{},{}]
	$(".buy").delegate(".add_to_cart","click",function(event){
		//当前"加入购物车"父级元素
		var _box=$(this).parent();
		//将当前选购商品的信息保存到对象中
		var prod={
			id:_box.children(".id").text(),
			title:_box.children(".title").text(),
			price:_box.children(".price").text(),
			amount:1,
			img:_box.children("#img").attr("src")
		};
		console.log(prod.img);
		//查找cookie中已有的购物车结构
		var _products=$.cookie("products") || [];
		//判断当前选购商品是否在数组中已有选购
		var index=exist(prod.id,_products);
		if(index===-1){
			//将当前选购商品保存到数组中
			_products.push(prod);
		}else{
			//将已选购商品数量自增
			_products[index].amount++;
		}
		//将数组存会cookie中
		$.cookie("products",_products,{expires:7,path:"/"});
		/*加入购物车成功的抛物线效果*/
		var flyer=$(`<img src="${_box.children("#img").attr("src")}">`);
		flyer.fly({
			start:{
				left:event.pageX,
				top:event.pageY
			},
			end:{
				left:$("#car").offset().left,
				top:$("#car").offset().top,
				width:0,
				height:0
			}
		});
	});
	//跳转到详情页面
	$(".buy").delegate("#img","click",function(event){
		var box=$(this).parent();
		var _id=box.children(".id").text();
		/*console.log(_id);*/
		$.cookie("id",_id,{expires:7,path:"/"});
		location="/html/detail.html";
	});
	//查找id所表示的商品所在products中的位置
	function exist(id,products){
		var idx=-1;
		$.each(products,function(index,element){
			if(element.id==id){
				idx=index;
				return false;
			}
		});
		return idx;
	}
	


	});

});
