package com.qcby.service.Impl;

import com.qcby.entity.Article;

import java.util.List;

public interface ArticleService {
	Article selectByPrimaryKey(Integer id);
	List<Article> selectList(Article record);
}
