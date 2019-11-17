package com.qcby.service;

import com.qcby.entity.PubUserpro;

import java.util.List;

public interface PubUserproService {
    PubUserpro selectUserImgAndName(Integer id);

    PubUserpro selectHelperAddrAndImg(Integer id);
}
