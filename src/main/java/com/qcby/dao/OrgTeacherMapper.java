package com.qcby.dao;

import com.qcby.entity.OrgTeacher;

public interface OrgTeacherMapper {
    int deleteByPrimaryKey(Long id);

    int insert(OrgTeacher record);

    int insertSelective(OrgTeacher record);

    OrgTeacher selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(OrgTeacher record);

    int updateByPrimaryKey(OrgTeacher record);
}