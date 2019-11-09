package com.qcby.service;

import com.qcby.entity.CpnAdmin;

/**
 * @ClassNameCpnAdminService
 * @Description TODO
 * @Author myr
 * @Date 2019/11/8 14:55
 * @Version 1.0
 **/
public interface CpnAdminService {
    /**
     * 公司注册
     * @param record
     * @return
     */
    int insert(CpnAdmin record);

    /**
     * Login
     * @param login_name
     * @param password
     * @return
     */
    CpnAdmin selectByLogin(String login_name,String password);

    /**
     * 设置->更改我的信息
     * @param record
     * @return
     */
    int updateByPrimaryKey(CpnAdmin record);
}
