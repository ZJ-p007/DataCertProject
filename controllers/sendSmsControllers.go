package controllers

import (
	"DataCertProject/models"
	"DataCertProject/utils"
	"fmt"
	"github.com/astaxie/beego"
	"time"
)

type SendSmsControllers struct {
	beego.Controller
}

//用于发送短信验证码
func (s *SendSmsControllers) Post() {
	//fmt.Println("发送验证码")
	var smsLogin models.SmsLogin
	err :=s.ParseForm(&smsLogin)
	if err != nil{
		s.Ctx.WriteString("发送验证码数据解析失败")
		return
	}
	phone := smsLogin.Phone
    code := utils.GenRandCode(6)//6位的随机数
	result,err :=utils.SendSms(phone,code,utils.SMS_TLP_REGISTER)
    if err != nil{
    	s.Ctx.WriteString("发送验证码失败")
		fmt.Println(err.Error())
		return
	}
    //判断
	if len(result.BizId) == 0{
		s.Ctx.WriteString(result.Message)
		return
	}
	//验证码发送成功
   smsRecord := models.SmsRecord{
	   BizId:     result.BizId,
	   Phone:     phone,
	   Code:      code,
	   Status:    result.Code,
	   Message:   result.Message,
	   TimeStamp: time.Now().Unix(),
   }
   _,err =smsRecord.SaveRecord()
   if err != nil{
   	s.Ctx.WriteString("获取验证码失败")
   	fmt.Println(err.Error())
	   return
   }
   //保存成功 bizId返回前端
   s.Data["phone"] = smsLogin.Phone
   s.Data["BizId"] = smsRecord.BizId
   //验证码登录
   s.TplName = "login_sms_second.html"



}