package com.qcby.service.Impl;

import com.qcby.dao.CpnAdminCompanyMapper;
import com.qcby.entity.CpnAdminCompany;
import com.qcby.service.CpnAdminCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassNameCpnAdminCompanyServiceImpl
 * @Description TODO
 * @Author myr
 * @Date 2019/11/20 11:34
 * @Version 1.0
 **/
@Service("cpnAdminCompanyService")
public class CpnAdminCompanyServiceImpl implements CpnAdminCompanyService {
    @Autowired
    CpnAdminCompanyMapper cpnAdminCompanyMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return cpnAdminCompanyMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(CpnAdminCompany record) {
        return cpnAdminCompanyMapper.insert(record);
    }

    @Override
    public int insertSelective(CpnAdminCompany record) {
        return cpnAdminCompanyMapper.insertSelective(record);
    }

    @Override
    public CpnAdminCompany selectByPrimaryKey(Long id) {
        return cpnAdminCompanyMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(CpnAdminCompany record) {
        return cpnAdminCompanyMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(CpnAdminCompany record) {
        return updateByPrimaryKey(record);
    }

    @Override
    public Long selectCompanyId(Long id) {
        return cpnAdminCompanyMapper.selectCompanyId(id);
    }
}
