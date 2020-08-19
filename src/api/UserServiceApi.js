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


import ApiClient from "../ApiClient";
import JsonMDNUser from '../model/JsonMDNUser';
import JsonMDNUserProfileImage from '../model/JsonMDNUserProfileImage';
import JsonMDNUserSetting from '../model/JsonMDNUserSetting';

/**
* UserService service.
* @module api/UserServiceApi
* @version 0.4.14-master.19
*/
export default class UserServiceApi {

    /**
    * Constructs a new UserServiceApi. 
    * @alias module:api/UserServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createObject operation.
     * @callback module:api/UserServiceApi~createObjectCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new user object.
     * Creates a new user object
     * @param {Object} opts Optional parameters
     * @param {String} opts.referrer 
     * @param {module:model/JsonMDNUser} opts.body provided user object inheriting properties and credentials
     * @param {module:api/UserServiceApi~createObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    createObject(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
        'referrer': opts['referrer']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteObject operation.
     * @callback module:api/UserServiceApi~deleteObjectCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an User based on the provided id and securitycontext.
     * Deletes an User based on the provided id and securitycontext
     * @param {String} username 
     * @param {module:api/UserServiceApi~deleteObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    deleteObject(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteObject");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/users/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteObject_0 operation.
     * @callback module:api/UserServiceApi~deleteObject_0Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes linked account from the user and securitycontext.
     * Deletes linked account from the user and securitycontext
     * @param {String} ident 
     * @param {String} platform 
     * @param {String} username 
     * @param {module:api/UserServiceApi~deleteObject_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    deleteObject_0(ident, platform, username, callback) {
      let postBody = null;
      // verify the required parameter 'ident' is set
      if (ident === undefined || ident === null) {
        throw new Error("Missing the required parameter 'ident' when calling deleteObject_0");
      }
      // verify the required parameter 'platform' is set
      if (platform === undefined || platform === null) {
        throw new Error("Missing the required parameter 'platform' when calling deleteObject_0");
      }
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteObject_0");
      }

      let pathParams = {
        'ident': ident,
        'platform': platform,
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/users/{username}/social/{platform}/{ident}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAvatars operation.
     * @callback module:api/UserServiceApi~getAvatarsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {module:api/UserServiceApi~getAvatarsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getAvatars(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getAvatars");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}/avatars', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCertificates operation.
     * @callback module:api/UserServiceApi~getCertificatesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {module:api/UserServiceApi~getCertificatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getCertificates(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getCertificates");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}/certificates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getObject2 operation.
     * @callback module:api/UserServiceApi~getObject2Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {module:api/UserServiceApi~getObject2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getObject2(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getObject2");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setAvatar operation.
     * @callback module:api/UserServiceApi~setAvatarCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNUserProfileImage} opts.body 
     * @param {module:api/UserServiceApi~setAvatarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setAvatar(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling setAvatar");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}/avatars', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setSettings operation.
     * @callback module:api/UserServiceApi~setSettingsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNUserSetting} opts.body 
     * @param {module:api/UserServiceApi~setSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setSettings(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling setSettings");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}/settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateObject operation.
     * @callback module:api/UserServiceApi~updateObjectCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates Userproperties based on the provided user object.
     * Updates Userproperties based on the provided user object
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNUser} opts.body the new user object inherting all properties that should be change
     * @param {module:api/UserServiceApi~updateObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    updateObject(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateObject");
      }

      let pathParams = {
        'username': username
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
        '/users/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
