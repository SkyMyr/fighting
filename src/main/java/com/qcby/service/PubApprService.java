package com.qcby.service;

import com.qcby.entity.PubAppr;

import java.util.List;

/**
 * @ClassNamePubApprService
 * @Description TODO
 * @Author myr
 * @Date 2019/11/13 14:36
 * @Version 1.0
 **/
public interface PubApprService {
    int deleteByPrimaryKey(Long id);

    int insert(PubAppr record);

    int insertSelective(PubAppr record);

    PubAppr selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PubAppr record);

    int updateByPrimaryKey(PubAppr record);
	
	PubAppr selectHelperAndHelpee(String id);

    //根据施助者查询受助者列表
    List<PubAppr> selectByhelper(String id);
}
