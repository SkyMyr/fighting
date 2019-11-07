package com.qcby.service.Impl;

import com.qcby.dao.AdminMapper;
import com.qcby.entity.Admin;
import com.qcby.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassNameAdminServiceImpl
 * @Description TODO
 * @Author myr
 * @Date 2019/11/6 15:28
 * @Version 1.0
 **/
@Service("adminService")
public class AdminServiceImpl implements AdminService{
    @Autowired
    AdminMapper adminMapper;

    /**
     * 人力资源后台注册
     * @param record
     * @return
     */
    @Override
    public int insert(Admin record) {
        return adminMapper.insert(record);
    }

    /**
     * 登录验证
     * @param login_name
     * @param password
     * @return
     */
    @Override
    public Admin selectByLogin(String login_name,String password) {
        return adminMapper.selectByLogin(login_name,password);
    }

    /**
     * 设置->更改我的信息
     * @param record
     * @return
     */
    @Override
    public int updateByPrimaryKey(Admin record) {
        return adminMapper.updateByPrimaryKeySelective(record);
    }
}
