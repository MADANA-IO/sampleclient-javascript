/**
 * madana-api
 * <h1>API Quickstart Guide</h1>        <p>This documentation contains a Quickstart Guide, a few <a href=\"downloads.html\">sample clients</a>  for download and information about the available  <a href=\"resources.html\">endpoints</a>  and  <a href=\"data.html\">DataTypes</a>  </p>     <p>The <a target=\"_blank\" href=\"http://madana-explorer-staging.eu-central-1.elasticbeanstalk.com/login\">  MADANA Explorer</a> can be used to verify the interactions with the API</p>           <p>Internal use only. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a></p>         <br> <br>
 *
 * The version of the OpenAPI document: 0.4.12
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
    factory(root.expect, root.MadanaSampleclientJavascript);
  }
}(this, function(expect, MadanaSampleclientJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MadanaSampleclientJavascript.JsonNodeInfo();
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

  describe('JsonNodeInfo', function() {
    it('should create an instance of JsonNodeInfo', function() {
      // uncomment below and update the code to test JsonNodeInfo
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be.a(MadanaSampleclientJavascript.JsonNodeInfo);
    });

    it('should have the property hardwareBaseboard (base name: "hardwareBaseboard")', function() {
      // uncomment below and update the code to test the property hardwareBaseboard
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "publicKey")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property processors (base name: "processors")', function() {
      // uncomment below and update the code to test the property processors
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuLogicalCount (base name: "cpuLogicalCount")', function() {
      // uncomment below and update the code to test the property cpuLogicalCount
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property connectionURL (base name: "connectionURL")', function() {
      // uncomment below and update the code to test the property connectionURL
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystem (base name: "operatingSystem")', function() {
      // uncomment below and update the code to test the property operatingSystem
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuPhysicalCores (base name: "cpuPhysicalCores")', function() {
      // uncomment below and update the code to test the property cpuPhysicalCores
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystemUptime (base name: "operatingSystemUptime")', function() {
      // uncomment below and update the code to test the property operatingSystemUptime
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuModel (base name: "cpuModel")', function() {
      // uncomment below and update the code to test the property cpuModel
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuFamily (base name: "cpuFamily")', function() {
      // uncomment below and update the code to test the property cpuFamily
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuFrequency (base name: "cpuFrequency")', function() {
      // uncomment below and update the code to test the property cpuFrequency
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property hardwareFirmware (base name: "hardwareFirmware")', function() {
      // uncomment below and update the code to test the property hardwareFirmware
      //var instane = new MadanaSampleclientJavascript.JsonNodeInfo();
      //expect(instance).to.be();
    });

  });

}));
