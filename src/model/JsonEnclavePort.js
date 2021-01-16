/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.36
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JsonEnclavePort model module.
 * @module model/JsonEnclavePort
 * @version 0.5.0-master.36
 */
class JsonEnclavePort {
    /**
     * Constructs a new <code>JsonEnclavePort</code>.
     * 
     * @alias module:model/JsonEnclavePort
     */
    constructor() { 
        
        JsonEnclavePort.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonEnclavePort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonEnclavePort} obj Optional instance to populate.
     * @return {module:model/JsonEnclavePort} The populated <code>JsonEnclavePort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonEnclavePort();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} name
 */
JsonEnclavePort.prototype['name'] = undefined;

/**
 * 
 * @member {String} port
 */
JsonEnclavePort.prototype['port'] = undefined;

/**
 * 
 * @member {String} protocol
 */
JsonEnclavePort.prototype['protocol'] = undefined;






export default JsonEnclavePort;

