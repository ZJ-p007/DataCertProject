package routers

import (
	"DataCertProject/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	//用户注册接口
	beego.Router("/register", &controllers.RegisterController{})

	//用户登录的接口
	beego.Router("/login", &controllers.LoginController{})

	//请求直接登录的页面
	beego.Router("/login.html", &controllers.LoginController{})

	//短信验证码
	beego.Router("/login_sms.html",&controllers.LoginSmsControllers{})

	//发送验证码
	beego.Router("/sendsms",&controllers.SendSmsControllers{})

	//用户上传文件的功能
	beego.Router("/upload", &controllers.UploadFileController{})

	//查看认证数据证书页面
	beego.Router("/cert_detail.html", &controllers.CertDetailController{})

	//用户实名认证请求
	beego.Router("/user_kyc", &controllers.UserKycController{})

	//手机号验证码登录接口
	beego.Router("/loginSms",&controllers.LoginSmsControllers{})
}
