/**
 * 用户财务记录表.
 * 注:用户购买会员记录,不计入finance表
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FinanceSchema = new mongoose.Schema({
	openId:String,                              //用户openId
	nickName:String,                            //用户昵称
	avatarUrl:String,                           //用户头像
	money:Number,                               //金额，单位（元）
	type:Number,                                //类型：0入账，1提现
	content:{
		viewerOpenId:String,                    //查看者openId
		viewerNickName:String,                  //查看者昵称
		albumId:String,                         //相册Id
		albumName:String,                         //相册名称
	},                                          //内容，仅在type为0时生效。
	createTime:Number,                          //时间
});

FinanceSchema.index({openId : 1, createTime: -1});

mongoose.model('Finance', FinanceSchema);