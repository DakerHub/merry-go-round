var loop=function(t){var e=this;if(this.rotationLock=!0,this.looper=t,this.ctl_l=this.looper.find(".ctl_left"),this.ctl_r=this.looper.find(".ctl_right"),this.setting={width:1e3,height:300,imgWidth:669,scale:.9,opacity:.9,autoPlay:!0},this.looper.is("[data-setting]")&&(this.userSetting=JSON.parse(this.looper.attr("data-setting"))),"object"==typeof this.userSetting&&(this.setting.width=this.userSetting.width||this.setting.width,this.setting.height=this.userSetting.height||this.setting.height,this.setting.imgWidth=this.userSetting.imgWidth||this.setting.imgWidth,this.setting.opacity=this.userSetting.opacity||this.setting.opacity,this.setting.autoPlay=this.userSetting.autoPlay||this.setting.autoPlay,this.setting.scale=this.userSetting.scale||this.setting.scale),this.ctl_l.click(function(){e.rotationLock&&(e.rotationLock=!1,e.rollLeft())}),this.ctl_r.click(function(){e.rotationLock&&(e.rotationLock=!1,e.rollRight())}),this.setPlace(),1==this.setting.autoPlay){var e=this;this.play=setInterval(function(){e.ctl_l.click()},2e3),t.hover(function(){clearInterval(e.play)},function(){e.play=setInterval(function(){e.ctl_l.click()},2e3)})}};loop.prototype={setPlace:function(){var t=$(this.looper).find("img"),e=this.setting,i=$(this.looper).find(".ctl"),s=(e.width-e.imgWidth)/2,h=(s-parseFloat(i.eq(0).width()))/2,o=(e.height-parseFloat(i.eq(0).height()))/2,n=e.imgWidth+s+h,l=Math.floor(t.length/2);i.eq(0).css({left:h,top:o}),i.eq(1).css({left:n,top:o}),t.eq(l).css({left:s+"px","z-index":l});for(var c=0;l>c;c++)t.eq(c).css({left:c*s/l,"z-index":c,width:e.imgWidth*Math.pow(e.scale,l-c),height:e.height*Math.pow(e.scale,l-c),top:(e.height-e.height*Math.pow(e.scale,l-c))/2,opacity:Math.pow(e.opacity,l-c)});for(var c=0;l>c;c++)t.eq(c+l+1).css({left:e.width-e.imgWidth*Math.pow(e.scale,c+1)-s/l*(l-c-1),"z-index":l-c-1,width:e.imgWidth*Math.pow(e.scale,c+1),height:e.height*Math.pow(e.scale,c+1),top:(e.height-e.height*Math.pow(e.scale,c+1))/2,opacity:Math.pow(e.opacity,c+1)})},rollLeft:function(){for(var t=this,e=$(this.looper),i=e.find("img"),s=i.eq(0).css("z-index"),h=0;h<i.length-1;h++)i.eq(h).css({"z-index":i.eq(h+1).css("z-index")});i.eq(i.length-1).css({"z-index":s}).animate({width:i.eq(0).css("width"),height:i.eq(0).css("height"),left:i.eq(0).offset().left-e.offset().left,top:i.eq(0).offset().top-e.offset().top,opacity:i.eq(0).css("opacity")},500,function(){t.rotationLock=!0});for(var h=0;h<i.length-1;h++)i.eq(h).animate({width:i.eq(h+1).css("width"),height:i.eq(h+1).css("height"),left:i.eq(h+1).offset().left-e.offset().left,top:i.eq(h+1).offset().top-e.offset().top,opacity:i.eq(h+1).css("opacity")},500)},rollRight:function(){for(var t=this,e=$(this.looper),i=e.find("img"),s=i.eq(i.length-1).css("z-index"),h=1;h<i.length;h++)i.eq(i.length-h).css({"z-index":i.eq(i.length-h-1).css("z-index")});i.eq(0).css({"z-index":s}).animate({width:i.eq(i.length-1).css("width"),height:i.eq(i.length-1).css("height"),left:i.eq(i.length-1).offset().left-e.offset().left,top:i.eq(i.length-1).offset().top-e.offset().top,opacity:i.eq(i.length-1).css("opacity")},500,function(){t.rotationLock=!0});for(var h=1;h<i.length+1;h++)i.eq(h).animate({width:i.eq(h-1).css("width"),height:i.eq(h-1).css("height"),left:i.eq(h-1).offset().left-e.offset().left,top:i.eq(h-1).offset().top-e.offset().top,opacity:i.eq(h-1).css("opacity")},500)}},$(document).ready(function(){for(var t=$(".container"),e=0;e<t.length;e++)new loop(t.eq(e))});