package com.qcby.service.Impl;

import com.qcby.dao.PubMedalMapper;
import com.qcby.entity.PubMedal;
import com.qcby.service.PubMedalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("pubMedalService")
public class PubMedalServiceLmpl implements PubMedalService {
    @Autowired
    PubMedalMapper pubMedalMapper;
    @Override
    public List<PubMedal> selectMedal(Integer id) {
        return pubMedalMapper.selectMedal(id);
    }
}
