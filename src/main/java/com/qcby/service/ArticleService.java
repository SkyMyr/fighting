package com.qcby.service;

import java.util.List;

import com.qcby.entity.Article;

public interface ArticleService {
	Article selectByPrimaryKey(Integer id);
	List<Article> selectList(Article record);
}
