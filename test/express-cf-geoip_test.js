var geoip = require('../lib/express-cf-geoip.js');

exports['fromCountry'] = {
	'no args': function(test) {
		test.expect(1);
		test.deepEqual(geoip.fromCountry(), { country: 'us', continent: 'na' }, 'should return US info.');
		test.done();
	},

	'country uk': function(test) {
		test.expect(1);
		test.deepEqual(geoip.fromCountry('gb'), { country: 'gb', continent: 'eu' }, 'should return UK info.');
		test.done();
	}
};