/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.54
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
    instance = new MadanaApiclient.UserServiceApi();
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

  describe('UserServiceApi', function() {
    describe('cancelSubscription', function() {
      it('should call cancelSubscription successfully', function(done) {
        //uncomment below and update the code to test cancelSubscription
        //instance.cancelSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createObject', function() {
      it('should call createObject successfully', function(done) {
        //uncomment below and update the code to test createObject
        //instance.createObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteObject', function() {
      it('should call deleteObject successfully', function(done) {
        //uncomment below and update the code to test deleteObject
        //instance.deleteObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteObject_0', function() {
      it('should call deleteObject_0 successfully', function(done) {
        //uncomment below and update the code to test deleteObject_0
        //instance.deleteObject_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvatars', function() {
      it('should call getAvatars successfully', function(done) {
        //uncomment below and update the code to test getAvatars
        //instance.getAvatars(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCertificates', function() {
      it('should call getCertificates successfully', function(done) {
        //uncomment below and update the code to test getCertificates
        //instance.getCertificates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnclaveHistory', function() {
      it('should call getEnclaveHistory successfully', function(done) {
        //uncomment below and update the code to test getEnclaveHistory
        //instance.getEnclaveHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObject2', function() {
      it('should call getObject2 successfully', function(done) {
        //uncomment below and update the code to test getObject2
        //instance.getObject2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAvatar', function() {
      it('should call setAvatar successfully', function(done) {
        //uncomment below and update the code to test setAvatar
        //instance.setAvatar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setSettings', function() {
      it('should call setSettings successfully', function(done) {
        //uncomment below and update the code to test setSettings
        //instance.setSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateObject', function() {
      it('should call updateObject successfully', function(done) {
        //uncomment below and update the code to test updateObject
        //instance.updateObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
