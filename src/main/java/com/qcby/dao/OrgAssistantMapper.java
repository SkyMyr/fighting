package com.qcby.dao;

import com.qcby.entity.OrgAssistant;

public interface OrgAssistantMapper {
    int deleteByPrimaryKey(Long id);

    int insert(OrgAssistant record);

    int insertSelective(OrgAssistant record);

    OrgAssistant selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(OrgAssistant record);

    int updateByPrimaryKey(OrgAssistant record);
}