/*
 * express-cf-geoip
 * https://github.com/rummik/express-cf-geoip
 *
 * Copyright (c) 2012 rummik
 * Licensed under the MPL license.
 */

exports.middleware = function(country) {
	country = country || 'us';
	return function(req, res, next) {
		req.geoip = exports.fromCountry(req.header('cf-ipcountry') || country);
		next();
	};
};

exports.fromCountry = function(country) {
	var continent;
	country = country || 'us';

	Object.keys(exports.continents).forEach(function(c) {
		if (exports.continents[c].indexOf(country) !== -1)
			continent = c;
	});

	return {
		continent: continent,
		country:   country
	};
};

exports.continents = {
	'af':['ao','bf','bi','bj','bw','cd','cf','cg','ci','cm','cv','dj','dz','eg','eh','er','et','ga','gh','gm','gn','gq','gw','ke','km','lr','ls','ly','ma','mg','ml','mr','mu','mw','mz','na','ne','ng','re','rw','sc','sd','sh','sl','sn','so','ss','st','sz','td','tg','tn','tz','ug','yt','za','zm','zw'],
	'an':['aq','bv','gs','hm','tf'],
	'as':['ae','af','am','az','bd','bh','bn','bt','cc','cn','cx','cy','ge','hk','id','il','in','io','iq','ir','jo','jp','kg','kh','kp','kr','kw','kz','la','lb','lk','mm','mn','mo','mv','my','np','om','ph','pk','ps','qa','ru','sa','sg','sy','th','tj','tl','tm','tr','tw','uz','vn','xd','xe','xs','ye'],
	'eu':['ad','al','am','at','ax','az','ba','be','bg','by','ch','cy','cz','de','dk','ee','es','fi','fo','fr','gb','ge','gg','gi','gr','hr','hu','ie','im','is','it','je','kz','li','lt','lu','lv','mc','md','me','mk','mt','nl','no','pl','pt','ro','rs','ru','se','si','sj','sk','sm','tr','ua','va'],
	'na':['ag','ai','an','aw','bb','bl','bm','bq','bs','bz','ca','cr','cu','cw','dm','do','gd','gl','gp','gt','hn','ht','jm','kn','ky','lc','mf','mq','ms','mx','ni','pa','pm','pr','sv','sx','tc','tt','um','us','vc','vg','vi'],
	'oc':['as','au','ck','fj','fm','gu','ki','mh','mp','nc','nf','nr','nu','nz','pf','pg','pn','pw','sb','tk','to','tv','um','vu','wf','ws','xx'],
	'sa':['ar','bo','br','cl','co','ec','fk','gf','gy','pe','py','sr','uy','ve']
};