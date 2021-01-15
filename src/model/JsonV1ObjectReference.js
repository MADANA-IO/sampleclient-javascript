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

import ApiClient from '../ApiClient';

/**
 * The JsonV1ObjectReference model module.
 * @module model/JsonV1ObjectReference
 * @version 0.5.0-master.31
 */
class JsonV1ObjectReference {
    /**
     * Constructs a new <code>JsonV1ObjectReference</code>.
     * 
     * @alias module:model/JsonV1ObjectReference
     */
    constructor() { 
        
        JsonV1ObjectReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonV1ObjectReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonV1ObjectReference} obj Optional instance to populate.
     * @return {module:model/JsonV1ObjectReference} The populated <code>JsonV1ObjectReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonV1ObjectReference();

            if (data.hasOwnProperty('resourceVersion')) {
                obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('fieldPath')) {
                obj['fieldPath'] = ApiClient.convertToType(data['fieldPath'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} resourceVersion
 */
JsonV1ObjectReference.prototype['resourceVersion'] = undefined;

/**
 * 
 * @member {String} kind
 */
JsonV1ObjectReference.prototype['kind'] = undefined;

/**
 * 
 * @member {String} name
 */
JsonV1ObjectReference.prototype['name'] = undefined;

/**
 * 
 * @member {String} namespace
 */
JsonV1ObjectReference.prototype['namespace'] = undefined;

/**
 * 
 * @member {String} fieldPath
 */
JsonV1ObjectReference.prototype['fieldPath'] = undefined;

/**
 * 
 * @member {String} uid
 */
JsonV1ObjectReference.prototype['uid'] = undefined;

/**
 * 
 * @member {String} apiVersion
 */
JsonV1ObjectReference.prototype['apiVersion'] = undefined;






export default JsonV1ObjectReference;

