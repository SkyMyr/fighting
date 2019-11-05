<%--
  Created by IntelliJ IDEA.
  User: myr
  Date: 2019/11/4
  Time: 10:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>登录</title>
</head>
　　<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<body>

<div style="margin-top:10px" class="form-group">

        <div class="row">
            <div class="col-md-offset-3 col-md-1">账户</div>
            <div class="col-md-3"><input class="form-control" id="account" type="text" /></div>
        </div>
        <div class="row">
            <div class="col-md-offset-3 col-md-1">密码</div>
            <div class="col-md-3"><input class="form-control" id="pwd" type="text" /></div>
        </div>

        <div class="row">
            <div class="col-md-offset-5 col-md-6"><button class="btn btn-success" onclick="register()">登录</button></div>

        </div>
        <input type="hidden" name="method" value="login" />

</div>

</body>
<script type="text/javascript">
    var register = function (){
        var account=$("#account").val();
        var pwd=$("#pwd").val();
        var token = localStorage.getItem("token")
        $.ajax({
            type: "POST",
            dataType:"json", //返回格式为json
            contentType: 'application/x-www-form-urlencoded',
            url: "<%=request.getContextPath()%>/test/loginToken",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", token);
            },
            data: {"account":account,"pwd":pwd,"method":"register","token":token},
            cache: false,
            async : false,
            success: function (data)
            {
                if(data.code==1){
                    alert(data.token);
                    var token1 = data.token;
                    window.localStorage["token"] = token1;
                    //跳转页面
                    window.location.href="<%=request.getContextPath()%>/test/showData";
                }
            },
            error:function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    var gologin=function(){
        window.location.href="<%=request.getContextPath()%>/login.jsp";
    }
</script>
</html>
