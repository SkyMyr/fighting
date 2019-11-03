<%--
  Created by IntelliJ IDEA.
  User: myr
  Date: 2019/11/1
  Time: 16:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="formsubmit1">
        <input name="account" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit2">
        <input name="account" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit3">
        <input name="account" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit4">
        <input name="account" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit5">
        <input name="account" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit6">
        6
        <input name="ids" value="" type="text">
        <input name="ids" value="" type="text">
        <input name="ids" value="" type="text">
        <input name="ids" value="" type="text">
        <button>提交</button>
    </form>

    <form action="formsubmit7">
        user
        <input name="title" value="" type="text">
        <input name="content" value="" type="text">
        <input name="author" value="" type="text">
        <button>提交</button>
    </form>

    <form action="insertData">
        添加一条博客
        <input name="title" value="" type="text">
        <input name="content" value="" type="text">
        <input name="author" value="" type="text">
        <button>提交</button>
    </form>

    <form action="updateData">
        更新博客信息
        <input name="id" value="${blog.id}" type="text" style="display:none">
        <input name="title" value="${blog.title}" type="text">
        <input name="content" value="${blog.content}" type="text">
        <input name="author" value="${blog.author}" type="text">
        <button>提交</button>
    </form>
</body>
</html>
