/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JsonIPFSSystemInfo model module.
 * @module model/JsonIPFSSystemInfo
 * @version 0.4.14-master.20
 */
class JsonIPFSSystemInfo {
    /**
     * Constructs a new <code>JsonIPFSSystemInfo</code>.
     * 
     * @alias module:model/JsonIPFSSystemInfo
     */
    constructor() { 
        
        JsonIPFSSystemInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonIPFSSystemInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonIPFSSystemInfo} obj Optional instance to populate.
     * @return {module:model/JsonIPFSSystemInfo} The populated <code>JsonIPFSSystemInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonIPFSSystemInfo();

            if (data.hasOwnProperty('swarmConnection')) {
                obj['swarmConnection'] = ApiClient.convertToType(data['swarmConnection'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('protocolVersion')) {
                obj['protocolVersion'] = ApiClient.convertToType(data['protocolVersion'], 'String');
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('agentVersion')) {
                obj['agentVersion'] = ApiClient.convertToType(data['agentVersion'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} swarmConnection
 */
JsonIPFSSystemInfo.prototype['swarmConnection'] = undefined;

/**
 * 
 * @member {String} id
 */
JsonIPFSSystemInfo.prototype['id'] = undefined;

/**
 * 
 * @member {String} protocolVersion
 */
JsonIPFSSystemInfo.prototype['protocolVersion'] = undefined;

/**
 * 
 * @member {String} publicKey
 */
JsonIPFSSystemInfo.prototype['publicKey'] = undefined;

/**
 * 
 * @member {String} agentVersion
 */
JsonIPFSSystemInfo.prototype['agentVersion'] = undefined;






export default JsonIPFSSystemInfo;

