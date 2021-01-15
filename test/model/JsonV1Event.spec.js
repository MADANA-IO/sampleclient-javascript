/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.31
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
    instance = new MadanaApiclient.JsonV1Event();
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

  describe('JsonV1Event', function() {
    it('should create an instance of JsonV1Event', function() {
      // uncomment below and update the code to test JsonV1Event
      //var instane = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be.a(MadanaApiclient.JsonV1Event);
    });

    it('should have the property related (base name: "related")', function() {
      // uncomment below and update the code to test the property related
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property reportingComponent (base name: "reportingComponent")', function() {
      // uncomment below and update the code to test the property reportingComponent
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property eventTime (base name: "eventTime")', function() {
      // uncomment below and update the code to test the property eventTime
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property reportingInstance (base name: "reportingInstance")', function() {
      // uncomment below and update the code to test the property reportingInstance
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property lastTimestamp (base name: "lastTimestamp")', function() {
      // uncomment below and update the code to test the property lastTimestamp
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property kind (base name: "kind")', function() {
      // uncomment below and update the code to test the property kind
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property series (base name: "series")', function() {
      // uncomment below and update the code to test the property series
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property firstTimestamp (base name: "firstTimestamp")', function() {
      // uncomment below and update the code to test the property firstTimestamp
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

    it('should have the property involvedObject (base name: "involvedObject")', function() {
      // uncomment below and update the code to test the property involvedObject
      //var instance = new MadanaApiclient.JsonV1Event();
      //expect(instance).to.be();
    });

  });

}));
