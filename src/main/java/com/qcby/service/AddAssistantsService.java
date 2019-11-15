package com.qcby.service;

import com.qcby.entity.Pc_admin;

/**
 * @author LIUHUI
 * @package_name com.qcby.service
 * @create 2019-11-13
 */
public interface AddAssistantsService {
    int deleteByPrimaryKey(Long id);

    int insert(Pc_admin record);

    int insertSelective(Pc_admin record);

    Pc_admin selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Pc_admin record);

    int updateByPrimaryKey(Pc_admin record);
}
