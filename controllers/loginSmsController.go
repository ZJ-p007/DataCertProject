package controllers

import "github.com/astaxie/beego"

type LoginSmsControllers struct {
	beego.Controller
}

//发起短信验证码的请求
func (l *LoginSmsControllers) Get() {
	l.TplName = "login_sms.html"
}

//短信验证码登录
func (l * LoginSmsControllers) Post() {



}
