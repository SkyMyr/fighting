package com.qcby.dao;

import com.qcby.entity.PubApprUserData;

public interface PubApprUserDataMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubApprUserData record);

    int insertSelective(PubApprUserData record);

    PubApprUserData selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubApprUserData record);

    int updateByPrimaryKey(PubApprUserData record);

    //
    PubApprUserData selectHelperAndTime();
}