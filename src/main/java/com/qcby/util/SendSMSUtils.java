package com.qcby.util;

import com.alibaba.fastjson.JSONException;
import com.github.qcloudsms.SmsMultiSender;
import com.github.qcloudsms.SmsMultiSenderResult;
import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;

import java.io.IOException;
import java.util.Random;

/**
 * @ClassNameSendSMSUtils
 * @Description 短信验证工具类
 * @Author myr
 * @Date 2019/11/8 11:47
 * @Version 1.0
 **/
public class SendSMSUtils {

    // 短信应用 SDK AppID
    private static int appid = 1400246516; // SDK AppID 以1400开头
    // 短信应用 SDK AppKey
    private static String appkey = "3be634f671784790692cca49b4b0956b";
    // 需要发送短信的手机号码
    String[] phoneNumbers = {"18833280565", "15232253962", "17333796333"};
    // 短信模板 ID，需要在短信应用中申请
    private static int templateId = 404944; // NOTE: 这里的模板 ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
    // 签名
    private static String smsSign = "腾讯云"; // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请

    /**
     * 单发短信
     * 发送验证码（一个参数）
     * @param code 手机区号前缀
     * @param phoneNumbers 手机号参数
     * @return 成功返回验证码，失败返回失败信息
     */
    public static String sendSMS(String code,String[] phoneNumbers) {
        String str = "";
        //随机生成6位的验证码
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            str += random.nextInt(10);
        }
        try {
            String[] params = {str};
            SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
            SmsSingleSenderResult result = ssender.sendWithParam(code, phoneNumbers[0],
                    404940, params, smsSign, "", "");
            System.out.println(result);
            if(result.result == 0){
                return str;
            }
        } catch (HTTPException e) {
            // HTTP 响应码错误
            e.printStackTrace();
        } catch (JSONException e) {
            // JSON 解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络 IO 错误
            e.printStackTrace();
        }
        return "发送验证码失败";
    }

    /**
     *单发短信验证
     * 发送注册邀请（三个参数）
     * @param code 区号
     * @param phoneNumber 手机号
     * @return 成功失败
     */
    public static String sendMultiSMS(String code,String phoneNumber) {
        String str = "";
        //随机生成6位的验证码
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            str += random.nextInt(10);
        }
        try {
            String[] params = {"邀请您完成注册，请点击下方选择同意或者拒绝",
                    "接受邀请：http://101.37.24.226:8080/ssm/views/confirm.html?phone="+phoneNumber+"&code=1",
                    "拒绝邀请：http://101.37.24.226:8080/ssm/views/confirm.html?phone="+phoneNumber+"&code=0"};
            SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
            SmsSingleSenderResult result = ssender.sendWithParam(code, phoneNumber,
                    templateId, params, smsSign, "", "");
            System.out.println(result);
            if(result.result == 0){
                return str;
            }
        } catch (HTTPException e) {
            // HTTP 响应码错误
            e.printStackTrace();
        } catch (JSONException e) {
            // JSON 解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络 IO 错误
            e.printStackTrace();
        }
        return "发送验证码失败";
    }

    /**
     * 测试 test
     * @param args
     */
    public static void main(String[] args) {
//        String[] phoneNum = {"18833280565"};
//        String result = sendSMS("86",phoneNum);
//        System.out.println(result);

        System.out.println(sendMultiSMS("86", "18833280565"));
    }
}
