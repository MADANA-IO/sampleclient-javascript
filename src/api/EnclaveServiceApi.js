/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonEnclaveRunRequest from '../model/JsonEnclaveRunRequest';
import JsonEnclaveRunningAttestation from '../model/JsonEnclaveRunningAttestation';
import JsonEnclaveRunningAttestationApproval from '../model/JsonEnclaveRunningAttestationApproval';
import JsonNodeInfo from '../model/JsonNodeInfo';
import JsonSignedData from '../model/JsonSignedData';

/**
* EnclaveService service.
* @module api/EnclaveServiceApi
* @version 0.4.15
*/
export default class EnclaveServiceApi {

    /**
    * Constructs a new EnclaveServiceApi. 
    * @alias module:api/EnclaveServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addHistory operation.
     * @callback module:api/EnclaveServiceApi~addHistoryCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonSignedData} opts.body 
     * @param {module:api/EnclaveServiceApi~addHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    addHistory(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling addHistory");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves/{uuid}/history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the approveEnclave operation.
     * @callback module:api/EnclaveServiceApi~approveEnclaveCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonEnclaveRunningAttestationApproval} opts.body 
     * @param {module:api/EnclaveServiceApi~approveEnclaveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    approveEnclave(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling approveEnclave");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves/{uuid}/approval', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the assignEnclaveAgent operation.
     * @callback module:api/EnclaveServiceApi~assignEnclaveAgentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonNodeInfo} opts.body 
     * @param {module:api/EnclaveServiceApi~assignEnclaveAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    assignEnclaveAgent(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling assignEnclaveAgent");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves/{uuid}/assign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the attestateEnclave operation.
     * @callback module:api/EnclaveServiceApi~attestateEnclaveCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonEnclaveRunningAttestation} opts.body 
     * @param {module:api/EnclaveServiceApi~attestateEnclaveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    attestateEnclave(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling attestateEnclave");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves/{uuid}/attestation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEnclaveRunRequest operation.
     * @callback module:api/EnclaveServiceApi~createEnclaveRunRequestCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonEnclaveRunRequest} opts.body 
     * @param {module:api/EnclaveServiceApi~createEnclaveRunRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    createEnclaveRunRequest(opts, callback) {
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
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnclave operation.
     * @callback module:api/EnclaveServiceApi~getEnclaveCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnclaveServiceApi~getEnclaveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getEnclave(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEnclave");
      }

      let pathParams = {
        'uuid': uuid
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
        '/enclaves/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnclaveTypes operation.
     * @callback module:api/EnclaveServiceApi~getEnclaveTypesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/EnclaveServiceApi~getEnclaveTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getEnclaveTypes(callback) {
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
        '/enclaves/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnclaves operation.
     * @callback module:api/EnclaveServiceApi~getEnclavesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns UUIDs of existing analyses.
     * Returns UUIDs of existing analyses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {String} opts.created - if Queryparam \"created=true\" only the UUIDs of own Requests are shown (default to 'true')
     * @param {String} opts.limit Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '30')
     * @param {String} opts.offset Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '0')
     * @param {String} opts.status 
     * @param {module:api/EnclaveServiceApi~getEnclavesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getEnclaves(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'created': opts['created'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'status': opts['status']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/enclaves', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the killEnclave operation.
     * @callback module:api/EnclaveServiceApi~killEnclaveCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnclaveServiceApi~killEnclaveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    killEnclave(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling killEnclave");
      }

      let pathParams = {
        'uuid': uuid
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
        '/enclaves/{uuid}/kill', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
