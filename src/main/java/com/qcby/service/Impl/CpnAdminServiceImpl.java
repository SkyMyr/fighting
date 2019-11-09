package com.qcby.service.Impl;

import com.qcby.dao.CpnAdminMapper;
import com.qcby.entity.CpnAdmin;
import com.qcby.service.CpnAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassNameCpnAdminService
 * @Description TODO
 * @Author myr
 * @Date 2019/11/8 14:57
 * @Version 1.0
 **/
@Service("cpnAdminService")
public class CpnAdminServiceImpl implements CpnAdminService{
    @Autowired
    CpnAdminMapper cpnAdminMapper;

    /**
     * 公司注册
     * @param record
     * @return
     */
    @Override
    public int insert(CpnAdmin record) {
        return cpnAdminMapper.insert(record);
    }

    /**
     * 登陆验证
     * @param login_name
     * @param password
     * @return
     */
    @Override
    public CpnAdmin selectByLogin(String login_name,String password) {
        return cpnAdminMapper.selectByLogin(login_name,password);
    }

    /**
     * 设置-更改我的信息
     * @param record
     * @return
     */
    @Override
    public int updateByPrimaryKey(CpnAdmin record) {
        return cpnAdminMapper.updateByPrimaryKeySelective(record);
    }
}
