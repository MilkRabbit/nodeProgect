/**
 * 群与相册关联表Schema
 * 群中新建一个群相册,则在此表中添加一行数据
 * 个人相册与群产生联动,则也在词表添加一行数据
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FlockAlbumSchema = new mongoose.Schema({
	openGId:String,                                 //群的openId
	albumId:String,                                 //相册objectId
	createTime:Number,                              //关联时间
});

FlockAlbumSchema.index({openGId : 1, createTime: -1});

mongoose.model('FlockAlbum', FlockAlbumSchema);