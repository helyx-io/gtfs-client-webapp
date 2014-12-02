////////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////////

var appName = 'helyx.io';

module.exports = {
	hostname: process.env.APP_HOSTNAME || 'demo.gtfs.helyx.org',
	port: process.env.APP_HTTP_PORT || 9000,
	appname: appName,
	logger: {
		threshold: process.env.LOGGER_THRESHOLD_LEVEL || 'debug',
		console: {
			level: process.env.LOGGER_CONSOLE_LEVEL || 'debug'
		},
		file: {
			level: process.env.LOGGER_FILE_LEVEL || 'debug',
			directory: process.env.LOGGER_FILE_DIRECTORY || 'logs',
			filename: process.env.LOGGER_FILE_FILENAME || ("" + appName + "/logs.log")
		}
	},
	monitoring: {
		newrelic: {
			apiKey: process.env.NEW_RELIC_API_KEY,
			appName: process.env.NEW_RELIC_APP_NAME || 'gtfs-webapp'
		}
	}
};