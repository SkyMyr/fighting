package com.qcby.dao;

import com.qcby.entity.PubMedal;

public interface PubMedalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PubMedal record);

    int insertSelective(PubMedal record);

    PubMedal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PubMedal record);

    int updateByPrimaryKeyWithBLOBs(PubMedal record);

    int updateByPrimaryKey(PubMedal record);
}