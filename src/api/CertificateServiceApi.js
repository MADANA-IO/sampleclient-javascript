/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonMDNCertificate from '../model/JsonMDNCertificate';
import JsonMDNData from '../model/JsonMDNData';

/**
* CertificateService service.
* @module api/CertificateServiceApi
* @version 0.5.0-master.15
*/
export default class CertificateServiceApi {

    /**
    * Constructs a new CertificateServiceApi. 
    * @alias module:api/CertificateServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticateCertificate operation.
     * @callback module:api/CertificateServiceApi~authenticateCertificateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonMDNCertificate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Issues certificates for logged-in users.
     * Issues certificates for logged-in users
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNData} opts.body 
     * @param {module:api/CertificateServiceApi~authenticateCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonMDNCertificate}
     */
    authenticateCertificate(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JsonMDNCertificate;
      return this.apiClient.callApi(
        '/certificates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCertificateByFingerprint operation.
     * @callback module:api/CertificateServiceApi~getCertificateByFingerprintCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} fingerprint 
     * @param {module:api/CertificateServiceApi~getCertificateByFingerprintCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getCertificateByFingerprint(fingerprint, callback) {
      let postBody = null;
      // verify the required parameter 'fingerprint' is set
      if (fingerprint === undefined || fingerprint === null) {
        throw new Error("Missing the required parameter 'fingerprint' when calling getCertificateByFingerprint");
      }

      let pathParams = {
        'fingerprint': fingerprint
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/certificates/{fingerprint}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRootCertificate operation.
     * @callback module:api/CertificateServiceApi~getRootCertificateCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/CertificateServiceApi~getRootCertificateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getRootCertificate(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/certificates/root', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
