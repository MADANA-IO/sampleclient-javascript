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
import JsonV1EventList from './JsonV1EventList';

/**
 * The JsonKubernetesEnclaveAllOf model module.
 * @module model/JsonKubernetesEnclaveAllOf
 * @version 0.5.0-master.56
 */
class JsonKubernetesEnclaveAllOf {
    /**
     * Constructs a new <code>JsonKubernetesEnclaveAllOf</code>.
     * @alias module:model/JsonKubernetesEnclaveAllOf
     */
    constructor() { 
        
        JsonKubernetesEnclaveAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonKubernetesEnclaveAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonKubernetesEnclaveAllOf} obj Optional instance to populate.
     * @return {module:model/JsonKubernetesEnclaveAllOf} The populated <code>JsonKubernetesEnclaveAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonKubernetesEnclaveAllOf();

            if (data.hasOwnProperty('enclavePodEvents')) {
                obj['enclavePodEvents'] = JsonV1EventList.constructFromObject(data['enclavePodEvents']);
            }
            if (data.hasOwnProperty('remoteControlIP')) {
                obj['remoteControlIP'] = ApiClient.convertToType(data['remoteControlIP'], 'String');
            }
            if (data.hasOwnProperty('podPhase')) {
                obj['podPhase'] = ApiClient.convertToType(data['podPhase'], 'String');
            }
            if (data.hasOwnProperty('enclaveDeploymentEvents')) {
                obj['enclaveDeploymentEvents'] = JsonV1EventList.constructFromObject(data['enclaveDeploymentEvents']);
            }
            if (data.hasOwnProperty('debugInfo')) {
                obj['debugInfo'] = ApiClient.convertToType(data['debugInfo'], 'String');
            }
            if (data.hasOwnProperty('attestationPort')) {
                obj['attestationPort'] = ApiClient.convertToType(data['attestationPort'], 'Number');
            }
            if (data.hasOwnProperty('isUsingInitContainer')) {
                obj['isUsingInitContainer'] = ApiClient.convertToType(data['isUsingInitContainer'], 'Boolean');
            }
            if (data.hasOwnProperty('wireguardPort')) {
                obj['wireguardPort'] = ApiClient.convertToType(data['wireguardPort'], 'Number');
            }
            if (data.hasOwnProperty('enclaveReplicaSetEvents')) {
                obj['enclaveReplicaSetEvents'] = JsonV1EventList.constructFromObject(data['enclaveReplicaSetEvents']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JsonV1EventList} enclavePodEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclavePodEvents'] = undefined;

/**
 * 
 * @member {String} remoteControlIP
 */
JsonKubernetesEnclaveAllOf.prototype['remoteControlIP'] = undefined;

/**
 * 
 * @member {String} podPhase
 */
JsonKubernetesEnclaveAllOf.prototype['podPhase'] = undefined;

/**
 * @member {module:model/JsonV1EventList} enclaveDeploymentEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclaveDeploymentEvents'] = undefined;

/**
 * 
 * @member {String} debugInfo
 */
JsonKubernetesEnclaveAllOf.prototype['debugInfo'] = undefined;

/**
 * 
 * @member {Number} attestationPort
 */
JsonKubernetesEnclaveAllOf.prototype['attestationPort'] = undefined;

/**
 * 
 * @member {Boolean} isUsingInitContainer
 */
JsonKubernetesEnclaveAllOf.prototype['isUsingInitContainer'] = undefined;

/**
 * 
 * @member {Number} wireguardPort
 */
JsonKubernetesEnclaveAllOf.prototype['wireguardPort'] = undefined;

/**
 * @member {module:model/JsonV1EventList} enclaveReplicaSetEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclaveReplicaSetEvents'] = undefined;






export default JsonKubernetesEnclaveAllOf;

