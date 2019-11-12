package com.qcby.util;

/**
 * @ClassNameEmailTest
 * @Description 测试
 * @Author myr
 * @Date 2019/11/9 11:56
 * @Version 1.0
 **/
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
public class EmailTest {

  private static final String  strText = "<body><p>请及时确认以下邀请 http://127.0.0.1/ssm/views/emailTemplet.html</p></body>";

    public static boolean send_qqmail(String strMail, String strTitle, String strText){
              boolean bret = false;
                try
                {
                  final Properties props = new Properties();
                  props.put("mail.smtp.auth", "true");
                  props.put("mail.smtp.host", "smtp.qq.com");
                  //你自己的邮箱
                  props.put("mail.user", "244642897@qq.com");
                  //你开启pop3/smtp时的验证码
                  props.put("mail.password", "mldceshvbnirbhhh");
                  props.put("mail.smtp.port", "25");
                  props.put("mail.smtp.starttls.enable", "true");
                  Authenticator authenticator = new Authenticator() {
                      protected PasswordAuthentication getPasswordAuthentication() {
                          String userName = props.getProperty("mail.user");
                          String password = props.getProperty("mail.password");
                          return new PasswordAuthentication(userName, password);
                    }
                  };
                  // 使用环境属性和授权信息，创建邮件会话
                  Session mailSession = Session.getInstance(props, authenticator);
                  // 创建邮件消息
                  MimeMessage message = new MimeMessage(mailSession);
                  // 设置发件人
                  String username = props.getProperty("mail.user");
                  InternetAddress form = new InternetAddress(username);
                  message.setFrom(form);
                  // 设置收件人
                  InternetAddress to = new InternetAddress(strMail);
                  message.setRecipient(RecipientType.TO, to);

                  // 设置邮件标题
                  message.setSubject(strTitle);

                  // 设置邮件的内容体
                  message.setContent(strText, "text/html;charset=UTF-8");

                  // 发送邮件
                  Transport.send(message);
                  bret = true;
                }
                catch (AddressException e) {
                  e.printStackTrace();
                }
                catch (MessagingException e) {
                  e.printStackTrace();
                }
                catch (Exception e){
                  e.printStackTrace();
                }
                return bret;
  }

    private static boolean send_163mail(String strMail, String strTitle, String strText){
      boolean bret = false;
      try
      {
        final Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.host", "smtp.163.com");

        // 发件人的账号
        props.put("mail.user", "123456@163.com");
        //发件人的密码
        props.put("mail.password", "自己写密码");

        // 构建授权信息，用于进行SMTP进行身份验证
        Authenticator authenticator = new Authenticator() {
                          @Override
                          protected PasswordAuthentication getPasswordAuthentication() {
            // 用户名、密码
            String userName = props.getProperty("mail.user");
            String password = props.getProperty("mail.password");
            return new PasswordAuthentication(userName, password);
          }
                        };
        // 使用环境属性和授权信息，创建邮件会话
        Session mailSession = Session.getInstance(props, authenticator);
        // 创建邮件消息
        MimeMessage message = new MimeMessage(mailSession);
        // 设置发件人
        String username = props.getProperty("mail.user");
        InternetAddress form = new InternetAddress(username);
        message.setFrom(form);

        // 设置收件人
        InternetAddress to = new InternetAddress(strMail);
        message.setRecipient(RecipientType.TO, to);

        // 设置邮件标题
        message.setSubject(strTitle);

        // 设置邮件的内容体
        message.setContent(strText, "text/html;charset=UTF-8");
        // 发送邮件
        Transport.send(message);
        bret = true;
      }
      catch (AddressException e) {
        e.printStackTrace();
      }
      catch (MessagingException e) {
        e.printStackTrace();
      }
      catch (Exception e){
        e.printStackTrace();
      }
      return bret;
  }
  public static void main(String[] args) {

    if (send_qqmail("244642897@qq.com", "邀请您完成阿里核心架构部的员工注册", strText ))
      System.out.println("QQ邮件发送成功");

    /*if (send_163mail("1234567@163.com", "测试网易邮箱发送", "<body><p>你们好吗</p></body>"))
      System.out.println("网易邮件发送成功");*/
  }
}
