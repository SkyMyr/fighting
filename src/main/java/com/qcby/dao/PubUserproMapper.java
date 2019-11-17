package com.qcby.dao;

import com.qcby.entity.PubUserpro;
import org.apache.ibatis.annotations.Select;

import java.net.InterfaceAddress;
import java.util.List;

public interface PubUserproMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubUserpro record);

    int insertSelective(PubUserpro record);

    PubUserpro selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubUserpro record);

    int updateByPrimaryKey(PubUserpro record);

    PubUserpro selectUserImgAndName(Integer id);

    PubUserpro selectHelperAddrAndImg(Integer id);

    PubUserpro selectByPhone(String phone);
}