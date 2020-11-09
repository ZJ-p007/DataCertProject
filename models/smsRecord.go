package models

import "DataCertProject/db_mysql"

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
	rp,err :=db_mysql.Db.Exec("insert into sms_record (biz_id,phone,code,status,message,timestamp) valus (?,?,?,?,?,?)",
		s.BizId,s.Phone,s.Code,s.Message,s.TimeStamp)
    if err != nil{
    	return -1,err
	}
	return rp.RowsAffected()
}