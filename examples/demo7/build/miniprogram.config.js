// 配置说明：https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/quickstart.html#%E7%BC%96%E5%86%99-webpack-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE
module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		page1: ['/a'],
		page2: ['/b'],
		page3: ['/c'],
		page4: ['/d/:id'],
	},	
	redirect: {		
		notFound: 'page1',		
		accessDenied: 'page1',
	},
	generate: {
		subpackages: {
			package1: ['page2'],
			package2: ['page3', 'page4'],
		},
		preloadRule: {
			page2: {
				network: 'all',
				packages: ['package2'],
			},
		},
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},	
	global: {},	
	pages: {},	
	optimization: {
		domSubTreeLevel: 5,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
	projectConfig: {
		appid: '',
        projectname: 'kbone-demo7',
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}