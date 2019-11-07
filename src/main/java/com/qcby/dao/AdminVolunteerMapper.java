package com.qcby.dao;

import com.qcby.entity.AdminVolunteer;

public interface AdminVolunteerMapper {
    int deleteByPrimaryKey(Long id);

    int insert(AdminVolunteer record);

    int insertSelective(AdminVolunteer record);

    AdminVolunteer selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(AdminVolunteer record);

    int updateByPrimaryKey(AdminVolunteer record);
}