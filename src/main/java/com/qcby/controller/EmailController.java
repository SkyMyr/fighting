package com.qcby.controller;

import com.alibaba.fastjson.JSON;
import com.qcby.entity.CpnUserDepartment;
import com.qcby.util.EmailTest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @ClassNameEmailController
 * @Description 邮件传输链接
 * @Author myr
 * @Date 2019/11/9 15:00
 * @Version 1.0
 **/
@Controller
@RequestMapping("email")
public class EmailController {

    @RequestMapping("sendEmail")
    public String sendEmail(HttpServletRequest request, HttpServletResponse response,CpnUserDepartment cpnUserDepartment){
        request.setAttribute("user",cpnUserDepartment);
        return"../views/emailTemplet.html";
    }

    public static void main(String[] args) {
        CpnUserDepartment cpnUserDepartment = new CpnUserDepartment();
        cpnUserDepartment.setEmail("244642897@qq.com");
        cpnUserDepartment.setUser_name("myr");
        cpnUserDepartment.setId((long) 1);
        EmailTest.send_qqmail(cpnUserDepartment.getEmail(), "邀请您完成阿里核心架构部的员工注册",
                "<html><head></head><body><p>请及时确认以下邀请 :</p><br>" +
                        "<h3><a href='http://localhost:8080/ssm/email/sendEmail?id=" + cpnUserDepartment.getId().toString() + "'>链接</href></h3></body></html>");
        System.err.println("json********************************" + JSON.toJSONString( cpnUserDepartment));
        System.out.println(JSON.parseObject(JSON.toJSONString( cpnUserDepartment), CpnUserDepartment.class));
    }
}