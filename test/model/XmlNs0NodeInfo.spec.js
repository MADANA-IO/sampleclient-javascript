/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.49
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
    instance = new MadanaApiclient.XmlNs0NodeInfo();
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

  describe('XmlNs0NodeInfo', function() {
    it('should create an instance of XmlNs0NodeInfo', function() {
      // uncomment below and update the code to test XmlNs0NodeInfo
      //var instane = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be.a(MadanaApiclient.XmlNs0NodeInfo);
    });

    it('should have the property connectionURL (base name: "connectionURL")', function() {
      // uncomment below and update the code to test the property connectionURL
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuFamily (base name: "cpuFamily")', function() {
      // uncomment below and update the code to test the property cpuFamily
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuFrequency (base name: "cpuFrequency")', function() {
      // uncomment below and update the code to test the property cpuFrequency
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuLogicalCount (base name: "cpuLogicalCount")', function() {
      // uncomment below and update the code to test the property cpuLogicalCount
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuModel (base name: "cpuModel")', function() {
      // uncomment below and update the code to test the property cpuModel
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuPhysicalCores (base name: "cpuPhysicalCores")', function() {
      // uncomment below and update the code to test the property cpuPhysicalCores
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property hardwareBaseboard (base name: "hardwareBaseboard")', function() {
      // uncomment below and update the code to test the property hardwareBaseboard
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property hardwareFirmware (base name: "hardwareFirmware")', function() {
      // uncomment below and update the code to test the property hardwareFirmware
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property ipfsInfo (base name: "ipfsInfo")', function() {
      // uncomment below and update the code to test the property ipfsInfo
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property memory (base name: "memory")', function() {
      // uncomment below and update the code to test the property memory
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystem (base name: "operatingSystem")', function() {
      // uncomment below and update the code to test the property operatingSystem
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystemUptime (base name: "operatingSystemUptime")', function() {
      // uncomment below and update the code to test the property operatingSystemUptime
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property processors (base name: "processors")', function() {
      // uncomment below and update the code to test the property processors
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property publicKey (base name: "publicKey")', function() {
      // uncomment below and update the code to test the property publicKey
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property sgxInfo (base name: "sgxInfo")', function() {
      // uncomment below and update the code to test the property sgxInfo
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MadanaApiclient.XmlNs0NodeInfo();
      //expect(instance).to.be();
    });

  });

}));
