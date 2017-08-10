$(function(){
    var verifyCode = new GVerify("v_container");

    //功能一：点击注册按钮，注册账号
$("button.btn").click( function(){
    //1:验证用户名
        var unamereg = /^[a-z0-9]{6,12}$/i;
        if (!unamereg.test($("#uname").val())) {
            $("#uname").next().next().addClass("glyphicon-remove").removeClass("glyphicon-ok");
            return;//不继续执行
        } else {
            $("#uname").next().next().addClass("glyphicon-ok").removeClass("glyphicon-remove");
        }

    //2:验证密码
    var upwdreg = /^[a-z0-9]{6,12}$/i;
    if (!upwdreg.test($("#upwd").val())) {
        $("#upwd").next().addClass("glyphicon-remove").removeClass("glyphicon-ok");
        return;//不继续执行
    } else {
        $("#upwd").next().addClass("glyphicon-ok").removeClass("glyphicon-remove");
    }

    //3:验证重复密码
    if($("#upwd_repeat").val()!==$("#upwd").val()){
        $("#upwd_repeat").next().addClass("glyphicon-remove").removeClass("glyphicon-ok");
    }else{
        $("#upwd_repeat").next().addClass("glyphicon-ok").removeClass("glyphicon-remove");
    }

    //4:验证码确认

    var res = verifyCode.validate($("#code_input").val());
    if(res){
        $("#code_input").next().next().addClass("glyphicon-ok").removeClass("glyphicon-remove");
    }else{
        $("#code_input").next().next().addClass("glyphicon-remove").removeClass("glyphicon-ok");
        return;
    };



    //以上都验证成功，则发送ajax 接收服务器返回数据
    var u=$("#uname").val();
    var p=$("#upwd").val();
    $.ajax({
        type:"POST",
        url:"/reg.do",
        data:{uname:u,upwd:p},
        success:function(data){
            var i=5;
            $(".reg_box").children(":eq(5)").children(":eq(1)").children(":eq(0)").html(i);
            $(".reg_box").children(":eq(5)").children(":eq(1)").css("display","inline-block");
            var timer=setInterval(function(){
                i--;
                $(".reg_box").children(":eq(5)").children(":eq(1)").children(":eq(0)").html(i);
                if(i===0){
                    clearInterval(timer);
                    timer=null;
                    location.href="login.html";
                }
                console.log(i);
            },1000);

        }
    })

});


    //功能点二:判断用户名是否存在
    $("#uname").blur(function(){
        var u=$("#uname").val();
        $.ajax({
            type:"GET",
            url:"/existsuname",
            data:{uname:u},
            success:function(data){
                console.log(data);
                if(data.code>0){
                    $("#tipMsg").html(data.msg);
                }else{
                    $("#tipMsg").html('');
                }
            }
        })
    })


})