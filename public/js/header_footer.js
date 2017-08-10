/**
 * Created by Administrator on 2017/7/19.
 */
$(function(){
    //页面返回页面顶部
    window.onscroll = function () {
        var toTop = document.getElementById("toTop");
        if (document.body.scrollTop >= 800)//当页面滚动超过800px，就弹出按钮
            toTop.style.display = "block";
        else
            toTop.style.display = "none";
    };

    $.ajax({
        type: "GET",
        url: "/",
        success:function(data){
            var html="";
            html=`<header class="top">
                <div class="top-box">
                    <a href="index.html"><img src="img/img_index/nav.png" class="lf"></a>
                    <ul class="rt">
                        <li><a href="#">Pro手机</a></li>
                        <li><a href="#">Pro配件</a></li>
                        <li><a href="#">耳机</a></li>
                        <li><a href="#">OS</a></li>
                        <li><a href="#">应用下载</a></li>
                        <li><a href="#">新闻论坛</a></li>
                        <li class="d1" style="text-align:right">
                              <a href="#"><span class="glyphicon glyphicon-user" style="color:#fff"></span>&nbsp</a>
                              <div>
                                    <a href="register.html">注册</a>&nbsp
                                    <a href="login.html">登录</a>
                              </div>
                        </li>
                        <li class="d3"><b>|</b></li>
                        <li class="d2"><a href="shoppinglist.html">&nbsp<span class="glyphicon glyphicon-shopping-cart"></span></a></li>
                    </ul>
                </div>
            </header>
            <div class="clear"></div>
            <!--主导航-->
            <nav class="nav">
                <div class="nav-box">
                    <ul>
                        <li class="nav-first"><a href="#">首页</a></li>
                        <li class="nav-pop">
                            <a href="#">关于公司</a>
                            <ul class="about-block">
                                <li><a href="#">公司简介</a></li>
                                <li><a href="#">线上反馈</a></li>
                                <li><a href="#">加入我们</a></li>
                                <li><a href="#">联系我们</a></li>
                            </ul>
                        </li>
                        <li class="nav-pop">
                            <a href="#">电子产品</a>
                            <ul  class="product-block">
                                <li><a href="#">热门手机</a></li>
                                <li><a href="#">耳机音响</a></li>
                                <li><a href="#">手机配件</a></li>
                                <li><a href="#">周边产品</a></li>
                            </ul>
                        </li>
                        <li class="nav-pop">
                            <a href="#">应用下载</a>
                            <ul  class="download-block">
                                <li><a href="#">One</a></li>
                                <li><a href="#">LIVE</a></li>
                                <li><a href="#">Ideas</a></li>
                                <li><a href="#">OS</a></li>
                            </ul>
                        </li>
                        <li class="nav-pop">
                            <a href="#">新闻中心</a>
                            <ul  class="news-block">
                                <li><a href="#">新闻动态</a></li>
                                <li><a href="#">官网新闻</a></li>
                                <li><a href="#">最新资讯</a></li>
                                <li><a href="#">图片展示</a></li>
                            </ul>
                        </li>
                        <li><a href="#">加入我们</a></li>
                        <li><a href="#">联系我们</a></li>
                    </ul>
                    <div class="both"></div>
                </div>
            </nav>`;
            $("#header").html(html);
        }
    });

    $.ajax({
        type:"GET",
        url:"/",
        success:function(data){
            var html="";
            html=`
             <footer class="footer-box">
                <div class="footer-top">
                    <ul>
                        <li>
                            <ul>
                                <li><a href="#">关于公司</a></li>
                                <li><a href="#">公司简介</a></li>
                                <li><a href="#">线上反馈</a></li>
                                <li><a href="#">加入我们</a></li>
                                <li><a href="#">联系我们</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">最新活动</a></li>
                                <li><a href="#">配件周边</a></li>
                                <li><a href="#">热门产品</a></li>
                                <li><a href="#">线下聚会</a></li>
                                <li><a href="#">旅行活动</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">电子产品</a></li>
                                <li><a href="#">热门手机</a></li>
                                <li><a href="#">耳机音响</a></li>
                                <li><a href="#">手机配件</a></li>
                                <li><a href="#">周边产品</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">新闻中心</a></li>
                                <li><a href="#">新闻动态</a></li>
                                <li><a href="#">官网新闻</a></li>
                                <li><a href="#">最新资讯</a></li>
                                <li><a href="#">图片展示</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">服务支持</a></li>
                                <li><a href="#">购买指南</a></li>
                                <li><a href="#">热点咨询</a></li>
                                <li><a href="#">预约购买</a></li>
                                <li><a href="#">售后服务</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><a href="#">关注我们</a></li>
                                <li><a href="#">客服QQ</a></li>
                                <li><a href="#">新浪微博</a></li>
                                <li><a href="#">官方微信</a></li>
                                <li><a href="#">官方邮箱</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div class="footer-top-right">
                        <p>400-820-8820</p>
                        <p>周一至周日 9:00-18:00（仅收市话费)</p>
                        <p><a href="#">在线留言</a></p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-container">
                    <div>
                        <p>Copyright © 2017, MetInfo Digital Co., Ltd. All Rights Reserved.</p>
                        <p>长沙米拓科技信息有限公司</p>
                        <p>Powered by <a href="">MetInfo</a> 5.3.16</p>
                    </div>
                    <div><select>
                        <option selected>简体中文</option>
                        <option>中文-繁体</option>
                        <option>英文(美国)</option>
                        <option>日文</option>
                    </select></div>

                    </div>
                </div>
            </footer>
              <div id="toTop"><a href="#"><span class="glyphicon glyphicon-open"></span></a></div>
            `;
            $("#footer").html(html);
        }
    })

});