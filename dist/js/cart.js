"use strict";require(["config"],function(){require(["jquery","template","cookie","load"],function(t,c,e){t.cookie.json=!0;var o=t.cookie("products")||[];if(0!==o.length){var i=c("cart_template",{products:o});t(".cart_body").html(i),t(".cart_body").on("click",".del",function(){if(confirm("确认删除？")){var c=t(this).parents(".product"),e=n(c.children(".id").text(),o);o.splice(e,1),t.cookie("products",o,{expires:7,path:"/"}),c.remove(),r()}}),t(".cart_body").on("click",".add,.minus",function(){var c=t(this).parents(".product"),e=n(c.children(".id").text(),o),i=o[e];if(t(this).is(".add"))i.amount++;else{if(i.amount<=1)return;i.amount--}t.cookie("products",o,{expires:7,path:"/"}),c.find(".amount_num").val(i.amount),c.children(".sub").text(i.amount*i.price),r()}),t(".cart_body").on("blur",".amount_num",function(){var c=t(this).parents(".product"),e=n(c.children(".id").text(),o),i=o[e];/^[1-9]\d*$/.test(t(this).val())?(i.amount=t(this).val(),t.cookie("products",o,{expires:7,path:"/"}),c.children(".sub").text(i.amount*i.price),r()):t(this).val(i.amount)}),t(".ck_all").click(function(){var c=t(this).prop("checked");t(".ck_product").prop("checked",c),r()}),t(".ck_product").click(function(){var c=t(".ck_product:checked").length===o.length;t(".ck_all").prop("checked",c),r()}),t(".btn").click(function(){location="/html/confirm.html"})}else t(".cart_body").html('购物车为空,请<a href="list.html">选购商品</a>');function n(c,e){var o=-1;return t.each(e,function(t,e){if(e.id==c)return o=t,!1}),o}function r(){var c=0;t(".ck_product:checked").each(function(e,o){c+=Number(t(this).parents(".product").children(".sub").text())}),t(".total .money").text(c.toFixed(2))}})});