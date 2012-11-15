# express-cf-geoip

Express CloudFlare GEOIP middleware

## Getting Started
Install the module with: `npm install express-cf-geoip`

```javascript
var geoip = require('express-cf-geoip');
// specify the default country
app.use(geoip.middleware('us'));
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2012 rummik
Licensed under the MPL license.
