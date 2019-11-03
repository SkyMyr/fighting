<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
 <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
</head>
<body>

<form action="<%=request.getContextPath() %>/login/find" method="post">
作者<input type="text" name="author" />
标题<input type="text" name="title" />
<input type="submit" value="提交">
</form>
<table class="table">
    <tr><th>ID</th><th>标题</th><th>作者</th><th>内容</th><th>操作</th></tr>
    <c:forEach items="${data}"  var="item">
        <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.content}</td>
            <td><a href="ArticleServlet?method=find&id=${item.id}" target="_self" class="btn btn-primary">查看</a>
                <a class="btn btn-info"  href="ArticleServlet?method=update&id=${item.id}" target="_self">修改</a>
                <a class="btn btn-danger">删除</a></td>
        </tr>
    </c:forEach>
</table>
<!-- <form action="login1" method="post"> -->
<!-- <input type="text" name="name" /> -->
<!-- <input type="text" name="pwd" /> -->
<!-- <input type="submit" value="提交"> -->
<!-- </form> -->
<!-- <form action="login2" method="post"> -->
<!-- <input type="text" name="name" /> -->
<!-- <input type="text" name="pwd" /> -->
<!-- <input type="submit" value="提交"> -->
<!-- </form> -->
<!-- <form action="login3" method="post"> -->
<!-- <input type="text" name="name" /> -->
<!-- <input type="text" name="pwd" /> -->
<!-- <input type="submit" value="提交"> -->
<!-- </form> -->
</body>
</html>