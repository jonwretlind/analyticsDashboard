// REQUIRE LOADER
 console.log('Load Dependencies...');
 console.log("View Name: " + view );

	require.config({
		paths: {
			jquery: 'js/lib/jquery',
			envVars: 'js/app/env-variables',
			utils: 'js/app/utils',
			dashboard: 'js/app/dashboard',
			less: 'js/lib/less',
			view: 'view_js/' + view,
      socketio: '/socket.io/socket.io',
      appio: '/js/app/app-io',
      chart: 'js/'+ view + '/lib/chart.bundle.min',
      GAnalytics: 'js/'+ view + '/GAnalytics.chart',

		},
		shim: {
			'envVars': {
				deps: ['jquery', 'utils']
			},
			'dashboard': {
				deps: ['jquery', 'utils', 'envVars']
			},
			'view': {
				deps: ['jquery', 'dashboard', 'envVars']
			},
      'socketio': {
        exports: 'Io'
      },
      'appio': {
        deps: ['jquery', 'dashboard', 'envVars', 'socketio']
      },
			'footerCode': {
				deps: ['jquery', 'dashboard', 'envVars']
			},
      'chart' : {
        deps: ['jquery', 'envVars']
      },
      'GAnalytics' : {
        deps: ['jquery', 'envVars', 'chart']
      },
		}
	});

	require(["jquery", "envVars", "utils", "dashboard", "less", "socketio", "appio", "view", "chart", "GAnalytics"]);
