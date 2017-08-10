+function(){
    //2:绑定点击事件
    $("#btn_login").click(function(){
        var u = $("#uname").val();
        var p = $("#upwd").val();
        $.ajax({
            type:"POST",
            url:"/login.do",
            data:{uname:u,upwd:p},
            success:function(data){
                if(data.code>0){
                    sessionStorage.setItem("uid",data.uid);
                    location.href="index.html";
                }
                else{
                    $(".login_box>p:last-child").html(data.msg);
                }
            }
        });

    });


    //功能模块二：没有账号，现在去注册
    $("#btn_register").click(function(){
        location.href="register.html";
    })
}();
