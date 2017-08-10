
+function(){
    //添加收货地址，弹出模态框
    $(".add").click(function(e){
        e.preventDefault();
        $("#modal_shopping").css("display","block").animate({
            opacity:1,
            top:200
        },1000);
    })

    //隐藏模态框

    //点击X隐藏模态框
    $("#modal_shopping").on('click','.glyphicon-remove',function(e){
        e.preventDefault();
        $("#modal_shopping").css("display","none").css("opacity",1).css("top",-200);
    });


}()
