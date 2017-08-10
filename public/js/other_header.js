+function(){
    $.ajax({
        type:"GET",
        url:'/',
        success:function(data){
            var html='';
            html=`
             <div class="shopping-top">
        <a href="index.html"><img src="img/img_other/index.png" alt=""/></a>
        <ul>
            <li><a href="#"><img src="img/img_other/user.jpg" alt=""/></a></li>
            <li><a href="#"><span>1234567890</span><b class="glyphicon glyphicon-triangle-bottom"></b></a></li>
            <li><a href="shoppinglist.html" class="glyphicon glyphicon-shopping-cart"></a>
                <a href="#">3</a>
            </li>
        </ul>
        </div>
            `;
            $("#header").html(html);
        }
    })
}()
