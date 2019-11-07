package com.qcby.dao;

import com.qcby.entity.OrgHumanResources;

public interface OrgHumanResourcesMapper {
    int deleteByPrimaryKey(Long id);

    int insert(OrgHumanResources record);

    int insertSelective(OrgHumanResources record);

    OrgHumanResources selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(OrgHumanResources record);

    int updateByPrimaryKey(OrgHumanResources record);
}