package utils

import (
	"encoding/json"
	"fmt"
	"github.com/aliyun/alibaba-cloud-sdk-go/services/dysmsapi"
	"github.com/astaxie/beego"
	"math/rand"
	"strings"
	"time"
)

type SmsCode struct {
	Code string `json:"code"`
}

type SmsResult struct {
	BizId     string
	Code      string
	Message   string
	RequestId string
}

const SMS_TLP_REGISTER  = "SMS_205393604"//注册业务短信模板
const SMS_TLP_LOGIN  = "SMS_205398654"//用户登录模板
const SMS_TLP_KYC  = ""//实名认证模板

//发送短信功能
func SendSms(phone string, code string, tempLateType string) (*SmsResult, error) {
	config := beego.AppConfig
	accessKey := config.String("sms_access_key")
	accessSecret := config.String("sms_access_secret")
	client, err := dysmsapi.NewClientWithAccessKey("cn-hangzhou", accessKey, accessSecret)
	if err != nil {
		return nil, err
	}

	//创建发送短息
	request := dysmsapi.CreateSendSmsRequest()
	request.PhoneNumbers = phone        //指定发送手机号
	request.SignName = "线上餐厅"           //签名信息
	request.TemplateCode = tempLateType //指定短信模板
	//json格式
	smsCode := SmsCode{
		Code: code,
	}
	smsbytes, _ := json.Marshal(smsCode)
	request.TemplateParam = string(smsbytes) //指定要发送的验证码

	response, err := client.SendSms(request)
	if err != nil {
		return nil, err
	}
	//response.BizId 商业 业务
	smsResult := &SmsResult{
		BizId:     response.BizId,
		Code:      response.Code,
		Message:   response.Message,
		RequestId: response.RequestId,
	}
	return smsResult, nil
}

//生成一个随机验证码
func GenRandCode(width int) string {
	num := [10]byte{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	r := len(num)
	rand.Seed(time.Now().UnixNano())

	var nb strings.Builder
	for i := 0; i < width; i++ {
		fmt.Fprintf(&nb, "%d", num[rand.Intn(r)])
	}
	return nb.String()
}
