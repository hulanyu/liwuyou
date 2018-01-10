require(["config"], function(){
	require(["jquery","elevateZoom", "template", "cookie" ,"fly","load"], function($,elevateZoom,template,cookie,fly){
	
		//配置cookie插件的json数据自动转换
		$.cookie.json=true;
		//加载对应商品的数据
		var contrast = $.cookie("id");

		$.getJSON("/mock/detail.json",function(data){
			let contrData=data.res_body.data;
			let arr=[],i=0;
			$.each(contrData,function(index,elements){
				arr.push(`${elements.id}`);

			});
			i=$.inArray(contrast,arr);
			// 准备渲染数据
			let renderData = {products : data.res_body.data};
			var array=[];
			array.push(renderData.products[i]);
			// 渲染数据
			var html="";
			$.each(array,function(index,element){
				 html =`<div>
			<div id="pics">
				<a href="#" data-image="${element.b_img1}" data-zoom-image="${element.t_img1}" class="focus">
						<img src="${element.s_img1}" class="img" >
				</a>
				<a href="#" data-image="${element.b_img2}" data-zoom-image="${element.t_img2}" class="focus">
						<img src="${element.s_img2}" class="img" >
				</a>
				<a href="#" data-image="${element.b_img3}" data-zoom-image="${element.t_img3}" class="focus">
						<img src="${element.s_img3}" class="img" >
				</a>
				<a href="#" data-image="${element.b_img4}" data-zoom-image="${element.t_img4}" class="focus">
						<img src="${element.s_img4}" class="img" >
				</a>
				<a href="#" data-image="${element.b_img5}" data-zoom-image="${element.t_img5}" class="focus">
						<img src="${element.s_img5}" class="img" >
				</a>
			</div>
			<div id="imgwrapper">
					<img id="zoom-03" src="${element.t_img1}" data-zoom-image="${element.b_img1}">
			</div>
			<div class="goods-attr">
				<div class="id" style="display: none;">${element.id}</div>
				<img src="${element.t_img1}" style="display:none"/>
				<div class="title">${element.title}</div>
				<p class="jieshao">
					${element.jieshao}
				</p>
				<div class="price">
				${element.price}		
				</div>	
				<div class="add">
					加入购物车	
				</div>
			</div>
		</div>`
				 $(".gb").html(html);

			});
			$("#zoom-03").elevateZoom({
			    gallery: 'pics', //缩略图id
                lensColour: '#fede4f',//放大镜背景颜色
                cursor: 'move',//悬浮在放大镜鼠标形状
                borderSize: '1',//右侧放大镜边框尺寸
                borderColour: '#dddddd' //右侧放大镜边框颜色
            });
            
		});
		//利用事件委派，为"加入购物车"绑定点击事件
		//保存:[{},{},{}]
	$(".goods-attr").delegate(".add","click",function(event){
		//当前"加入购物车"父级元素
		con
		var _box=$(this).parent();
		//将当前选购商品的信息保存到对象中
		var prod={
			id:_box.children(".id").text(),
			title:_box.children(".title").text(),
			price:_box.children(".price").text(),
			amount:1,
			img:_box.children("#zoom-03").attr("src")
		};
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

