/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.44
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
    instance = new MadanaApiclient.RequestServiceApi();
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

  describe('RequestServiceApi', function() {
    describe('addData', function() {
      it('should call addData successfully', function(done) {
        //uncomment below and update the code to test addData
        //instance.addData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelProcessing', function() {
      it('should call cancelProcessing successfully', function(done) {
        //uncomment below and update the code to test cancelProcessing
        //instance.cancelProcessing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNewRequest', function() {
      it('should call createNewRequest successfully', function(done) {
        //uncomment below and update the code to test createNewRequest
        //instance.createNewRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getActions', function() {
      it('should call getActions successfully', function(done) {
        //uncomment below and update the code to test getActions
        //instance.getActions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgent', function() {
      it('should call getAgent successfully', function(done) {
        //uncomment below and update the code to test getAgent
        //instance.getAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllRequests', function() {
      it('should call getAllRequests successfully', function(done) {
        //uncomment below and update the code to test getAllRequests
        //instance.getAllRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getData', function() {
      it('should call getData successfully', function(done) {
        //uncomment below and update the code to test getData
        //instance.getData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRequest', function() {
      it('should call getRequest successfully', function(done) {
        //uncomment below and update the code to test getRequest
        //instance.getRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getResult', function() {
      it('should call getResult successfully', function(done) {
        //uncomment below and update the code to test getResult
        //instance.getResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStatus', function() {
      it('should call getStatus successfully', function(done) {
        //uncomment below and update the code to test getStatus
        //instance.getStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('giveConsent', function() {
      it('should call giveConsent successfully', function(done) {
        //uncomment below and update the code to test giveConsent
        //instance.giveConsent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('initRequestParameters', function() {
      it('should call initRequestParameters successfully', function(done) {
        //uncomment below and update the code to test initRequestParameters
        //instance.initRequestParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setAgent', function() {
      it('should call setAgent successfully', function(done) {
        //uncomment below and update the code to test setAgent
        //instance.setAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setResult', function() {
      it('should call setResult successfully', function(done) {
        //uncomment below and update the code to test setResult
        //instance.setResult(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
