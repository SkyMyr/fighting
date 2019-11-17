package com.qcby.service;

import com.qcby.entity.PubMedal;

import java.util.List;

public interface PubMedalService {
    List<PubMedal> selectMedal(Integer id);
}
