package com.qcby.dao;

import com.qcby.entity.CpnUserDepartment;

public interface CpnUserDepartmentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnUserDepartment record);

    int insertSelective(CpnUserDepartment record);

    CpnUserDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnUserDepartment record);

    int updateByPrimaryKey(CpnUserDepartment record);
}