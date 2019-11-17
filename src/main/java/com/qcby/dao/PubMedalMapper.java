package com.qcby.dao;

import com.qcby.entity.PubMedal;

import java.util.List;

public interface PubMedalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PubMedal record);

    int insertSelective(PubMedal record);

    PubMedal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PubMedal record);

    int updateByPrimaryKeyWithBLOBs(PubMedal record);

    int updateByPrimaryKey(PubMedal record);

    List<PubMedal> selectMedal(Integer id);
}