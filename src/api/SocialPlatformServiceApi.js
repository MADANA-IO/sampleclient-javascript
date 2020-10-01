/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.15-master.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* SocialPlatformService service.
* @module api/SocialPlatformServiceApi
* @version 0.4.15-master.1
*/
export default class SocialPlatformServiceApi {

    /**
    * Constructs a new SocialPlatformServiceApi. 
    * @alias module:api/SocialPlatformServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getPlatforms operation.
     * @callback module:api/SocialPlatformServiceApi~getPlatformsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to Handle Incoming Webhooks from Facebook.
     * Used to Handle Incoming Webhooks from Facebook
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SocialPlatformServiceApi~getPlatformsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getPlatforms(opts, callback) {
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
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/platforms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listenTwitterWebhook operation.
     * @callback module:api/SocialPlatformServiceApi~listenTwitterWebhookCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to Handle Incoming Webhooks from Facebook.
     * Used to Handle Incoming Webhooks from Facebook
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/SocialPlatformServiceApi~listenTwitterWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    listenTwitterWebhook(opts, callback) {
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
        '/platforms/twitter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerTwitterWebhook operation.
     * @callback module:api/SocialPlatformServiceApi~registerTwitterWebhookCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to Handle Incoming Webhooks from Twitter.
     * Used to Handle Incoming Webhooks from Twitter
     * @param {Object} opts Optional parameters
     * @param {String} opts.crcToken 
     * @param {module:api/SocialPlatformServiceApi~registerTwitterWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    registerTwitterWebhook(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'crc_token': opts['crcToken']
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
        '/platforms/twitter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
