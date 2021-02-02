/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.46
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
    instance = new MadanaApiclient.JsonV1ObjectMeta();
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

  describe('JsonV1ObjectMeta', function() {
    it('should create an instance of JsonV1ObjectMeta', function() {
      // uncomment below and update the code to test JsonV1ObjectMeta
      //var instane = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be.a(MadanaApiclient.JsonV1ObjectMeta);
    });

    it('should have the property resourceVersion (base name: "resourceVersion")', function() {
      // uncomment below and update the code to test the property resourceVersion
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property generateName (base name: "generateName")', function() {
      // uncomment below and update the code to test the property generateName
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property annotations (base name: "annotations")', function() {
      // uncomment below and update the code to test the property annotations
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property selfLink (base name: "selfLink")', function() {
      // uncomment below and update the code to test the property selfLink
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creationTimestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property managedFields (base name: "managedFields")', function() {
      // uncomment below and update the code to test the property managedFields
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property finalizers (base name: "finalizers")', function() {
      // uncomment below and update the code to test the property finalizers
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property deletionTimestamp (base name: "deletionTimestamp")', function() {
      // uncomment below and update the code to test the property deletionTimestamp
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property deletionGracePeriodSeconds (base name: "deletionGracePeriodSeconds")', function() {
      // uncomment below and update the code to test the property deletionGracePeriodSeconds
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property clusterName (base name: "clusterName")', function() {
      // uncomment below and update the code to test the property clusterName
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property generation (base name: "generation")', function() {
      // uncomment below and update the code to test the property generation
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

    it('should have the property ownerReferences (base name: "ownerReferences")', function() {
      // uncomment below and update the code to test the property ownerReferences
      //var instance = new MadanaApiclient.JsonV1ObjectMeta();
      //expect(instance).to.be();
    });

  });

}));
