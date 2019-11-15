package com.qcby.controller;

import com.alibaba.fastjson.JSON;
import com.qcby.dao.CpnUserDepartmentMapper;
import com.qcby.entity.*;
import com.qcby.model.*;
import com.qcby.service.*;
import com.qcby.util.CellValue;
import com.qcby.util.RedisPool;
import com.qcby.util.SendSMSUtils;
import com.qcby.util.SnowflakeIdWorker;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import redis.clients.jedis.Jedis;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
    PubApprService pubApprService;

    @Autowired
    CpnAdminService cpnAdminService;

    @Autowired
    EmployeeGoodService employeeGoodService;

    @Autowired
    CpnUserDepartmentService cpnUserDepartmentService;

    @Autowired
    CpnUserDepartmentMapper cpnUserDepartmentMapper;
    /**
     * myr
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
        System.err.println("uuid" + "***********************************");
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
     * myr
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
        String code = RedisPool.getJedis().get(register.getMobile());
//        Jedis jedis = new Jedis("127.0.0.1",36379);
//        String code = jedis.get(register.getMobile());
//        System.err.println(code + "/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/");
//        jedis.close();

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
     * myr
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
     * myr
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
            RedisPool.getJedis().set(sms.getPhoneNumbers()[0],result);
//            Jedis jedis = new Jedis("127.0.0.1",6379);
//            jedis.set(sms.getPhoneNumbers()[0],result);
//            System.err.println(result + "验证码++++++++++++++++");
//            System.err.println(jedis.get(sms.getPhoneNumbers()[0]) + "从redistr里边取出来-*-----------------------------------------");
//            jedis.close();
        }
        return responseBean;
    }

    /**
     * myr
     * 接收邮件跳转链接
     * @param request
     * @param cpnUserDepartment
     * @return
     */
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

    /**
     * pengjian
     * @author 15583
     * 员工列表
     */
    @RequestMapping("getUserList")
    public ResponseBean<List<EmployeeGood>> employeeGoodList(){
        //列表封装
        ResponseBean<List<EmployeeGood>> responseBean = new ResponseBean<>();
        List<EmployeeGood> employeeGood = employeeGoodService.findByTag();
        System.err.print(employeeGood + "+++++++++++++++++++++++++++");
        if (employeeGood!=null){
            responseBean.setDate(employeeGood);
            responseBean.setCode(1);
            responseBean.setMsg("true");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("false");
        }
        return responseBean;
    }

    /**
     *  pengjian
     * 通过名字查找员工列表
     * @param userName 员工姓名
     * @return
     */
    @RequestMapping("employee/searchByName")
    public ResponseBean selectByName(String userName){
        System.out.println(userName+"-------------------------");
        ResponseBean<EmployeeGood> responseBean =new ResponseBean<>();
        List<EmployeeGood> employee =employeeGoodService.selectByName(userName);
        System.out.println(employee+"++++++++++++++++++++++++++++++");
        if(employee!=null&&!employee.isEmpty()){
            responseBean.setDate(employee.get(0));
            responseBean.setCode(1);
            responseBean.setMsg("查找成功!");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("查找失敗!");
        }
        return responseBean;
    }


    /**
     * pengjian
     * 显示部门
     * @param request
     * @return
     */
    @RequestMapping("showAllDepartment")
    public List<GetAlldepartment> getAlldepartment(HttpServletRequest request){

        //封装成json数组
        List<GetAlldepartment> result =new ArrayList<>();
        GetAlldepartment getAlldepartment =new GetAlldepartment();
        getAlldepartment.setMarket("市场部");
        getAlldepartment.setManager("管理部");
        getAlldepartment.setFinance("财务部");
        getAlldepartment.setLogistics("后勤部");
        getAlldepartment.setTechnology("技术部");
        result.add(getAlldepartment);

        return result;
    }


    /**
     * liuhui
     * 更新密码
     * @param request
     * @param updatepwd
     * @return
     */
    @RequestMapping("updatePwd")
    public ResponseBean<Map> updatePwd(HttpServletRequest request, UpdatePwd updatepwd) {
        ResponseBean<Map> responseBean = new ResponseBean<Map>();
        System.err.println("+++++++++++++++++++++++++++++++++" + request.getSession().getAttribute("uuid"));

        Admin admin = new Admin();
        admin.setId((Long) request.getSession().getAttribute("uuid"));
        admin.setPassword(updatepwd.getPassword());
        admin.setMobile(updatepwd.getMobile());
        admin.setCountry(updatepwd.getNation());
        System.out.println(admin + "************************************");
        int result = adminService.updatePwd(admin);
        Map map = new HashMap<String,String>();
        map.put("code",result);
        responseBean.setDate(map);
        return responseBean;
    }


    /**
     * liuhui
     * 添加员工
     * @param request
     * @param addPeople
     * @return
     */
    @RequestMapping("AddPeople")
    public ResponseBean<Map> addPeople(HttpServletRequest request, AddPeople addPeople) {
        ResponseBean<Map> responseBean = new ResponseBean<Map>();
        System.err.println(request.getSession().getId());

        System.err.println("+++++++++++++++++++++++++++++++++"
                + request.getSession().getAttribute("a"));

        CpnUserDepartment cpnUserDepartment = new  CpnUserDepartment();
        System.out.println("*********"+addPeople.getGender()+ addPeople.getMobile()+"********"+addPeople.getUser_name()+"*************");
        cpnUserDepartment.setUser_name(addPeople.getUser_name());
        cpnUserDepartment.setGender(addPeople.getGender());
        cpnUserDepartment.setMobile(addPeople.getMobile());
        cpnUserDepartment.setDepartment_id(addPeople.getDepartment_id());
        System.out.println(cpnUserDepartment + "************************************");
        int result = cpnUserDepartmentService.insertSelective(cpnUserDepartment);
        Map map = new HashMap<String,String>();
        map.put("code",result);
        responseBean.setDate(map);
        return responseBean;
    }

    /**
     * liuhui myr
     * excel表格导入，并发送短信邀请
     * @param excelFile
     * @return
     * @throws IOException
     * @throws InvalidFormatException
     */
    @RequestMapping(value = "uploadFile",headers = "content-type=multipart/*", method = RequestMethod.POST)
    public ResponseBean uploadFile(@RequestParam("excelFile") MultipartFile excelFile) throws IOException, InvalidFormatException {
        ResponseBean responseBean = new ResponseBean();
        InputStream inp = excelFile.getInputStream();
        //excel表中的员工信息
        List<CpnUserDepartment> list = CellValue.importFile(inp);
        for (int i = 0; i < list.size(); i++) {
            cpnUserDepartmentService.insert(list.get(i));
            //发送短信邀请
            SendSMSUtils.sendMultiSMS("86",list.get(i).getMobile());
        }
        return responseBean;
    }

    /**
     * myr
     * 接收短信邀请入职员工获取互助信息之后的反馈
     * @param phone 手机号
     * @param code 状态 1-未注册 2-未同意 3- 已同意
     * @return
     */
    @RequestMapping("confirmSMS")
    public ResponseBean confirmSMS(String phone,String code){
        CpnUserDepartment cpnUserDepartment = cpnUserDepartmentService.selectByPhone(phone);
        cpnUserDepartment.setSms_status(Byte.valueOf(code));
        int result = cpnUserDepartmentService.updateByPrimaryKeySelective(cpnUserDepartment);
        ResponseBean responseBean = new ResponseBean();
        if(result==1){
            responseBean.setCode(1);
            responseBean.setMsg("已收到您的反馈");
        }else{
            responseBean.setCode(0);
            responseBean.setMsg("服务器出错");
        }
        return responseBean;
    }


    /**
     * myr
     * @param gid
     * @return
     */
    @RequestMapping("share")
    public ResponseBean share(String gid){
        ResponseBean responseBean = new ResponseBean();
        PubAppr pubAppr = pubApprService.selectByPrimaryKey(Long.valueOf(gid));
        responseBean.setCode(1);
        return responseBean;
    }
/*
    @RequestMapping("employMedal")
    public ResponseBean selectDetails(int id){
        EmployeeDetails employeeDetails =new EmployeeDetails();
        employeeDetails.setUserId(id);
        ResponseBean<EmployeeDetails> responseBean =new ResponseBean<>();
        //通过用户id查找感恩数,帮助数,服务时间,头像,勋章
        List<EmployeeDetails> detailsA =pubApprLikeService.selectLikeNum(id);
        System.out.println(detailsA+"OOOOOOOOOOOOOOOOOOO");
        List<EmployeeDetails> detailsB =employeeMedalService.selectMedal(id);
        System.out.println(detailsB+"HHHHHHHHHHHHHHHHHHHHHH");
        if (detailsA!=null&&!detailsA.isEmpty()&&detailsB!=null&&!detailsB.isEmpty()){
            //将查到的数据放到ResponseBean工具类中
            responseBean.setData(detailsA.get(0));
            responseBean.setData(detailsB.get(0));
            //返回给前端的提示信息
            responseBean.setCode(1);
            responseBean.setMsg("显示成功!");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("显示失败!");
        }
        System.out.println(responseBean+"PPPPPPPPPPPPPPPPPPPPPPPPP");
        return responseBean;
    }*/

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
