package com.qcby.dao;

import com.qcby.entity.CpnDepartment;

import java.util.List;

public interface CpnDepartmentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(CpnDepartment record);

    int insertSelective(CpnDepartment record);

    CpnDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CpnDepartment record);

    int updateByPrimaryKey(CpnDepartment record);

    List<CpnDepartment> selectDepartmentName(Long id);

    //添加部门
    int insertDepartment(CpnDepartment cpnDepartment);
}