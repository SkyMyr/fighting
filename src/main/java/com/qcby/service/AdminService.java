package com.qcby.service;

import com.qcby.entity.Admin;

/**
 * @ClassNameAdminService
 * @Description HR
 * @Author myr
 * @Date 2019/11/6 15:25
 * @Version 1.0
 **/
public interface AdminService {
    /**
     * 人力资源后台注册
     * @param record
     * @return
     */
    int insert(Admin record);

    /**
     * 登录验证
     * @param login_name
     * @param password
     * @return
     */
    Admin selectByLogin(String login_name,String password);

    /**
     * 设置->更改我的信息
     * @param record
     * @return
     */
    int updateByPrimaryKey(Admin record);
}
