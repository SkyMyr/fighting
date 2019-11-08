package com.qcby.controller;

import com.qcby.entity.Admin;
import com.qcby.model.LoginModel;
import com.qcby.model.Register;
import com.qcby.service.AdminService;
import com.qcby.util.SnowflakeIdWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * @ClassNameAdminController
 * @Description TODO
 * @Author myr
 * @Date 2019/11/6 14:45
 * @Version 1.0
 **/
@RestController
@RequestMapping("company")
public class AdminController {

    @Autowired
    AdminService adminService;

    @RequestMapping("register")
    public Map register(HttpServletRequest request, Register register) {
        Admin admin = new Admin();
        admin.setId(SnowflakeIdWorker.generateId());
        admin.setAddress(register.getAddress());
        admin.setUrl(register.getUrl());
        admin.setCountry(register.getCountryName());
        admin.setCity(register.getCityName());
        admin.setProvince(register.getProvinceName());
        admin.setLogin_name(register.getLoginName());
        admin.setMobile(register.getMobile());
        admin.setCoupon_code(register.getCouponCode());
        admin.setPassword(register.getPassword());
        System.out.println(admin.toString());
        int result = adminService.insert(admin);
        Map map = new HashMap<String,String>();
        map.put("code",result);
        map.put("msg","注册成功");
        return map;
    }

    @RequestMapping("login")
    public String login(HttpServletRequest request,LoginModel loginModel) {
        System.out.println(loginModel);
        Admin admin = adminService.selectByLogin(loginModel.getLoginName(),loginModel.getPassword());
        System.out.println(admin);
        HttpSession session = request.getSession();
        session.setAttribute("uuid",admin.getId());
        session.setAttribute("a","b");
        System.err.println(session.getId());
        System.err.println("登录" + session.getAttribute("uuid") + "*********************************");
        if(admin != null){
            String json ="{\"code\":[1],\"data\":{\"token\":\""+session.getId()+"\"}}";
            return json;
        }
        return "{\"code\":[0]}";
    }

    @RequestMapping("updateData")
    public ResponseBean<Map> updateData(HttpServletRequest request, Register register) {
        ResponseBean<Map> responseBean = new ResponseBean<Map>();
        System.err.println(request.getSession().getId());

        System.err.println("+++++++++++++++++++++++++++++++++" + request.getSession().getAttribute("a"));
        Long id = Long.parseLong(request.getSession().getAttribute("uuid").toString()) ;
        System.err.println("更新" + id.toString()+"***************************");

        Admin admin = new Admin();
        admin.setId(id);
        admin.setLogin_name(register.getLoginName());
        admin.setAddress(register.getAddress());
        admin.setUrl(register.getUrl());
        admin.setCountry(register.getCountryName());
        admin.setCity(register.getCityName());
        admin.setProvince(register.getProvinceName());
        admin.setMobile(register.getMobile());
        System.out.println(admin + "************************************");
        int result = adminService.updateByPrimaryKey(admin);
        Map map = new HashMap<String,String>();
        map.put("code",result);
        responseBean.setDate(map);
        return responseBean;
    }

    @RequestMapping("getAllDepartment")
    public String getAllDepartment(HttpServletRequest request ) {
        //.val可以快速生成list

        Map map = new HashMap();
        map.put("dep1","人力部");
        map.put("dep2","财务部");
        map.put("dep3","市场部");
        map.put("dep4","管理部");
        map.put("dep5","后勤部");
        map.put("","技术部");
        String json ="{\"code\":[1,2,3],\"data\":{\"name\":\"人力部\",\"name\":\"财务部\",\"name\":\"市场部\"},}";
        return json;
    }
}
