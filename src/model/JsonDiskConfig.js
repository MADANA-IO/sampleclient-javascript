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

import ApiClient from '../ApiClient';

/**
 * The JsonDiskConfig model module.
 * @module model/JsonDiskConfig
 * @version 0.5.0-master.46
 */
class JsonDiskConfig {
    /**
     * Constructs a new <code>JsonDiskConfig</code>.
     * 
     * @alias module:model/JsonDiskConfig
     */
    constructor() { 
        
        JsonDiskConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonDiskConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonDiskConfig} obj Optional instance to populate.
     * @return {module:model/JsonDiskConfig} The populated <code>JsonDiskConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonDiskConfig();

            if (data.hasOwnProperty('readonly')) {
                obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
            }
            if (data.hasOwnProperty('roothash_offset')) {
                obj['roothash_offset'] = ApiClient.convertToType(data['roothash_offset'], 'Number');
            }
            if (data.hasOwnProperty('roothash')) {
                obj['roothash'] = ApiClient.convertToType(data['roothash'], 'String');
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = ApiClient.convertToType(data['disk'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Boolean} readonly
 */
JsonDiskConfig.prototype['readonly'] = undefined;

/**
 * 
 * @member {Number} roothash_offset
 */
JsonDiskConfig.prototype['roothash_offset'] = undefined;

/**
 * 
 * @member {String} roothash
 */
JsonDiskConfig.prototype['roothash'] = undefined;

/**
 * 
 * @member {String} disk
 */
JsonDiskConfig.prototype['disk'] = undefined;






export default JsonDiskConfig;

