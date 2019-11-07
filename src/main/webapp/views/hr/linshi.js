function save(){
    var username = $('input[name="username"]').val();
    var weburl = $('input[name="weburl"]').val();
    var nickname = $('input[name="nickname"]').val();
    var province =$('input[name="province"]').val();
    var city = $('input[name="city"]').val();
    var address = $('input[name="address"]').val();
    var nation = $("#nation").val();
    var phone = $('input[name="phone"]').val();
    var code = $('input[name="code1"]').val();//验证码

    // alert(sex);
    $.ajax({
        url: host + "company/set/updateinfo"    ,
        type: "post",
        data:{
            company:username,
            url:weburl,
            loginName:nickname,
            porvinceName:province,
            cityName:city,
            addreass:address,
            type:2,
        },
        dataType: 'json',
        success: function (data) {
            console.log(data)
            if(data.code == 1){
                alert(data.msg);
            }else{
                alert(data.msg);

            }
            // location.href="http://www.webss1.com/teacher/login.html";
        },
        error: function () {
            console.log("出错了");
        }
    });
}