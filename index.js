const getParameter = require('get-parameter')();
const deviceDetect = require('device-detect')();
const url = getParameter.url;
const exclude = ['url', 'ios', 'android', 'windows', 'mac', 'linux'];

var newUrl = '';
if(url !== undefined){
  
  // get all query parameters from URL to pass along with redirect
  Object.keys(getParameter).forEach(function(key) {
    const num = 0;
    // don't include URL settings in query
    if(exclude.indexOf(key) < 0){
      num++;
      // build up parameters except for URL
      newUrl += '&' + key + '=' + getParameter[key];
    }
  });

  // use device specific URLs passed
  var newPath;
  switch (deviceDetect.device) {
    case 'iPhone':
      newPath = getParameter['ios'];
      break;
    case 'iPad':
      newPath = getParameter['ios'];
      break;
    case 'iPod':
      newPath = getParameter['ios'];
      break;
    case 'Android':
      newPath = getParameter['android'];
      break;
    case 'Macintosh':
      newPath = getParameter['mac'];
      break;
    case 'Windows':
      newPath = getParameter['windows'];
      break;
    case 'Linux':
      newPath = getParameter['linux'];
      break;
    default:
      newPath = url;
      break;
  }

  // use default URL if a device parameter isn't set
  if(newPath === undefined){
    newPath = url;
  }

  // create redirect URL
  const redirect = 'http://' + newPath + '?' + newUrl.substring(1);

  // redirect
  window.location = redirect;
}
