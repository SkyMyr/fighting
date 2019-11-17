package com.qcby.controller;

import com.alibaba.fastjson.JSON;
import com.qcby.dao.*;
import com.qcby.entity.*;
import com.qcby.model.*;
import com.qcby.service.*;
import com.qcby.util.*;
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

    @Autowired
    AddAssistantsService addAssistantsService;

    @Autowired
    PubApprMapper pubApprMapper;

    @Autowired
    PubUserproMapper pubUserproMapper;

    @Autowired
    PubApprImgMapper pubApprImgMapper;

    @Autowired
    PubApprLikeService pubApprLikeService;

    @Autowired
    PubMedalService pubMedalService;

    @Autowired
    PubApprUserDataService pubApprUserDataService;

    @Autowired
    PubUserproService pubUserproService;

    @Autowired
    PubApprImgService pubApprImgService;
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
            PubUserpro usr = pubUserproMapper.selectByPhone(list.get(i).getMobile());
            list.get(i).setUpdate_at(usr.getId());
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


    /**
     * 添加协管员
     * addAssistants
     * author 刘辉
     */
  @RequestMapping("addAssistants")
    public ResponseBean<Map> addAssistants(HttpServletRequest request, AddAssistants addAssistants) {
        ResponseBean<Map> responseBean = new ResponseBean<Map>();
        System.err.println(request.getSession().getId());

        System.err.println("+++++++++++++++++++++++++++++++++"
                + request.getSession().getAttribute("a"));
        Pc_admin pc_admin = new Pc_admin();
      System.out.println("*************************");
      System.out.println(addAssistants.getUser_name());
      System.out.println(addAssistants.getPassword());
      System.out.println(addAssistants.getGender());
      System.out.println(addAssistants.getMobile());
      System.out.println("*************************");
        pc_admin.setLogin_name(addAssistants.getUser_name());
        pc_admin.setPassword(addAssistants.getPassword());
        pc_admin.setGender(addAssistants.getGender());
        pc_admin.setMobile(addAssistants.getMobile());
        int result = addAssistantsService.insertSelective(pc_admin);
        ResponseBean response = new ResponseBean();
        Map map = new HashMap<String,String>();
        map.put("code",result);
        responseBean.setDate(map);
        return responseBean;
    }

 /**
     * excel表格导入
     * 刘辉
     * @param excelFile
     * @return
     * @throws IOException
     * @throws InvalidFormatException
     */
    @RequestMapping(value = "uploadFileHrgzly",headers = "content-type=multipart/*", method = RequestMethod.POST)
    public ResponseBean uploadFileHrgzly(@RequestParam("excelFile") MultipartFile excelFile) throws IOException, InvalidFormatException {
        ResponseBean responseBean = new ResponseBean();
        InputStream inp = excelFile.getInputStream();
        List<Pc_admin> list = CellAssistants.importFile(inp);
        for (int i = 0; i < list.size(); i++) {
            addAssistantsService.insert(list.get(i));
        }
        return responseBean;
    }


    /**
     * 组织分享
     * 刘辉
     */
    @RequestMapping("VolunteerShare")
    public ResponseBean volunteerShare(HttpServletRequest request, String gid){
        ResponseBean responseBean = new ResponseBean();
       // Long gids = Long.valueOf(gid);//某条帮助事件的id
        PubAppr helpers =pubApprMapper.selectByPrimaryKey(6L);//应该是gids
       // if(helpers.getType()==3){//执行以下方法}
        String address= helpers.getAddress();//获得地址
        String fromHelper= helpers.getHelpers();//获得帮助人id
        String toHelper =helpers.getHelpees();//获得受助者id
        //根据fromHelper查个人信息
        System.out.println(helpers);
        long fromHelperId = Long.valueOf(fromHelper);
        PubUserpro formPeople = pubUserproMapper.selectByPrimaryKey(fromHelperId);
        String fromHelperName = formPeople.getFirst_name()+formPeople.getLast_name();
        String fromHeaderImg =formPeople.getHeader_img();
        //根据toHelper
        long  toPeopleId= Long.valueOf(toHelper);
        PubUserpro toPeople = pubUserproMapper.selectByPrimaryKey(toPeopleId);
        String toHelperName = toPeople.getFirst_name()+toPeople.getLast_name();
        String toHeaderImg = toPeople.getHeader_img();
        //根据帮助人id查事件
        PubApprImg pubApprImg =pubApprImgMapper.selectByAppId(fromHelperId);
        String url =pubApprImg.getUrl();//获得了要分享的图片
        System.out.println("*****************"+address+
                "*****************"+fromHeaderImg+"*****************"+
                fromHelperName+
                "*****************"+ toHeaderImg+"*****************"+
                toHelperName+
                "*****************"+url);
       VolunteerShare volunteerShare = new VolunteerShare();
       volunteerShare.setAddress(address);
       volunteerShare.setFromHeaderImg(fromHeaderImg);
       volunteerShare.setFromHelperName(fromHelperName);
       volunteerShare.setToHeaderImg(toHeaderImg);
       volunteerShare.setToHelperName(toHelperName);
       volunteerShare.setUrl(url);
       responseBean.setData(volunteerShare);
        return responseBean;
    }


    /**
     * pengjian
     * 个人分享页面相关信息
     * @return
     */
    @RequestMapping("selectHelp")
    public ResponseBean<PubApprModel> selectHelpers(String id){
        ResponseBean<PubApprModel> responseBean=new ResponseBean<>();
        //查询分享页面帮助者的头像,名字
        PubUserpro pubUserpro=pubUserproService.selectHelperAddrAndImg(Integer.valueOf(id));
        System.out.println(pubUserpro+"AAAAAAAAAAAAAAAAA");
        PubApprModel pubApprModel = new PubApprModel();
        pubApprModel.setHelpers(id);
        pubApprModel.setFirst_name(pubUserpro.getFirst_name());
        pubApprModel.setHeader_img(pubUserpro.getHeader_img());
        //查询分享页面的施助者id，感恩者id，和施助的地点
        List<PubAppr> helpeesList=pubApprService.selectByhelper(id);
        List<HelpeesInfo>  helpeesInfoList = new ArrayList<>();
        for (int i = 0; i < helpeesList.size(); i++) {
            //根据id查询姓名、头像
            String helpeeId = helpeesList.get(i).getHelpees();
            PubUserpro helpee = pubUserproService.selectUserImgAndName(Integer.valueOf(helpeeId));
            //根据内容id查询内容图片
            Long newId = helpeesList.get(i).getId();
            //获取感恩内容的内容图片
            List url = pubApprImgService.selectUrl(Math.toIntExact(newId));
            //往受助者信息里边塞信息
            HelpeesInfo helpeesInfo = new HelpeesInfo();
            helpeesInfo.setHelpees(helpeeId);
            helpeesInfo.setAddress(helpeesList.get(i).getAddress());
            helpeesInfo.setContent(helpeesList.get(i).getContent());
            helpeesInfo.setUrl(url);
            helpeesInfo.setHelpees_name(helpee.getFirst_name());
            helpeesInfo.setHelpees_img(helpee.getHeader_img());
            //最后往队列里边放每条感恩内容对应的受助者信息（包括内容图片和地址等）
            helpeesInfoList.add(helpeesInfo);
        }
        pubApprModel.setHelpeesList(helpeesInfoList);
        if(pubApprModel!=null){
            responseBean.setData(pubApprModel);
            responseBean.setCode(1);
            responseBean.setMsg("显示成功!");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("显示失败!");
        }
        return responseBean;
    }


    /**
     * pengjian
     * 点头像进入用户详细信息页面
     * @return
     */
    @RequestMapping("employDetails")
    public ResponseBean<EmployeeDetailsModel> selectDetails(String id){
        ResponseBean<EmployeeDetailsModel> responseBean =new ResponseBean<>();
        EmployeeDetailsModel employeeDetailsModel=new EmployeeDetailsModel();

        //查询用户获得的勋章
        List<PubMedal> pubMedals=pubMedalService.selectMedal(Integer.valueOf(id));
        employeeDetailsModel.setMedals(pubMedals);
        //查询用户的感恩数、帮助数,服务时间
        PubApprUserData pubApprUserData=pubApprUserDataService.selectHelperAndTime(Integer.valueOf(id));
        employeeDetailsModel.setApprNum(pubApprUserData.getHelpee_number());
        employeeDetailsModel.setGoodThingsNum(pubApprUserData.getHelper_number());
        employeeDetailsModel.setServiceTime(pubApprUserData.getService_time());
        //查询用户的头像,名字
        PubUserpro pubUserpro =pubUserproService.selectUserImgAndName(Integer.valueOf(id));
        System.out.println(pubUserpro+"******************");
        employeeDetailsModel.setImgUrl(pubUserpro.getHeader_img());
        employeeDetailsModel.setFirstName(pubUserpro.getFirst_name());
        employeeDetailsModel.setHelpers(id);
        //将数据返回给前端
        if(employeeDetailsModel!=null){
            responseBean.setData(employeeDetailsModel);
            responseBean.setCode(1);
            responseBean.setMsg("成功");
        }else {
            responseBean.setCode(0);
            responseBean.setMsg("失败");
        }
        return responseBean;

    }

}
