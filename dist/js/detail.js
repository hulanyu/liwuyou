"use strict";require(["config"],function(){require(["jquery","elevateZoom","template","cookie","fly","load"],function(t,i,a,e,s){t.cookie.json=!0;var o=t.cookie("id");t.getJSON("/mock/detail.json",function(i){var a=i.res_body.data,e=[],s=0;t.each(a,function(t,i){e.push(""+i.id)}),s=t.inArray(o,e);var d={products:i.res_body.data},n=[];n.push(d.products[s]);var c="";t.each(n,function(i,a){c='<div>\n\t\t\t<div id="pics">\n\t\t\t\t<a href="#" data-image="'+a.b_img1+'" data-zoom-image="'+a.t_img1+'" class="focus">\n\t\t\t\t\t\t<img src="'+a.s_img1+'" class="img" >\n\t\t\t\t</a>\n\t\t\t\t<a href="#" data-image="'+a.b_img2+'" data-zoom-image="'+a.t_img2+'" class="focus">\n\t\t\t\t\t\t<img src="'+a.s_img2+'" class="img" >\n\t\t\t\t</a>\n\t\t\t\t<a href="#" data-image="'+a.b_img3+'" data-zoom-image="'+a.t_img3+'" class="focus">\n\t\t\t\t\t\t<img src="'+a.s_img3+'" class="img" >\n\t\t\t\t</a>\n\t\t\t\t<a href="#" data-image="'+a.b_img4+'" data-zoom-image="'+a.t_img4+'" class="focus">\n\t\t\t\t\t\t<img src="'+a.s_img4+'" class="img" >\n\t\t\t\t</a>\n\t\t\t\t<a href="#" data-image="'+a.b_img5+'" data-zoom-image="'+a.t_img5+'" class="focus">\n\t\t\t\t\t\t<img src="'+a.s_img5+'" class="img" >\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div id="imgwrapper">\n\t\t\t\t\t<img id="zoom-03" src="'+a.t_img1+'" data-zoom-image="'+a.b_img1+'">\n\t\t\t</div>\n\t\t\t<div class="goods-attr">\n\t\t\t\t<div class="id" style="display: none;">'+a.id+'</div>\n\t\t\t\t<img src="'+a.t_img1+'" style="display:none"/>\n\t\t\t\t<div class="title">'+a.title+'</div>\n\t\t\t\t<p class="jieshao">\n\t\t\t\t\t'+a.jieshao+'\n\t\t\t\t</p>\n\t\t\t\t<div class="price">\n\t\t\t\t'+a.price+'\t\t\n\t\t\t\t</div>\t\n\t\t\t\t<div class="add">\n\t\t\t\t\t加入购物车\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',t(".gb").html(c)}),t("#zoom-03").elevateZoom({gallery:"pics",lensColour:"#fede4f",cursor:"move",borderSize:"1",borderColour:"#dddddd"})}),t(".goods-attr").delegate(".add","click",function(i){con;var a=t(this).parent(),e={id:a.children(".id").text(),title:a.children(".title").text(),price:a.children(".price").text(),amount:1,img:a.children("#zoom-03").attr("src")},s=t.cookie("products")||[],o=function(i,a){var e=-1;return t.each(a,function(t,a){if(a.id==i)return e=t,!1}),e}(e.id,s);-1===o?s.push(e):s[o].amount++,t.cookie("products",s,{expires:7,path:"/"});t('<img src="'+a.children("#img").attr("src")+'">').fly({start:{left:i.pageX,top:i.pageY},end:{left:t("#car").offset().left,top:t("#car").offset().top,width:0,height:0}})})})});