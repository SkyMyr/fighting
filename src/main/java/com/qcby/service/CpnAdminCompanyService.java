package com.qcby.service;

import com.qcby.dao.CpnAdminCompanyMapper;
import com.qcby.entity.CpnAdminCompany;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @ClassNameCpnAdminCompanyService
 * @Description TODO
 * @Author myr
 * @Date 2019/11/20 11:31
 * @Version 1.0
 **/
public interface CpnAdminCompanyService {
    int deleteByPrimaryKey(Long id);

    //管理员注册插入对应公司的表
    int insert(CpnAdminCompany record);

    int insertSelective(CpnAdminCompany record);

    CpnAdminCompany selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnAdminCompany record);

    int updateByPrimaryKey(CpnAdminCompany record);

    Long selectCompanyId(Long id);
}
