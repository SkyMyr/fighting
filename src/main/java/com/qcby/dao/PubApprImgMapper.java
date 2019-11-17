package com.qcby.dao;

import com.qcby.entity.PubApprImg;

import java.util.List;

public interface PubApprImgMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PubApprImg record);

    int insertSelective(PubApprImg record);

    PubApprImg selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubApprImg record);

    int updateByPrimaryKey(PubApprImg record);

    List<PubApprImg> selectUrl(Integer id);
	
	PubApprImg selectByAppId(Long id);
}