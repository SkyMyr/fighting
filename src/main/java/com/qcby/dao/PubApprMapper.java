package com.qcby.dao;

import com.qcby.entity.PubAppr;
import com.qcby.model.PubApprModel;

import java.util.List;

public interface PubApprMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubAppr record);

    int insertSelective(PubAppr record);

    PubAppr selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubAppr record);

    int updateByPrimaryKey(PubAppr record);

    //
    PubAppr selectHelperAndHelpee(String id);

    //根据施助者查询受助者列表
    List<PubAppr> selectByhelper(String id);
}