<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: myr
  Date: 2019/11/1
  Time: 16:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>show</title>
    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
    <script>
        function updateDate(id){
            window.location.href="updateData1?blogId=" + id;
        }
        function deleteDate(id){
            window.location.href="deleteData?blogId=" + id;
        }
    </script>
</head>
<body>
myr
${account}<br>

<%--<c:forEach items="${data}" var="d">--%>
    <%--${d.author} --  ${d.content} --${d.title}<br>--%>
<%--</c:forEach>--%>

<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <a class="btn btn-success" href="zhongjian">添加</a>
    </div>
    <div class="col-md-6 col-md-offset-3">
        <table class = "table table-striped">
            <thead><tr><th>blogId</th><th>blogTitle</th><th>blogContent</th><th>blogAuthor</th></tr></thead>
            <tbody>
            <c:forEach var="blog"  items="${data}">
                <tr>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.content}</td>
                    <td>${blog.author}</td>
                    <td>
                        <button onclick="updateDate(${blog.id})" class="btn btn-primary">更新</button>
                        <button onclick="deleteDate(${blog.id})" class="btn btn-danger">删除</button>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
<a href="zhongjian" value="跳转">跳转</a>
</body>
</html>
