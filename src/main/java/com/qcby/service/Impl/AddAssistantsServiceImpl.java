package com.qcby.service.Impl;

import com.qcby.dao.Pc_adminMapper;
import com.qcby.entity.Pc_admin;
import com.qcby.service.AddAssistantsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author LIUHUI
 * @package_name com.qcby.service.Impl
 * @create 2019-11-13
 */
@Service("AddAssistantsService")
public class AddAssistantsServiceImpl  implements AddAssistantsService {


     @Autowired
    Pc_adminMapper pc_adminMapper;
    @Override
    public int deleteByPrimaryKey(Long id) {
        return pc_adminMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Pc_admin record) {
        return pc_adminMapper.insert(record);
    }

    @Override
    public int insertSelective(Pc_admin record) {
        return pc_adminMapper.insertSelective(record);
    }

    @Override
    public Pc_admin selectByPrimaryKey(Long id) {
        return pc_adminMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Pc_admin record) {
        return pc_adminMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Pc_admin record) {
        return pc_adminMapper.updateByPrimaryKey(record);
    }
}
