package com.qcby.dao;

import com.qcby.entity.AdminSchool;

public interface AdminSchoolMapper {
    int deleteByPrimaryKey(Long id);

    int insert(AdminSchool record);

    int insertSelective(AdminSchool record);

    AdminSchool selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(AdminSchool record);

    int updateByPrimaryKey(AdminSchool record);
}