package com.qcby.dao;

import com.qcby.entity.PubAppr;

public interface PubApprMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubAppr record);

    int insertSelective(PubAppr record);

    PubAppr selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubAppr record);

    int updateByPrimaryKey(PubAppr record);
}