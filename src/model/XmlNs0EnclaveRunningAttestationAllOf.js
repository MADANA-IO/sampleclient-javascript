/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0EnclaveProcess from './XmlNs0EnclaveProcess';
import XmlNs0NodeInfo from './XmlNs0NodeInfo';

/**
 * The XmlNs0EnclaveRunningAttestationAllOf model module.
 * @module model/XmlNs0EnclaveRunningAttestationAllOf
 * @version 0.4.14-master.23
 */
class XmlNs0EnclaveRunningAttestationAllOf {
    /**
     * Constructs a new <code>XmlNs0EnclaveRunningAttestationAllOf</code>.
     * @alias module:model/XmlNs0EnclaveRunningAttestationAllOf
     */
    constructor() { 
        
        XmlNs0EnclaveRunningAttestationAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0EnclaveRunningAttestationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0EnclaveRunningAttestationAllOf} obj Optional instance to populate.
     * @return {module:model/XmlNs0EnclaveRunningAttestationAllOf} The populated <code>XmlNs0EnclaveRunningAttestationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0EnclaveRunningAttestationAllOf();

            if (data.hasOwnProperty('enclaveProcess')) {
                obj['enclaveProcess'] = XmlNs0EnclaveProcess.constructFromObject(data['enclaveProcess']);
            }
            if (data.hasOwnProperty('nodeInfo')) {
                obj['nodeInfo'] = XmlNs0NodeInfo.constructFromObject(data['nodeInfo']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/XmlNs0EnclaveProcess} enclaveProcess
 */
XmlNs0EnclaveRunningAttestationAllOf.prototype['enclaveProcess'] = undefined;

/**
 * @member {module:model/XmlNs0NodeInfo} nodeInfo
 */
XmlNs0EnclaveRunningAttestationAllOf.prototype['nodeInfo'] = undefined;






export default XmlNs0EnclaveRunningAttestationAllOf;

