;(function($){
   $.fn.rotate = function(opts){
   return this.each(function(){

   
   var self = $(this);
   self.rotationLock = true;
   var ctl_l = self.find('.ctl').eq(0);
   var ctl_r = self.find('.ctl').eq(1);
   var $imgs = self.find('img');
   var $ctl = self.find('.ctl');
   console.log(ctl_l == self.find('.ctl_left'));

   //用户参数
    var dataSet = $.extend($.fn.rotate.default,opts);

   
   // 设置初始位置，开始
      
	   var disSide = (dataSet.width-dataSet.imgWidth)/2;//主图两侧宽度
	   var disLeft = (disSide-parseFloat($ctl.eq(0).width()))/2;
	   var disTop = (dataSet.height-parseFloat($ctl.eq(0).height()))/2; 
	   var disRight = dataSet.imgWidth+disSide+disLeft;
	   var sideNum = Math.floor($imgs.length/2);
	   $ctl.eq(0).css({left:disLeft,top:disTop});
	   $ctl.eq(1).css({left:disRight,top:disTop});
	   $imgs.eq(sideNum).css({position:"absolute",left:disSide+"px",top:0,"z-index":sideNum});//顶部图片
	   self.css({position:"relative",height:dataSet.height,width:dataSet.width});
	   self.find('li').css({"list-style-type":"none"});
       
       for(var i=0;i<sideNum;i++){
       	  $imgs.eq(i).css({left:i*disSide/sideNum,
       	  	                 "z-index":i,
       	  	                 width:dataSet.imgWidth*Math.pow(dataSet.scale,sideNum-i),
       	  	                 height:dataSet.height*Math.pow(dataSet.scale,sideNum-i),
       	  	                 top:(dataSet.height-dataSet.height*Math.pow(dataSet.scale,sideNum-i))/2,
       	  	                 opacity:Math.pow(dataSet.opacity,sideNum-i),
       	  	                 position:"absolute"
       	  	                });
       	  $imgs.eq(i+sideNum+1).css({left:dataSet.width-dataSet.imgWidth*Math.pow(dataSet.scale,i+1)-disSide/sideNum*(sideNum-i-1),
       	  	                         "z-index":sideNum-i-1,
       	  	                         width:dataSet.imgWidth*Math.pow(dataSet.scale,i+1),
       	  	                         height:dataSet.height*Math.pow(dataSet.scale,i+1),
       	  	                         top:(dataSet.height-dataSet.height*Math.pow(dataSet.scale,i+1))/2,
       	  	                         opacity:Math.pow(dataSet.opacity,i+1),
       	  	                         position:"absolute"
       	  	                        });
       };
   // 设置初始位置，结束

   //事件绑定
    ctl_l.click(function(){
   	if(self.rotationLock){
   		self.rotationLock=false;
   		rollLeft(self,$imgs);
   	}
   });
    ctl_r.click(function(){
   	if(self.rotationLock){
        self.rotationLock=false;
        rollRight(self,$imgs);
   	}   
   });

   // 设置自动播放，开始
   if(dataSet.autoPlay == true){
		self.play = setInterval(function(){
		   	   	   ctl_l.click();
		   	   },2000);
		self.hover(function(){clearInterval(self.play)},
		   	   	             function(){self.play = setInterval(function(){ctl_l.click()},2000)});
		  
   }
   // 设置自动播放，结束



   // 向左滚动，开始
   var rollLeft = function(_this_,$imgs){
			   	   var firstZIndex = $imgs.eq(0).css("z-index");
			   	   for(var i=0;i<$imgs.length-1;i++){
			          $imgs.eq(i).css({"z-index":$imgs.eq(i+1).css("z-index")});
			   	   };
			   	   $imgs.eq($imgs.length-1).css({"z-index":firstZIndex}).animate({
			   	   	                 width:$imgs.eq(0).css("width"),
			                         height:$imgs.eq(0).css("height"),
			                         left:$imgs.eq(0).offset().left-_this_.offset().left,
			                         top:$imgs.eq(0).offset().top-_this_.offset().top,
			                         opacity:$imgs.eq(0).css("opacity")
			   	                   },500,function(){_this_.rotationLock = true});
			   	   
             for(var i=0;i<$imgs.length-1;i++){
                  $imgs.eq(i).animate({
			                            width:$imgs.eq(i+1).css("width"),
					                        height:$imgs.eq(i+1).css("height"),
					                        left:$imgs.eq(i+1).offset().left-_this_.offset().left,
					                        top:$imgs.eq(i+1).offset().top-_this_.offset().top,
					                        opacity:$imgs.eq(i+1).css("opacity")
			                              },500)

   	          }
   	   
   };
   //向左滚动，结束

   //向右滚动，开始
   var rollRight = function(_this_,$imgs){
				   	   var lastZIndex = $imgs.eq($imgs.length-1).css("z-index");
				   	   for(var i=1;i<$imgs.length;i++){
				          $imgs.eq($imgs.length-i).css({"z-index":$imgs.eq($imgs.length-i-1).css("z-index")});
				   	   };
				   	   $imgs.eq(0).css({"z-index":lastZIndex}).animate({
				   	   	                 width:$imgs.eq($imgs.length-1).css("width"),
				                         height:$imgs.eq($imgs.length-1).css("height"),
				                         left:$imgs.eq($imgs.length-1).offset().left-_this_.offset().left,
				                         top:$imgs.eq($imgs.length-1).offset().top-_this_.offset().top,
				                         opacity:$imgs.eq($imgs.length-1).css("opacity")
				   	                   },500,function(){_this_.rotationLock = true});
				   	   for(var i=1;i<$imgs.length+1;i++){
				   	   	  
				          $imgs.eq(i).animate({
				                            width:$imgs.eq(i-1).css("width"),
						                        height:$imgs.eq(i-1).css("height"),
						                        left:$imgs.eq(i-1).offset().left-_this_.offset().left,
						                        top:$imgs.eq(i-1).offset().top-_this_.offset().top,
						                        opacity:$imgs.eq(i-1).css("opacity")
				                              },500)
   	   }
   	   
   };
   //向左滚动，结束
   });
   };

    $.fn.rotate.default = {
   	              width:1000,
                  height:376,
                  imgWidth:669,
                  scale:0.9,
                  opacity:0.9,
                  autoPlay:true,
                  }
   
})(jQuery);

$(document).ready(function(){
   $('.container').rotate();
});