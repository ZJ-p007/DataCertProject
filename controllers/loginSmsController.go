package controllers

import (
	"DataCertProject/models"
	"github.com/astaxie/beego"
	"time"
)

type LoginSmsControllers struct {
	beego.Controller
}

//发起短信验证码的请求
func (l *LoginSmsControllers) Get() {
	l.TplName = "login_sms.html"
}

//短信验证码登录
func (l * LoginSmsControllers) Post() {
   var smsLogin models.SmsLogin
   err :=l.ParseForm(smsLogin)
   if err != nil{
   	l.Ctx.WriteString("抱歉验证码登录数据解析失败")
   }

   //先拿手机号查询user表，看用户是否已注册
   user := models.User{
   	Phone:    smsLogin.Phone,
   }
   _,err = user.QueryUserByPhone()
   if err != nil{
	   l.Ctx.WriteString("该手机号未注册，请注册")
	   return
   }
   /*if u.Phone == ""{//说明用户表中不存在

	   return
   }*/





   //拿用户提交的登录信息到数据库中查询
   sms,err :=models.QuerySmsRecord(smsLogin.BizId,smsLogin.Phone,smsLogin.Code)
   if err != nil{
   	l.Ctx.WriteString("验证码登录遇到错误")
   }
   if sms.BizId == ""{
   	l.Ctx.WriteString("手机号或者验证码错误,请重试")
   }
    now:= time.Now().Unix()
    if (now - sms.TimeStamp) > 300000 {
    	l.Ctx.WriteString("验证码失效，请重新获取")
		return
	}
	//跳转主界面
	l.Data["Phone"] = smsLogin.Phone
	l.TplName = "home.html"
}
