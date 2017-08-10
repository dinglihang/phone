+function(){

//获得url后的参数
    var url = location.search;
    var num=parseInt(url.split("=")[1]);

    num=num+1;

    $.ajax({
        type:"GET",
        url:"/hot_box",
        data:{num:num},
        success:function(data){
            var obj=data[0];
            var html='';
            html=`
              <div class="box-left">
                <div class="box-left-top">
                    <a class="glyphicon glyphicon-menu-left backward" href="#"></a>
                    <img src="${obj.bpic}"  alt=""/>
                    <a class="glyphicon glyphicon-menu-right forward" href="#"></a>
                </div>
                <!--底部小图片排列-->
                <div class="box-left-bottom">
                </div>
            </div>

            <div class="box-right">
                <p>${obj.bname}</p>
                <p></p>
                <p>${obj.bprice}元</p>
                <p>
                    <span>数量</span>
                    <button>-</button>
                    <input type="text" value="1"/>
                    <button>+</button>
                </p>
                <p>库存<span>${obj.bcount}</span>件</p>
                <p>
                    <a href="#">立即购买</a>
                    <a href="#">加入购物车</a>
                </p>
            </div>

            `;
            $('.banner_box').html(html);


            //动态添加底部小图片
            var html1="";
            for(var i=1;i<=data[0].bocount;i++){
                var str=data[0].pic;
                html1+=`
                 <a href="#">
                        <img src="img/img_hot/hot${num}-${i}-min.jpg" alt="图片出错了"/>
                    </a>
                `;
            }
            $('.box-left-bottom').html(html1).children(":eq(0)").addClass("active");

            //动态添加左侧列表图片
            var html2='';
            for(var i=1;i<=data[0].lcount;i++){
                html2+=`
                <img src="img/img_hot/hot${num}-${i}-list.jpg" alt="图片出错le"/>
                `;
            }
            $(".left-img").html(html2);

            //设置动态样式

            var number=data[0].bocount;
            console.log(number);


            //点击forward
            $(".box-left-top>.forward").click(function(e){
                e.preventDefault();
                var str=$(this).prev().attr("src");
                var i=parseInt(str.slice(17,18));
                if(i<number){
                    i+=1;
                }else if(i=number){
                    i=1;
                }
                //切换大图
                $(this).prev().attr("src","img/img_hot/hot"+num+"-"+i+"-mid.jpg");
                //切换小图
                var j=i-1;
                $(this).parent().next().children(":eq("+j+")").addClass("active").siblings().removeClass("active");
            });


            //点击backward
            $(".box-left-top>.backward").click(function(e){
                e.preventDefault();
                var str=$(this).next().attr("src");
                var i=parseInt(str.slice(17,18));
                if(i>1){
                    i-=1;
                }else if(i=1){
                    i=number;
                }
                //切换大图
                $(this).next().attr("src","img/img_hot/hot"+num+"-"+i+"-mid.jpg");
                //切换小图
                var j=i-1;
                $(this).parent().next().children(":eq("+j+")").addClass("active").siblings().removeClass("active");
            });


            //点击小图片切换大图
            $(".box-left-bottom").on("click","a img",function(e){
                e.preventDefault();
                var $tar=$(e.target);
                var str=$tar.attr("src");
                var i=parseInt(str.slice(17,18));
                $tar.parent().addClass("active").siblings().removeClass("active");
                $tar.parent().parent().prev().children(":eq(1)").attr("src","img/img_hot/hot"+num+"-"+i+"-mid.jpg");
            })

        }
    });


    //动态添加右侧导航图片列表

    $.ajax({
        type:"GET",
        url:"/hot_aside",
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
               var obj=data[i];
                html+=`
                <li>
                    <a href="hot.html?index=${i}">
                        <dl>
                            <dt><img src="${obj.apic}" alt="图片出错了"/></dt>
                            <dd>${obj.atxt1}</dd>
                            <dd>${obj.atxt2}</dd>
                        </dl>
                    </a>
                </li>
                `;
            }
            $(".section_hot1-right>ul").html(html);
        }

    })

}()
