/**
 * Created by 28994 on 2017/5/15.
 */
module.exports = {
	/*基础配置*/
	appName:"群图集",
	siteUrl:'https://quntuji.mengotech.com',
	wxytUrl:'http://quntujixiaochengxu-1251009371.image.myqcloud.com',
	siteRoot:'/data/www/quntuji',
	albumIncomeDivideRate:0.9,                                      //查看图片后,用户的总收入分成比例;

	/*小程序配置*/
	weappConfig: {
		appId:'wxedfda50b98a601f2',
		appSecret:'f53c31861640f7be7619325793862244',
		mchId:'1422441302',                           //微信支付商户号
		wxPayKey:'woaixianmengguoxinxijishu2017ghb',      //微信支付秘钥
		certFile:'/data/wxpay_cert/apiclient_cert.p12',                        //签名文件地址
		prefix:'https://api.weixin.qq.com/cgi-bin/',                            //获取access_token的URL前缀
	},

	/*Redis配置*/
	redisConfig: {
		host: '10.66.239.73',
		port: '6379',
		password: 'crs-5gcg1wgk:cpt110203',
	},

	/*MongoDB数据库配置*/
	mongo:{
		mongoUser:"quntuji",
		mongoPassword:"cpt110203",
		mongoHost:'10.66.235.120',
		mongoPort:27017,
		mongoDbName:'quntuji',
	},
	/*腾讯云万象优图配置*/
	wxytConfig:{
		bucket:'quntujixiaochengxu',
		appId:'1251009371',
		secretId:'AKID8QZZOAHIftyrZ7Ox66xoTyKU3TkpAulb',
		secretKey:'yGk7LqIYdYHo9IG9pMlruxoTwDH9pj7P',
	},
	/*邮箱配置*/
	emailConfig:{
		user:'3372405672@qq.com',
		password:'wrgfubdaqpplchcf',
		receivers:[
			'genghaibin@mengotech.com',
			'hanqing@mengotech.com',
			'songzhu@mengotech.com',
		]
	}
}