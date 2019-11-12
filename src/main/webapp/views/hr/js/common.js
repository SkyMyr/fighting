let host = '101.37.24.226:8080/';//192.168.0.112
let nation = "http://140.143.243.113:8190/";
let COOKIE = {

    set:function(name,value){

            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days*24*60*60*1000);
            document.cookie = name + "="+value + ";expires=" + exp.toGMTString();

    }
}