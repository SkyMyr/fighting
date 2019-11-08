package com.qcby.dao;

import com.qcby.entity.PubUser;

public interface PubUserMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubUser record);

    int insertSelective(PubUser record);

    PubUser selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubUser record);

    int updateByPrimaryKey(PubUser record);
}