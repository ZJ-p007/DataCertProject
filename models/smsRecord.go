package models

import (
	"DataCertProject/db_mysql"
)

type SmsRecord struct {
	BizId string
	Phone string
	Code string
	Status string
	Message string
	TimeStamp int64
}

//向数据库插入验证码记录
func (s * SmsRecord) SaveRecord()(int64,error) {
	rp,err :=db_mysql.Db.Exec("insert into sms_record (biz_id,phone,code,status,message,timestamp) values (?,?,?,?,?,?)",
		s.BizId,s.Phone,s.Code,s.Status,s.Message,s.TimeStamp)
    if err != nil{
    	return -1,err
	}
	return rp.RowsAffected()
}

//根据用户提交的手机号和验证码查询验证码是否正确
func QuerySmsRecord(bizId string,phone string, code string) (*SmsRecord,error)  {
	var sms SmsRecord
	row :=db_mysql.Db.QueryRow("select biz_id,timestamp from sms_record where biz_id = ? and phone = ? and code = ?",bizId,phone,code)
	err :=row.Scan(&sms.BizId,&sms.TimeStamp)
	if err != nil{
		return nil,err
	}
	return &sms,nil
}