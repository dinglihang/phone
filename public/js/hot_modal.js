+function(){
    //获得url后的参数
    var url = location.search;
    var num=parseInt(url.split("=")[1]);

    num=num+1;
    $.ajax({
        type:"GET",
        url:'/hot_box',
        data:{num:num},
        success:function(data){
            var html="";
            html=` <img src="img/img_hot/hot${num}-1-list.jpg" alt="图片出错了"/>`;

            //追加模态框中的大图片
            $('.modal_hot').append(html);
            //添加模态框中的底部小图片
            var html1="";
            for(var i=1;i<=data[0].lcount;i++){
                html1+=`
                  <li><a href="#"><img src="img/img_hot/hot${num}-${i}-list.jpg" alt=""/></a></li>
                `;
            }
            $('.modal-bottom>ul').html(html1);




            //添加模态框的动态样式

            var number=data[0].lcount;
            //点击hot页面中的图片弹出模态框
            $(".section_hot1-left .left-img").on("click","img",function(e){
                //获取该图片的i值
                var str=$(e.target).attr("src");
                var i=str.slice(17,18);
                //模态框弹出的状态
                $(e.target).parent().parent().parent().next().animate({
                    opacity:1
                },1000).css("display","block");
                //点击哪种图片弹出对应的模态框中的大图
                $(e.target).parent().parent().parent().next().
                    children(":eq(2)").children(":eq(2)").attr("src","img/img_hot/hot"+num+"-"+i+"-list.jpg");
                //模态框左上角数字的变化
                $(e.target).parent().parent().parent().next().
                    children(":eq(1)").children(":eq(0)").children(":eq(0)").html(i);
                //底部小图片的切换
                var j=i-1;
                $(e.target).parent().parent().parent().next().
                    children(":eq(3)").children(":eq(1)").children(":eq("+j+")").
                    addClass("active").siblings().removeClass("active");
            });



            //点击模态框forward切换图片
            $(".modal_hot>.forward").click(function(e){
                e.preventDefault();
                var str=$(this).next().attr("src");
                var i=parseInt(str.slice(17,18));
                if(i<number){
                    i+=1;
                }else if(i==number){
                    i=1;
                }
                //切换大图片
                $(this).next().attr("src","img/img_hot/hot"+num+"-"+i+"-list.jpg");
                //切换小图片
                var j=i-1;
                $(this).parent().next().children(":eq(1)").children(":eq("+j+")").
                    addClass("active").siblings().removeClass("active");
                //切换左上角数字
                $(this).parent().prev().children(":eq(0)").children(":eq(0)").html(i);
            });



            //点击backward切换图片
            $(".modal_hot>.backward").click(function(e){
                e.preventDefault();
                var str=$(this).next().next().attr("src");
                var x=parseInt(str.slice(17,18));
                if(x>1){
                    x-=1;
                }else if(x==1){
                    x=number;
                }
                //切换大图片
                $(this).next().next().attr("src","img/img_hot/hot"+num+"-"+x+"-list.jpg");
                //切换小图片
                var y=x-1;
                $(this).parent().next().children(":eq(1)").children(":eq("+y+")").
                    addClass("active").siblings().removeClass("active");
                //切换左上角数字
                $(this).parent().prev().children(":eq(0)").children(":eq(0)").html(x);
            });



            //点击底部小图片
            $(".modal-bottom").on("click","img",function(e){
                e.preventDefault();
                var $tar=$(e.target);
                var str=$tar.attr("src");
                var i=parseInt(str.slice(17,18));
                //切换小图片
                $tar.parent().parent().addClass("active").siblings().removeClass("active");
                //切换大图片
                $tar.parent().parent().parent().parent().prev().
                    children(":eq(2)").attr("src","img/img_hot/hot"+num+"-"+i+"-list.jpg");
                //切换左上角数字
                $tar.parent().parent().parent().parent().prev().prev().
                    children(":eq(0)").children(":eq(0)").html(i);
            });



            //点击底部小按钮，设置底部条的显示和隐藏
            $(".modal-bottom>div").click(function(e){
                e.preventDefault();
                if($(this).parent().hasClass("in")){
                    $(this).parent().animate({height:0},1500).removeClass("in");
                }else{
                    $(this).parent().animate({height:107},1500).addClass("in");
                }
            });


            //模态框的隐藏
            //点击右上角   X  隐藏模态框
            $(".glyphicon-remove").click(function(e){
                e.preventDefault();
                $(".modal_container").css("display","none").css("opacity",0);
            })

            //点击图片之外的空白区域，隐藏模态框
            $(".modal_hot").click(function(e){
                if(e.target.childNodes.length>0){
                    $(".modal_container").css("display","none").css("opacity",0);
                }
            })


            //图片的缩小
            var n=0.9,n1="";
            $(".glyphicon-zoom-out").click(function(e){
                e.preventDefault();
                n=n*n;
                $(".modal_hot>img").css("transform","scale("+n+")").css("transition","all 0.2s linear");
                sessionStorage.setItem('y',n);
            });

            //图片的放大

            var x=1.1,x1="";
            $(".glyphicon-zoom-in").click(function(e){
                var  y=sessionStorage.getItem("y");
                e.preventDefault();
                x1=x*y;
                x=x*x;
                $(".modal_hot>img").css("transform","scale("+x1+")").css("transition","all 0.2s linear");
            })

        }
    })




}()