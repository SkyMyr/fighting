package com.qcby.dao;

import com.qcby.entity.UserDepartment;

public interface UserDepartmentMapper {
    int deleteByPrimaryKey(Long id);

    int insert(UserDepartment record);

    int insertSelective(UserDepartment record);

    UserDepartment selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(UserDepartment record);

    int updateByPrimaryKey(UserDepartment record);
}