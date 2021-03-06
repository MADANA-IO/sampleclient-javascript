/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.56
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* SubscriptionService service.
* @module api/SubscriptionServiceApi
* @version 0.5.0-master.56
*/
export default class SubscriptionServiceApi {

    /**
    * Constructs a new SubscriptionServiceApi. 
    * @alias module:api/SubscriptionServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addFreeSubscription operation.
     * @callback module:api/SubscriptionServiceApi~addFreeSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SubscriptionServiceApi~addFreeSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    addFreeSubscription(callback) {
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
        '/subscriptions/saas/free', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addPassTrialSubscription operation.
     * @callback module:api/SubscriptionServiceApi~addPassTrialSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SubscriptionServiceApi~addPassTrialSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    addPassTrialSubscription(callback) {
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
        '/subscriptions/paas/trial', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplication operation.
     * @callback module:api/SubscriptionServiceApi~getApplicationCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SubscriptionServiceApi~getApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getApplication(callback) {
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
        '/subscriptions/active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCheckoutSession operation.
     * @callback module:api/SubscriptionServiceApi~getCheckoutSessionCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} productname 
     * @param {module:api/SubscriptionServiceApi~getCheckoutSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getCheckoutSession(productname, callback) {
      let postBody = null;
      // verify the required parameter 'productname' is set
      if (productname === undefined || productname === null) {
        throw new Error("Missing the required parameter 'productname' when calling getCheckoutSession");
      }

      let pathParams = {
        'productname': productname
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
        '/subscriptions/{productname}/checkout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCheckoutSession2 operation.
     * @callback module:api/SubscriptionServiceApi~getCheckoutSession2Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} newplan 
     * @param {String} productname 
     * @param {module:api/SubscriptionServiceApi~getCheckoutSession2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getCheckoutSession2(newplan, productname, callback) {
      let postBody = null;
      // verify the required parameter 'newplan' is set
      if (newplan === undefined || newplan === null) {
        throw new Error("Missing the required parameter 'newplan' when calling getCheckoutSession2");
      }
      // verify the required parameter 'productname' is set
      if (productname === undefined || productname === null) {
        throw new Error("Missing the required parameter 'productname' when calling getCheckoutSession2");
      }

      let pathParams = {
        'newplan': newplan,
        'productname': productname
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
        '/subscriptions/{productname}/{newplan}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
