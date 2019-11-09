//package com.qcby.helper;
//
//import java.text.SimpleDateFormat;
//import java.util.ArrayList;
//import java.util.Calendar;
//import java.util.Date;
//import java.util.GregorianCalendar;
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import org.springframework.util.Assert;
//
//import com.github.pagehelper.PageHelper;
//
//import com.givenera.common.model.AppreciationRequest;
//import com.givenera.common.model.AppreciationResponse;
//import com.givenera.common.model.ServiceTypeResponse;
//import com.givenera.common.model.StrangeUser;
//import com.givenera.common.model.base.DtoResult;
//import com.givenera.common.model.base.PageDataResult;
//import com.givenera.common.model.base.ResultCode;
//import com.givenera.model.Appr;
//import com.givenera.model.ApprConfirm;
//import com.givenera.model.ApprConfirmExample;
//import com.givenera.model.ApprExample;
//import com.givenera.model.ApprImg;
//import com.givenera.model.ApprImgExample;
//import com.givenera.model.ApprNews;
//import com.givenera.model.ApprNewsExample;
//import com.givenera.model.ApprNotification;
//import com.givenera.model.ApprUserRel;
//import com.givenera.model.ApprUserRelExample;
//import com.givenera.model.Friend;
//import com.givenera.model.FriendExample;
//import com.givenera.model.UserProp;
//import com.givenera.model.UserPropExample;
//import com.givenera.repository.mapper.ApprConfirmMapper;
//import com.givenera.repository.mapper.ApprImgMapper;
//import com.givenera.repository.mapper.ApprMapper;
//import com.givenera.repository.mapper.ApprNewsMapper;
//import com.givenera.repository.mapper.ApprNotificationMapper;
//import com.givenera.repository.mapper.ApprUserRelMapper;
//import com.givenera.repository.mapper.FriendMapper;
//import com.givenera.repository.mapper.UserPropMapper;
//import com.givenera.rpc.api.exception.BussinessException;
//import com.givenera.rpc.manager.IAppreciationManager;
//
//@Component
//public class AppreciationHelper {
//	private final Logger logger = LoggerFactory.getLogger(getClass());
//
//	@Autowired
//	private static ApprMapper apprMapper;
//
//	@Autowired
//	private static ApprNewsMapper apprNewsMapper;
//
//	@Autowired
//	private static ApprUserRelMapper apprUserRelMapper;
//
//
//	@Autowired
//	private static ApprConfirmMapper apprConfirmMapper;
//
//	// static 恐怕注入不了
//	@Autowired
//	private static UserPropMapper userPropMapper;
//
//	@Autowired
//	private static ApprImgMapper apprImgMapper;
//
//	@Autowired
//	private static FriendMapper friendMapper;
//
//	/**
//	 * 判断是否是好友关系
//	 * @param userid 当前用户id
//	 * @param fuserid  传递好友id，不确定是否合法
//	 * @return
//	 */
//	public static boolean isFriend(Long userid, Long fuserid) {
//
//		boolean result = false;
//
//		try {
//
//			FriendExample friendExample = new FriendExample();
//			FriendExample.Criteria friendc1 = friendExample.createCriteria();
//			friendc1.andFriendIdEqualTo( fuserid );
//			friendc1.andUserIdEqualTo( userid );
//
//			Friend Friend = friendMapper.selectOneByExample(friendExample);
//
//			if( Friend == null ) {
//				result = false;
//			}else {
//				result = true;
//			}
//
//		}catch(Exception e) {
//			e.printStackTrace();
//
//		}
//
//		return result;
//	}
//
//
//	public static String getImageIds(Long apprid) {
//
//
//		ApprImgExample apprImgExample = new ApprImgExample();
//	    ApprImgExample.Criteria apprImgc1 = apprImgExample.createCriteria();
//	    apprImgc1.andTypeEqualTo(  (short) 1 );
//	    apprImgc1.andApprIdEqualTo( apprid );
//
//	    List<ApprImg> apprImgs = apprImgMapper.selectByExample(apprImgExample);
//	    String imageids = "";
//	    if( apprImgs != null ) {
//	    	for( int i = 0; i < apprImgs.size(); i++) {
//
//	    		if( (i + 1) < apprImgs.size()) {
//
//	    			imageids += apprImgs.get(i).getId() + ",";
//	    		}else {
//
//	    			imageids += apprImgs.get(i).getId();
//	    		}
//
//	    	}
//
//	    }
//
//		return imageids;
//	}
//
//
//	public static String getVidioIds(Long apprid) {
//
//
//		ApprImgExample apprImgExample2 = new ApprImgExample();
//	    ApprImgExample.Criteria apprImgc2 = apprImgExample2.createCriteria();
//	    apprImgc2.andTypeEqualTo(  (short) 2 );
//	    apprImgc2.andApprIdEqualTo( apprid );
//
//	    ApprImg apprvidios = apprImgMapper.selectOneByExample(apprImgExample2);
//
//		return apprvidios.getId() + "";
//	}
//
//	/*
//	 * long类型时间转字符串类型
//	 */
//	public static String getTime(Long time) {
//
//
//		SimpleDateFormat format0 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//	    String timeStr = format0.format( time );//这个就是把时间戳经过处理得到期望格式的时间
//	    return timeStr;
//	}
//	/*
//	 *
//	 */
//	public static Long getLongTime (String timestr){
//
//		  Calendar calendar = Calendar.getInstance();
//		  try {
//			calendar.setTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS").parse(timestr));
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		  return calendar.getTimeInMillis();
//	}
//
//	/*
//	 * 判断用户是否跟帖子保持一致
//	 */
//	public static boolean isBelong(Long userid, Long apprId) {
//
//		boolean result = false;
//
//
//		try {
//
//			ApprConfirmExample apprConfirmExample = new ApprConfirmExample();
//			ApprConfirmExample.Criteria apprConfirmc1 = apprConfirmExample.createCriteria();
//			apprConfirmc1.andApprIdEqualTo(apprId);
//			apprConfirmc1.andUserIdEqualTo( userid );
//
//			ApprConfirm apprConfirm = apprConfirmMapper.selectOneByExample(apprConfirmExample);
//
//			if( apprConfirm == null ) {
//				result = false;
//			}else {
//				result = true;
//			}
//
//		}catch(Exception e) {
//			e.printStackTrace();
//
//		}
//
//		return result;
//	}
//
//
//	/*
//	 * 判断用户是否跟帖子保持一致
//	 */
//	public static boolean isOwn(Long userid, Long apprId) {
//
//		boolean result = false;
//
//
//		try {
//
//			ApprConfirmExample apprConfirmExample = new ApprConfirmExample();
//			ApprConfirmExample.Criteria apprConfirmc1 = apprConfirmExample.createCriteria();
//			apprConfirmc1.andApprIdEqualTo(apprId);
//			apprConfirmc1.andUserIdEqualTo( userid );
//			apprConfirmc1.andRoleEqualTo( (short) 2 );
//
//			ApprConfirm apprConfirm = apprConfirmMapper.selectOneByExample(apprConfirmExample);
//
//			if( apprConfirm == null ) {
//				result = false;
//			}else {
//				result = true;
//			}
//
//		}catch(Exception e) {
//			e.printStackTrace();
//
//		}
//
//		return result;
//	}
//
//	public static String getEmailByUserId(Long userId) {
//
//		String email = "";
//
//		UserProp userProp = userPropMapper.selectByPrimaryKey(userId);
//
//		if( userProp!= null ) {
//
//			email = userProp.getEmail();
//		}
//
//		return email;
//	}
//
//	public static String getNameByUserId(Long userId) {
//
//		String Name = "";
//
//		UserProp userProp = userPropMapper.selectByPrimaryKey(userId);
//
//		if( userProp!= null ) {
//
//			Name = userProp.getFirstName() + " " + userProp.getLastName();
//		}
//
//		return Name;
//	}
//
//
//	/*
//	 * 根据userid获取头像地址
//	 */
//	public static String getHearderImageByUserId(Long userId) {
//
//		String HearderImage = "";
//
//		UserProp userProp = userPropMapper.selectByPrimaryKey(userId);
//
//		if( userProp!= null ) {
//
//			HearderImage = userProp.getHeaderImg();
//		}
//
//		return HearderImage;
//	}
//
//
//}
