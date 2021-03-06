/**
 * 群表Schema
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FlockSchema = new mongoose.Schema({
    flockName:String,                              //群相册名称
    flockPicIndex:Number,                                //群头像序号,默认为0,以此递增.若为-1,则表示自定义头像(未来添加)
    flockPicUrl:String,                                //群头像
    creatorOpenId:String,                           //创建者openid
    creatorName:String,                           //创建者昵称
    creatorHeadPic:String,                          //创建者头像
    followerNum:Number,                             //人气数,默认为0
    photoNum:Number,                                //总照片数
    openGId:String,                                //群Id
    linkAlbumNum:Number,                            //所包含的联动相册数量
    updateTime:Number,                              //更新时间，上传/删除照片后，会更新此字段
    createTime:Number,                     //创建时间
});

FlockSchema.index({creatorOpenId : 1, updateTime: -1});

mongoose.model('Flock', FlockSchema);