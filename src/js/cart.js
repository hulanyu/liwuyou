require(["config"], function(){
	require(["jquery","template","cookie","load"], function($,template,cookie){
			//cookie 配置
	$.cookie.json=true;
	//读取cookie中保存的购物车数据
	var _products=$.cookie("products") || [];
	//判断
	if(_products.length ===0){
		//购物车为空
		$(".cart_body").html(`购物车为空,请<a href="list.html">选购商品</a>`);
		return;
	}
	/*将购物车中保存的商品渲染显示到页面中*/
	var html=template("cart_template",{products:_products});
	$(".cart_body").html(html);
	/*************************************************/
	//查找id所表示的商品在products中位置
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

	/*******************************************************/
	/*删除选购商品*/
	$(".cart_body").on("click",".del",function(){
		if(confirm("确认删除？")){
			//当前"删除"链接所在行
			var _row=$(this).parents(".product");
			//获取当前删除商品的id
			var _id=_row.children(".id").text();
			//当前删除商品在所有数组元素中的下标
			var index=exist(_id,_products);
			//删除数组中对应的下标处元素
			_products.splice(index,1);
			//保存回cookie中
			$.cookie("products",_products,{expires:7,path:"/"});
			//从页面删除DOM元素
			_row.remove();
			//计算合计
			calcTotal();
		}
	});

	/*****************************************************************/
	/*修改商品数量*/
	//+/-
	$(".cart_body").on("click",".add,.minus",function(){
		//当前+/-所在行
		var _row=$(this).parents(".product");
		//获取当前删除商品的id
		var _id=_row.children(".id").text();
		//当前删除商品在所有数组元素中的下标
		var index=exist(_id,_products);
		//当前行所对应的商品对象
		var  _prod=_products[index];
		if($(this).is(".add")){
			//数量+
			_prod.amount++;
		}else{
			//数量-
			if(_prod.amount<=1)
				return;
			_prod.amount--;
		}
		//保存回cookie中
		$.cookie("products",_products,{expires:7,path:"/"});
		//显示修改后的数量
		_row.find(".amount_num").val(_prod.amount);
		//显示小计
		_row.children(".sub").text(_prod.amount*_prod.price);
		//计算合计
		calcTotal();

		});
	//输入修改
	$(".cart_body").on("blur",".amount_num",function(){
		//当前输入框所在行
		var _row=$(this).parents(".product");
		//获取当前删除商品的id
		var _id=_row.children(".id").text();
		//当前删除商品在所有数组元素中的下标
		var index=exist(_id,_products);
		//当前行所对应的商品对象
		var _prod=_products[index];
		//判断输入格式是否正确
		if(!/^[1-9]\d*$/.test($(this).val())){
			//输入不合法，还原原有数量
			$(this).val(_prod.amount);
			return;
		}
		//数量修改成功
		_prod.amount=$(this).val();
		//保存回cookie中
		$.cookie("products",_products,{expires:7,path:"/"});
		//显示小计
		_row.children(".sub").text(_prod.amount*_prod.price);
		//计算合计
		calcTotal();
	});
	/**************************************************************/
	//全选
	$(".ck_all").click(function(){
		//获取当前全选复选框中状态
		var status=$(this).prop("checked");
		//将所有商品行前复选框选中状态设置与全选一致状态
		$(".ck_product").prop("checked",status);
		//计算合计
		calcTotal();
	});
	$(".ck_product").click(function(){
		var status=$(".ck_product:checked").length===_products.length            
		$(".ck_all").prop("checked",status);
		//计算合计
		calcTotal();
	});
	/**************************************************************/
	/*计算合计*/
	function calcTotal(){
		//获取所有选中的商品行前的复选框
		var sum=0;
		$(".ck_product:checked").each(function(index,element){
			sum+=Number($(this).parents(".product").children(".sub").text());
		
		});
		$(".total .money").text(sum.toFixed(2));

	}
	/*****************************************************************/
	/*确认订单*/
	$(".btn").click(function(){
		location="/html/confirm.html";
	})
	});
});