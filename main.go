package main

import (
	"DataCertProject/blockchain"
	"DataCertProject/db_mysql"
	_ "DataCertProject/routers"
	"github.com/astaxie/beego"
)
//https://github.com/ZJ-p007/ElectronicDataAuthentication.git
func main() {

    blockchain.NewBlockChain()

	//连接数据库
	db_mysql.Connect()

	//设置静态资源文件映射
	beego.SetStaticPath("/js", "./static/js")
	beego.SetStaticPath("/css", "./static/css")
	beego.SetStaticPath("/img", "./static/img")

	beego.Run() //阻塞g
}
//45.58 114 下午
//21.24 114晚上