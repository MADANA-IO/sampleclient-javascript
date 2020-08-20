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
import JsonIPFSSystemInfo from './JsonIPFSSystemInfo';

/**
 * The JsonNodeInfo model module.
 * @module model/JsonNodeInfo
 * @version 0.4.14-master.20
 */
class JsonNodeInfo {
    /**
     * Constructs a new <code>JsonNodeInfo</code>.
     * 
     * @alias module:model/JsonNodeInfo
     */
    constructor() { 
        
        JsonNodeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonNodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonNodeInfo} obj Optional instance to populate.
     * @return {module:model/JsonNodeInfo} The populated <code>JsonNodeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonNodeInfo();

            if (data.hasOwnProperty('cpuPhysicalCores')) {
                obj['cpuPhysicalCores'] = ApiClient.convertToType(data['cpuPhysicalCores'], 'Number');
            }
            if (data.hasOwnProperty('connectionURL')) {
                obj['connectionURL'] = ApiClient.convertToType(data['connectionURL'], 'String');
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'String');
            }
            if (data.hasOwnProperty('processors')) {
                obj['processors'] = ApiClient.convertToType(data['processors'], ['String']);
            }
            if (data.hasOwnProperty('cpuFrequency')) {
                obj['cpuFrequency'] = ApiClient.convertToType(data['cpuFrequency'], 'String');
            }
            if (data.hasOwnProperty('ipfsInfo')) {
                obj['ipfsInfo'] = JsonIPFSSystemInfo.constructFromObject(data['ipfsInfo']);
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('hardwareBaseboard')) {
                obj['hardwareBaseboard'] = ApiClient.convertToType(data['hardwareBaseboard'], 'String');
            }
            if (data.hasOwnProperty('cpuLogicalCount')) {
                obj['cpuLogicalCount'] = ApiClient.convertToType(data['cpuLogicalCount'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('operatingSystemUptime')) {
                obj['operatingSystemUptime'] = ApiClient.convertToType(data['operatingSystemUptime'], 'Number');
            }
            if (data.hasOwnProperty('cpuFamily')) {
                obj['cpuFamily'] = ApiClient.convertToType(data['cpuFamily'], 'String');
            }
            if (data.hasOwnProperty('hardwareFirmware')) {
                obj['hardwareFirmware'] = ApiClient.convertToType(data['hardwareFirmware'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('operatingSystem')) {
                obj['operatingSystem'] = ApiClient.convertToType(data['operatingSystem'], 'String');
            }
            if (data.hasOwnProperty('cpuModel')) {
                obj['cpuModel'] = ApiClient.convertToType(data['cpuModel'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Number} cpuPhysicalCores
 */
JsonNodeInfo.prototype['cpuPhysicalCores'] = undefined;

/**
 * 
 * @member {String} connectionURL
 */
JsonNodeInfo.prototype['connectionURL'] = undefined;

/**
 * 
 * @member {String} memory
 */
JsonNodeInfo.prototype['memory'] = undefined;

/**
 * 
 * @member {Array.<String>} processors
 */
JsonNodeInfo.prototype['processors'] = undefined;

/**
 * 
 * @member {String} cpuFrequency
 */
JsonNodeInfo.prototype['cpuFrequency'] = undefined;

/**
 * @member {module:model/JsonIPFSSystemInfo} ipfsInfo
 */
JsonNodeInfo.prototype['ipfsInfo'] = undefined;

/**
 * 
 * @member {String} publicKey
 */
JsonNodeInfo.prototype['publicKey'] = undefined;

/**
 * 
 * @member {String} hardwareBaseboard
 */
JsonNodeInfo.prototype['hardwareBaseboard'] = undefined;

/**
 * 
 * @member {Number} cpuLogicalCount
 */
JsonNodeInfo.prototype['cpuLogicalCount'] = undefined;

/**
 * 
 * @member {String} owner
 */
JsonNodeInfo.prototype['owner'] = undefined;

/**
 * 
 * @member {Number} operatingSystemUptime
 */
JsonNodeInfo.prototype['operatingSystemUptime'] = undefined;

/**
 * 
 * @member {String} cpuFamily
 */
JsonNodeInfo.prototype['cpuFamily'] = undefined;

/**
 * 
 * @member {String} hardwareFirmware
 */
JsonNodeInfo.prototype['hardwareFirmware'] = undefined;

/**
 * 
 * @member {String} status
 */
JsonNodeInfo.prototype['status'] = undefined;

/**
 * 
 * @member {String} operatingSystem
 */
JsonNodeInfo.prototype['operatingSystem'] = undefined;

/**
 * 
 * @member {String} cpuModel
 */
JsonNodeInfo.prototype['cpuModel'] = undefined;






export default JsonNodeInfo;

