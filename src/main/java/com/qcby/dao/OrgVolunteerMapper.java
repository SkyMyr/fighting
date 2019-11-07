package com.qcby.dao;

import com.qcby.entity.OrgVolunteer;

public interface OrgVolunteerMapper {
    int deleteByPrimaryKey(Long id);

    int insert(OrgVolunteer record);

    int insertSelective(OrgVolunteer record);

    OrgVolunteer selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(OrgVolunteer record);

    int updateByPrimaryKey(OrgVolunteer record);
}