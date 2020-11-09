package utils

import (
	"bytes"
	"encoding/binary"
)

//int64->[]byte
func Int64ToByte(num int64) ([]byte, error) {
	buff := new(bytes.Buffer) //通过new实例化一个缓冲区
	err := binary.Write(buff, binary.BigEndian, num)
	if err != nil {
		return nil, err
	}
	// 从缓冲区读取数据
	return buff.Bytes(), nil
}


 //将字符串转换为[]byte

func StringToBytes(data string) []byte {
	return []byte(data)
}
