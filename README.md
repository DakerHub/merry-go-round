# merry-go-round
It's a jQuery plugin,the function is a viwepager.

This plugin needs some html statement.such as:
              <code>
              <div class="container">
                		<ul>
                		  <li><img src=""></li>
                			<li><img src=""></li>
                			<li><img src=""></li>
                			<li><img src=""></li>
                			<li><img src=""></li>
                			<li><img src=""></li>
                			<li><img src=""></li>
                		</ul>
              </div>
              
              <script>
                   $('.container').rotate();
              </script>
              </code>
  默认参数配置：{
                  width:1000,//容器的宽度<br/>
                  height:376,//容器以及图片的高度<br/>
                  imgWidth:669,//图片的宽度<br/>
                  scale:0.9,//图片缩放系数<br/>
                  opacity:0.9,//图片透明变化系数<br/>
                  autoPlay:false,//是否自动播放<br/>
            }
                  
