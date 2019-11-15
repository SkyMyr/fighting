package com.qcby.dao;

import com.qcby.entity.PubUserpro;

import java.util.List;

public interface PubUserproMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubUserpro record);

    int insertSelective(PubUserpro record);

    PubUserpro selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubUserpro record);

    int updateByPrimaryKey(PubUserpro record);

    PubUserpro selectUserImgAndName();

    List<PubUserpro> selectHelperAddrAndImg();
}