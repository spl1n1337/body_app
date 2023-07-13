export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon-180x180.png","favicon.ico","favicon.png","maskable-icon-512x512.png","pwa-192x192.png","pwa-512x512.png","pwa-64x64.png"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.a7fb717d.js","app":"_app/immutable/entry/app.ab800761.js","imports":["_app/immutable/entry/start.a7fb717d.js","_app/immutable/chunks/index.38a176c8.js","_app/immutable/chunks/singletons.f8b0a89e.js","_app/immutable/chunks/paths.4fa0c16b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.ab800761.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.38a176c8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js')
		],
		routes: [
			{
				id: "/(mainLayout)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/challange",
				pattern: /^\/challange\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/challange/[challengeIndex]",
				pattern: /^\/challange\/([^/]+?)\/?$/,
				params: [{"name":"challengeIndex","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/graphic",
				pattern: /^\/graphic\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/params",
				pattern: /^\/params\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/params/adding",
				pattern: /^\/params\/adding\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/params/my-data",
				pattern: /^\/params\/my-data\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/params/sizes",
				pattern: /^\/params\/sizes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/profile_data",
				pattern: /^\/profile_data\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/profile_nodata",
				pattern: /^\/profile_nodata\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/profile/user-profile-edit",
				pattern: /^\/profile\/user-profile-edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/registration",
				pattern: /^\/registration\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/registration/user_registration",
				pattern: /^\/registration\/user_registration\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/registration/user_registration/params",
				pattern: /^\/registration\/user_registration\/params\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/registration/user_registration/sizes",
				pattern: /^\/registration\/user_registration\/sizes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/targets",
				pattern: /^\/targets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/targets/my-data",
				pattern: /^\/targets\/my-data\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/targets/my-data/params",
				pattern: /^\/targets\/my-data\/params\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/targets/my-data/sizes",
				pattern: /^\/targets\/my-data\/sizes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/targets/new-weight",
				pattern: /^\/targets\/new-weight\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/trainings",
				pattern: /^\/trainings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/trainings/finish",
				pattern: /^\/trainings\/finish\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/trainings/[training]",
				pattern: /^\/trainings\/([^/]+?)\/?$/,
				params: [{"name":"training","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/trainings/[training]/[exercise]",
				pattern: /^\/trainings\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"training","optional":false,"rest":false,"chained":false},{"name":"exercise","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(mainLayout)/user-profile-edit",
				pattern: /^\/user-profile-edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 29 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
