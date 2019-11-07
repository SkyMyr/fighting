package com.qcby.dao;

import com.qcby.entity.AdminCompany;

public interface AdminCompanyMapper {
    int deleteByPrimaryKey(Long id);

    int insert(AdminCompany record);

    int insertSelective(AdminCompany record);

    AdminCompany selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(AdminCompany record);

    int updateByPrimaryKey(AdminCompany record);
}