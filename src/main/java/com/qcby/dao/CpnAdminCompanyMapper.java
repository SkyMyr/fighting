package com.qcby.dao;

import com.qcby.entity.CpnAdminCompany;

public interface CpnAdminCompanyMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnAdminCompany record);

    int insertSelective(CpnAdminCompany record);

    CpnAdminCompany selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnAdminCompany record);

    int updateByPrimaryKey(CpnAdminCompany record);
}