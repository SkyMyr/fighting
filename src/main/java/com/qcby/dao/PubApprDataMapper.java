package com.qcby.dao;

import com.qcby.entity.PubApprData;

public interface PubApprDataMapper {
    int deleteByPrimaryKey(Long user_id);

    int insert(PubApprData record);

    int insertSelective(PubApprData record);

    PubApprData selectByPrimaryKey(Long user_id);

    int updateByPrimaryKeySelective(PubApprData record);

    int updateByPrimaryKey(PubApprData record);
}