/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.24
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
    instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
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

  describe('JsonV1ManagedFieldsEntry', function() {
    it('should create an instance of JsonV1ManagedFieldsEntry', function() {
      // uncomment below and update the code to test JsonV1ManagedFieldsEntry
      //var instane = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be.a(MadanaApiclient.JsonV1ManagedFieldsEntry);
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

    it('should have the property fieldsType (base name: "fieldsType")', function() {
      // uncomment below and update the code to test the property fieldsType
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

    it('should have the property apiVersion (base name: "apiVersion")', function() {
      // uncomment below and update the code to test the property apiVersion
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

    it('should have the property fieldsV1 (base name: "fieldsV1")', function() {
      // uncomment below and update the code to test the property fieldsV1
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new MadanaApiclient.JsonV1ManagedFieldsEntry();
      //expect(instance).to.be();
    });

  });

}));