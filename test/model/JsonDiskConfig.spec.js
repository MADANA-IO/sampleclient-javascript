/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MadanaApiclient);
  }
}(this, function(expect, MadanaApiclient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MadanaApiclient.JsonDiskConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JsonDiskConfig', function() {
    it('should create an instance of JsonDiskConfig', function() {
      // uncomment below and update the code to test JsonDiskConfig
      //var instane = new MadanaApiclient.JsonDiskConfig();
      //expect(instance).to.be.a(MadanaApiclient.JsonDiskConfig);
    });

    it('should have the property roothashOffset (base name: "roothash_offset")', function() {
      // uncomment below and update the code to test the property roothashOffset
      //var instane = new MadanaApiclient.JsonDiskConfig();
      //expect(instance).to.be();
    });

    it('should have the property readonly (base name: "readonly")', function() {
      // uncomment below and update the code to test the property readonly
      //var instane = new MadanaApiclient.JsonDiskConfig();
      //expect(instance).to.be();
    });

    it('should have the property roothash (base name: "roothash")', function() {
      // uncomment below and update the code to test the property roothash
      //var instane = new MadanaApiclient.JsonDiskConfig();
      //expect(instance).to.be();
    });

    it('should have the property disk (base name: "disk")', function() {
      // uncomment below and update the code to test the property disk
      //var instane = new MadanaApiclient.JsonDiskConfig();
      //expect(instance).to.be();
    });

  });

}));
