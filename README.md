# merry-go-round
It's a jQuery plugin,the function is a viwepager.

This plugin needs some html statement.such as:
              //引用脚本
              <div class="container">
                		<ul>
                		  <li><img src="pics/4.jpg"></li>
                			<li><img src="pics/2.jpg"></li>
                			<li><img src="pics/3.jpg"></li>
                			<li><img src="pics/1.jpg"></li>
                			<li><img src="pics/5.jpg"></li>
                			<li><img src="pics/6.jpg"></li>
                			<li><img src="pics/7.jpg"></li>
                		</ul>
              </div>
              <script>
                   $('.container').rotate();
              </script>
  默认参数配置：{
                  width:1000,//容器的宽度<br/>
                  height:376,//容器以及图片的高度<br/>
                  imgWidth:669,//图片的宽度<br/>
                  scale:0.9,//图片缩放系数<br/>
                  opacity:0.9,//图片透明变化系数<br/>
                  autoPlay:false,//是否自动播放<br/>
            }
                  
