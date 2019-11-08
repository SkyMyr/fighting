package com.qcby.dao;

import com.qcby.entity.CpnDepartment;

public interface CpnDepartmentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnDepartment record);

    int insertSelective(CpnDepartment record);

    CpnDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnDepartment record);

    int updateByPrimaryKey(CpnDepartment record);
}