(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const getParameter = require('get-parameter')();
const deviceDetect = require('device-detect')();
const url = getParameter.url;
const exclude = ['url', 'ios', 'android', 'windows', 'mac', 'linux'];

var newUrl = '';
if (url !== undefined) {

  // get all query parameters from URL to pass along with redirect
  Object.keys(getParameter).forEach(function (key) {
    const num = 0;
    // don't include URL settings in query
    if (exclude.indexOf(key) < 0) {
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
  if (newPath === undefined) {
    newPath = url;
  }

  // create redirect URL
  const redirect = 'http://' + newPath + '?' + newUrl.substring(1);

  // redirect
  window.location = redirect;
}

},{"device-detect":2,"get-parameter":3}],2:[function(require,module,exports){
module.exports = function (){
  'use strict';
  var ua  = window.navigator.userAgent,
    device,
    browser,
    data ={};

  // get device
  if(ua.match(/(iPhone)/)){
    device = 'iPhone';
  }else if(ua.match(/(iPad)/)){
    device = 'iPad';
  }else if(ua.match(/(iPod)/)){
    device = 'iPod';
  }else if(ua.match(/(BlackBerry|BB10)/)){
    device = 'BlackBerry';
  }else if(ua.match(/(IEMobile)/)){
    device = 'WindowsMobile';
  }else if(ua.match(/(Android)/)){
    device = 'Android';
  }else if(ua.match(/(Macintosh)/)){
    device = 'Macintosh';
  }else if(ua.match(/(Windows)/)){
    device = 'Windows';
  }else if(ua.match(/(Linux)/)){
    device = 'Linux';
  }

  // get browser
  if (ua.indexOf('OPR') > 0 || ua.indexOf('Opera') > 0) {
    browser = 'Opera';
  }else if(ua.indexOf('Chrome') > 0){
    browser = 'Chrome';
  }else if(ua.indexOf('Firefox') > 0){
    browser = 'Firefox';
  }else if(ua.indexOf('Safari') > 0){
    browser = 'Safari';
  }else if(ua.indexOf('MSIE') > 0){
    browser = 'IE';
  }

  // create object
  data = {
    device:  device,
    browser: browser
  };
  return data;
};

},{}],3:[function(require,module,exports){
// getParameter
//
// Use: Returns query string values in JavaScript
//
// var productId = getParameter('id');
//
// Returns: value
// ------------------------------------------------------------

module.exports = function getParameter(name){
  'use strict';
  var queryDict = {};
  var queries = location.search.substr(1).split('&');
  for (var i=0; i<queries.length; i++) {
    queryDict[queries[i].split('=')[0]] = decodeURIComponent(queries[i].split('=')[1]);
  } 

  // if name specified, return that specific get parameter
  if (name) {
    return queryDict.hasOwnProperty(name) ? decodeURIComponent(queryDict[name].replace(/\+/g, ' ')) : '';
  }

  return queryDict;
}

},{}]},{},[1]);
