package com.qcby.controller;

import com.alibaba.fastjson.JSON;
import com.qcby.dao.CpnUserDepartmentMapper;
import com.qcby.entity.*;
import com.qcby.model.LoginModel;
import com.qcby.model.Register;
import com.qcby.model.SMS;
import com.qcby.service.AdminService;
import com.qcby.service.CpnAdminService;
import com.qcby.util.SendSMSUtils;
import com.qcby.util.SnowflakeIdWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import redis.clients.jedis.Jedis;

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

    @Autowired
    CpnAdminService cpnAdminService;

    @Autowired
    CpnUserDepartmentMapper cpnUserDepartmentMapper;
    /**
     * 登陆
     * @param request
     * @param loginModel
     * @return
     */
    @RequestMapping("login")
    public ResponseBean login(HttpServletRequest request,LoginModel loginModel) {
        ResponseBean responseBean = new ResponseBean();
        System.out.println(loginModel);
        CpnAdmin cpnAdmin = new CpnAdmin();
        cpnAdmin = cpnAdminService.selectByLogin(loginModel.getLoginName(),loginModel.getPassword());
        HttpSession session = request.getSession();
        session.setAttribute("uuid",cpnAdmin.getId());
        if(cpnAdmin != null){
            responseBean.setCode(1);
            responseBean.setMsg("登陆成功");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("用户名或者密码错误！");
        }
        return responseBean;
    }

    /**
     * 注册
     * @param request
     * @param register
     * @return
     */
    @RequestMapping("regs")
    public ResponseBean regs(HttpServletRequest request, Register register) {
        ResponseBean responseBean = new ResponseBean();
        CpnAdmin admin = new CpnAdmin();
        //从redis里面取数据
        Jedis jedis = new Jedis("127.0.0.1",6379);
        String code = jedis.get(register.getMobile());
        System.err.println(code + "/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");
        jedis.close();

        if(code.equals(register.getCode1())){
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
            admin.setStatus((byte) 1);
            admin.setType((short) 2);
            System.out.println(admin.toString());
            int result = cpnAdminService.insert(admin);
            if(result == 1){
                responseBean.setCode(1);
                responseBean.setMsg("注册成功");
                responseBean.setDate("");
            }else {
                responseBean.setCode(0);
                responseBean.setMsg("插入失败");
                responseBean.setDate("");
            }
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("验证码错误");
            responseBean.setDate("");
        }
        return responseBean;
    }

    /**
     * 更新个人信息
     * @param request
     * @param register
     * @return
     */
        @RequestMapping("updateData")
        public ResponseBean<Map> updateData(HttpServletRequest request, Register register) {
            ResponseBean<Map> responseBean = new ResponseBean<Map>();
            System.err.println(request.getSession().getId());

            Long id = Long.parseLong(request.getSession().getAttribute("uuid").toString()) ;
            System.err.println("更新" + id.toString()+"***************************");

            CpnAdmin admin = new CpnAdmin();
            admin.setId(id);
            admin.setLogin_name(register.getLoginName());
            admin.setAddress(register.getAddress());
            admin.setUrl(register.getUrl());
            admin.setCountry(register.getCountryName());
            admin.setCity(register.getCityName());
            admin.setProvince(register.getProvinceName());
            admin.setMobile(register.getMobile());
            System.out.println(admin + "************************************");
            int result = cpnAdminService.updateByPrimaryKey(admin);
            if(result == 1){
                responseBean.setCode(1);
                responseBean.setMsg("更改成功！");
            }else {
                responseBean.setCode(0);
                responseBean.setMsg("更新失败！");
            }
            return responseBean;
        }

    /**
     * 发送短信验证
     * @param request
     * @param sms 手机号和区号（+86）
     * @return
     */
    @RequestMapping("sms")
    public ResponseBean sms(HttpServletRequest request, SMS sms) {
        ResponseBean responseBean = new ResponseBean();
        String result = SendSMSUtils.sendSMS(sms.getCode(),sms.getPhoneNumbers());
        if(result.equals("发送验证码失败")){
            responseBean.setDate("");
            responseBean.setCode(0);
            responseBean.setMsg("发送失败");
        }else {
            responseBean.setMsg(result);
            responseBean.setCode(1);
            responseBean.setMsg("发送成功");
            //存储到redis里面去
            Jedis jedis = new Jedis("127.0.0.1",6379);
            jedis.set(sms.getPhoneNumbers()[0],result);
            System.err.println(result + "验证码++++++++++++++++");
            System.err.println(jedis.get(sms.getPhoneNumbers()[0]) + "从redistr里边取出来-*-----------------------------------------");
            jedis.close();
        }
        return responseBean;
    }
    @RequestMapping("reciveEmail")
    public ResponseBean reciveEmail(HttpServletRequest request, CpnUserDepartment cpnUserDepartment) {
        System.out.println(JSON.toJSON(cpnUserDepartment) + "****************************************");
        ResponseBean responseBean = new ResponseBean();
        cpnUserDepartment.setSms_status((byte) 3);
        int result = cpnUserDepartmentMapper.updateByPrimaryKeySelective(cpnUserDepartment);
        if(result == 0){
            responseBean.setCode(0);
            responseBean.setMsg("注册失败");
        }else {
            responseBean.setCode(1);
            responseBean.setMsg("注册已经完成，欢迎加入阿里大家庭");
        }
        return responseBean;
    }

//    /**
//     * 废弃
//     * 登陆
//     * @param request
//     * @param loginModel
//     * @return
//     */
//    @RequestMapping("login")
//    public String login(HttpServletRequest request,LoginModel loginModel) {
//        System.out.println(loginModel);
//        Admin admin = adminService.selectByLogin(loginModel.getLoginName(),loginModel.getPassword());
//        System.out.println(admin);
//        HttpSession session = request.getSession();
//        session.setAttribute("uuid",admin.getId());
//        session.setAttribute("a","b");
//        System.err.println(session.getId());
//        System.err.println("登录" + session.getAttribute("uuid") + "*********************************");
//        if(admin != null){
//            String json ="{\"code\":[1],\"data\":{\"token\":\""+session.getId()+"\"}}";
//            return json;
//        }
//        return "{\"code\":[0]}";
//    }

//    /**
//     * 废弃
//     * 更新个人信息
//     * @param request
//     * @param register
//     * @return
//     */
//    @RequestMapping("updateData")
//    public ResponseBean<Map> updateData(HttpServletRequest request, Register register) {
//        ResponseBean<Map> responseBean = new ResponseBean<Map>();
//        System.err.println(request.getSession().getId());
//
//        System.err.println("+++++++++++++++++++++++++++++++++" + request.getSession().getAttribute("a"));
//        Long id = Long.parseLong(request.getSession().getAttribute("uuid").toString()) ;
//        System.err.println("更新" + id.toString()+"***************************");
//
//        Admin admin = new Admin();
//        admin.setId(id);
//        admin.setLogin_name(register.getLoginName());
//        admin.setAddress(register.getAddress());
//        admin.setUrl(register.getUrl());
//        admin.setCountry(register.getCountryName());
//        admin.setCity(register.getCityName());
//        admin.setProvince(register.getProvinceName());
//        admin.setMobile(register.getMobile());
//        System.out.println(admin + "************************************");
//        int result = adminService.updateByPrimaryKey(admin);
//        Map map = new HashMap<String,String>();
//        map.put("code",result);
//        responseBean.setDate(map);
//        return responseBean;
//    }
}
