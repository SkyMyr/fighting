package com.qcby.dao;

import com.qcby.entity.BigeventManager;

public interface BigeventManagerMapper {
    int deleteByPrimaryKey(Long id);

    int insert(BigeventManager record);

    int insertSelective(BigeventManager record);

    BigeventManager selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(BigeventManager record);

    int updateByPrimaryKey(BigeventManager record);
}