//我的js类文件
// $(function(){
      //全局参数  
      var Webip='http://140.143.243.113:8190';//接口ip请求地址
      var Request='get';//请求方式
      var Serverip='http://lmweb.hytqhy.com';//服务器地址
      var Localip='http://www.webss1.com';//本地地址

    //登录方法  
    if(document.getElementById("login")){
         
        login.onclick=function(){

            // alert("触发了监听");
            var username = document.getElementById("username").value; 
            var password = document.getElementById("password").value;

            var Url = Webip+'/pub/other/login';
            var Data = {type:1,username:username,password:password};

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        // var num = data.data.num;
                        var num = 1;
                        // var userid = data.data.userid;
                        console.log(data.msg)               
                        sessionStorage.setItem('userid',2); 

                        location.href=Localip+"/teacher/index.html?num="+num;                
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };
    }

    //教师端注册方法
    if(document.getElementById("register")){
        
        register.onclick=function(){

            //页面提交的数据
            var school = $('#school').val();
            var college = $('#college').val();
            var username = $('#username').val();
            var weburl = $('#weburl').val();
            var sex = $('input[name="sex"]:checked').val(); 
            var nation = $('#nation').val();
            var phone = $('#phone').val();
            var code = $('#code1').val();
            var password = $('#password').val();
            var reg_code = $('#reg_code').val();
            var state = $('#state').val();
            //ajax参数
            var Url = Webip+'/teacher/other/register';
            var Data = {school:school,college:college,username:username,weburl:weburl,sex:sex,nation:nation,phone:phone,code:code,password:password,reg_code:reg_code,state:state,type:1};

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };
    }

    //忘记密码  
    if(document.getElementById("forget")){

        forget.onclick=function(){

            //页面提交的数据
            var school = $('#school').val();
            var college = $('#college').val();
            var username = $('#username').val();
            var weburl = $('#weburl').val();
            var sex = $('input[name="sex"]:checked').val(); 
            var nation = $('#nation').val();
            var phone = $('#phone').val();
            var code = $('#code1').val();
            var password = $('#password').val();
            var reg_code = $('#reg_code').val();
            var state = $('#state').val();
            //ajax参数
            var Url = Webip+'/teacher/other/register';
            var Data = {school:school,college:college,username:username,weburl:weburl,sex:sex,nation:nation,phone:phone,code:code,password:password,reg_code:reg_code,state:state,type:1};

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };

    }

    //班级列表  
    if(document.getElementById("classlist")){

        forget.onclick=function(){

            //页面提交的数据
            var school = $('#school').val();
            var college = $('#college').val();
            var username = $('#username').val();

            //ajax参数
            var Url = Webip+'/teacher/other/register';
            var Data = '';

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };

    }

    //添加班级  
    if(document.getElementById("addclass")){

        forget.onclick=function(){

            //页面提交的数据
              var classname=$("input[name='classname']").val();
              var  year= $('#year').val();
              var  month= $('#month').val();
              var  day= $('#day').val();
              var  year1= $('#year1').val();
              var  month1= $('#month1').val();
              var  day1= $('#day1').val();
              var starttime = year+"/"+month+"/"+day;
              var endtime = year1+"/"+month1+"/"+day1;
              var co_admin=$("input[name='co_admin']").val();
              var phone=$("input[name='phone']").val();
              var file=$("input[name='file']").val();

            //ajax参数
            var Url = Webip+'/teacher/stu/addclass';
            var Data = {classname:classname,starttime:starttime,endtime:endtime,co_admin:co_admin,phone:phone,files:file};

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        // location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };

    }

    //学生列表  
    if(document.getElementById("stu_list")){

        forget.onclick=function(){

            //页面提交的数据
            var school = $('#school').val();
            var college = $('#college').val();
            var username = $('#username').val();

            //ajax参数
            var Url = Webip+'/teacher/other/register';
            var Data = '';

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };

    }  

    //添加学生  
    if(document.getElementById("add_stu")){

        forget.onclick=function(){

            //页面提交的数据
            var students=$("input[name='students']").val();
            var email=$("input[name='email']").val();
            var phone=$("input[name='phone']").val();
            var pic ='';

            //ajax参数
            var Url = Webip+'/teacher/stu/addstu';
            var Data = {classid:1,students:students,pic:pic,email:email,phone:phone,userId:1};

            $.ajax({
                url: Url,
                type: Request,
                data: Data,
                dataType: 'json',
                success: function (data) {
                    if(data.code == 1){
                        console.log(data.msg)               
                        // location.href=Serverip+"/teacher/login.html";            
                    }
                },
                error: function () {
                    console.log("出错了！");
                }
            });
            
             
        };

    }
















// });