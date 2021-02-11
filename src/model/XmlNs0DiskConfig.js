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

import ApiClient from '../ApiClient';
import XmlNs0DiskConfigAllOf from './XmlNs0DiskConfigAllOf';

/**
 * The XmlNs0DiskConfig model module.
 * @module model/XmlNs0DiskConfig
 * @version 0.5.0-master.56
 */
class XmlNs0DiskConfig {
    /**
     * Constructs a new <code>XmlNs0DiskConfig</code>.
     * 
     * @alias module:model/XmlNs0DiskConfig
     * @implements module:model/XmlNs0DiskConfigAllOf
     */
    constructor() { 
        XmlNs0DiskConfigAllOf.initialize(this);
        XmlNs0DiskConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0DiskConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0DiskConfig} obj Optional instance to populate.
     * @return {module:model/XmlNs0DiskConfig} The populated <code>XmlNs0DiskConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0DiskConfig();
            XmlNs0DiskConfigAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('disk')) {
                obj['disk'] = ApiClient.convertToType(data['disk'], 'String');
            }
            if (data.hasOwnProperty('readonly')) {
                obj['readonly'] = ApiClient.convertToType(data['readonly'], 'Boolean');
            }
            if (data.hasOwnProperty('roothash')) {
                obj['roothash'] = ApiClient.convertToType(data['roothash'], 'String');
            }
            if (data.hasOwnProperty('roothash_offset')) {
                obj['roothash_offset'] = ApiClient.convertToType(data['roothash_offset'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} disk
 */
XmlNs0DiskConfig.prototype['disk'] = undefined;

/**
 * 
 * @member {Boolean} readonly
 */
XmlNs0DiskConfig.prototype['readonly'] = undefined;

/**
 * 
 * @member {String} roothash
 */
XmlNs0DiskConfig.prototype['roothash'] = undefined;

/**
 * 
 * @member {Number} roothash_offset
 */
XmlNs0DiskConfig.prototype['roothash_offset'] = undefined;


// Implement XmlNs0DiskConfigAllOf interface:
/**
 * 
 * @member {String} disk
 */
XmlNs0DiskConfigAllOf.prototype['disk'] = undefined;
/**
 * 
 * @member {Boolean} readonly
 */
XmlNs0DiskConfigAllOf.prototype['readonly'] = undefined;
/**
 * 
 * @member {String} roothash
 */
XmlNs0DiskConfigAllOf.prototype['roothash'] = undefined;
/**
 * 
 * @member {Number} roothash_offset
 */
XmlNs0DiskConfigAllOf.prototype['roothash_offset'] = undefined;




export default XmlNs0DiskConfig;

