+function(){
   //功能一：轮播图片
    $.ajax({
        type:"GET",
        url:"/banner",
        success:function(data){
            var LIWIDTH = 1220, html = "", str = "", moved = 0, interval = 1000, wait = 3000 + interval, timer = null;
            for (var i=0;i<data.length;i++) {
               var obj=data[i];
                html += `<li> <img src="${obj.pic}" alt=""></li>`;
            }
            //重复添加第一张图片，无缝拼接
            html += `<li><img src="${data[0].pic}"></li>`
            $(".banner-image").append(html)
                .css("width", (data.length + 1) * LIWIDTH);

            function play() {
                timer = setInterval(()=> {
                    moved++;
                    $(".banner-image").animate({left: -moved * LIWIDTH}, interval, ()=> {
                        if (moved == 2) {
                            moved = 0;
                            $(".banner-image").css("left", 0);
                        }
                        $(".banner-index").children(":eq(" + moved + ")").addClass("hover").
                            siblings().removeClass("hover");
                    })
                }, wait);
            }

            play();
            $(".slider").hover(
                ()=> {
                    clearInterval(timer);
                    timer = null;
                },
                ()=> {
                    play();
                }
            );
            //点击下标切换图片
            $(".banner-index").on("click", "li", e=> {
                var $tar = $(e.target);
                moved = $tar.index();
                //console.log(moved);
                $(".banner-image").stop(true).animate({left: -moved * LIWIDTH}, interval);
                $tar.addClass("hover").siblings().
                    removeClass("hover");
            });
        }
    })

    //功能二：动态添加banner_list;
    $.ajax({
        type:"GET",
        url:"/banner_list",
        success:function(data){
           var html1="";
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html1+=`
                 <div>
                        <br/>
                        <a href="#">
                        <dl>
                             <dt><img src="${o.pic}" alt="图片出错了"></dt>
                            <dd><a href="#">${o.bname}</a></dd>
                            <dd><i>·</i>&nbsp<a href="#">${o.btitle}</a>&nbsp<i>·</i></dd>
                        </dl>
                        </a>
                    </div>
                `;
            }
            $(".banner-img_list").html(html1);
        }
    })

    //功能点三：动态添加热门商品
    $.ajax({
        type:"GET",
        url:"/product_hot",
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`
                <div>
                            <a href="hot.html?index=${i}">
                            <dl>
                                <dt><img src="${o.rpic}" alt="图片出错了"></dt>
                                <dd>
                                    <ul>
                                        <li class="hover"><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </dd>
                                <dd><a href="#">${o.rtxt1}</a><br/><a href="#">${o.rtxt11}</a></dd>

                                <dd><a href="#">${o.rtxt2}</a></dd>
                                <dd><a href="#">${o.rtxt3}</a></dd>
                            </dl>
                            </a>
                        </div>
                `;
            }
            $(".product_hot-main").html(html);


        //实现图片点击后，左右移动
            var LIWIDTH = 255, moved = 0;
            var ulList = document.querySelector(".product_hot-main");
            var aForward=document.querySelector(".forward");
            var aBackward=document.querySelector(".backward");
        //aForward按钮点击
            aForward.onclick = move;
            function move(e) {
                e.preventDefault() ;
                if (this.className.indexOf("disabled") == -1) {
                    moved += (
                        this.className == "forward" ? 1 : -1
                    );
                    var left = moved * -LIWIDTH ;
                    ulList.style.left = left + "px";
                    checkA();
                }
            }
        //aBackward点击
            aBackward.onclick = move;
        //检查移动了图片的个数
            function checkA() {
                if (ulList.children.length - moved ==4){
                    //?aForward???class,disabled
                    aForward.className =
                        "forward disabled";
                }
                //如果moved==0
                else if (moved == 0){
                    //?aBackward???class,disabled
                    aBackward.className =
                        "backward disabled";
                }
                else {//????
                    //aForward??class?forward
                    aForward.className = "forward";
                    //aBackward??class?backward
                    aBackward.className = "backward";
                }
            }
        }
    })


    //功能点四：动态添加官方精选

    $.ajax({
        type:"GET",
        url:'/selection',
        success:function(data){
            var html="";
            html+=`
                <div>
                     <img src="${data[0].opic}" alt="图片出错了">
                 </div>
            `;
            for(var i=1;i<data.length;i++){
                var o=data[i];
                html+=`
                  <div>
                        <a href="hot.html?index=${i-1}">
                        <dl>
                            <dt><img src="${o.opic}" alt="图片出错了"></dt>
                            <dd>
                                <ul>
                                    <li class="hover"><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                </ul>
                            </dd>
                            <dd><a href="#">${o.otxt1}</a><br/><a href="#">${o.otxt11}</a></dd>

                            <dd><a href="#">${o.otxt2}</a></dd>
                            <dd><a href="#">${o.otxt3}</a></dd>
                        </dl>
                        </a>
                    </div>
                `;
            }
            $(".selection-main").html(html);
        }
    });


    //功能五：动态添加应用
    $.ajax({
        type:"GET",
        url:'/app',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`
                  <div>
                            <a href="#">
                            <dl>
                                <dt><img src="${o.apic}" alt="图片出错了"/></dt>
                                <dd><p>${o.atxt1}</p><p>${o.atxt2}</p></dd>
                                <dd>${o.atxt3}</dd>
                            </dl>
                            </a>
                        </div>
                `;
            }
            $(".app-main").html(html);
        }
    });



    //功能六：动态添加科技动态
    $.ajax({
        type:"GET",
        url:'/science',
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                var o=data[i];
                html+=`
                 <div>
                            <dl>
                                <dt><a href="#"><img src="${o.spic}" alt="图片出错了"/></a></dt>
                                <dd><a href="#">${o.stxt1}</a></dd>
                                <dd>${o.stxt2}</dd>
                                <dd><a href="#">${o.stxt3}</a></dd>
                            </dl>
                        </div>
                `;
            }
            $(".science-main").html(html);
        }
    });






}()