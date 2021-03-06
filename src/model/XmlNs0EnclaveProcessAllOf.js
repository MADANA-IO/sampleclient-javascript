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
import XmlNs0EnclavePort from './XmlNs0EnclavePort';
import XmlNs0Environment from './XmlNs0Environment';
import XmlNs0InputStream from './XmlNs0InputStream';
import XmlNs0KubernetesEnclave from './XmlNs0KubernetesEnclave';
import XmlNs0Process from './XmlNs0Process';
import XmlNs0WireguardInterface from './XmlNs0WireguardInterface';

/**
 * The XmlNs0EnclaveProcessAllOf model module.
 * @module model/XmlNs0EnclaveProcessAllOf
 * @version 0.5.0-master.56
 */
class XmlNs0EnclaveProcessAllOf {
    /**
     * Constructs a new <code>XmlNs0EnclaveProcessAllOf</code>.
     * @alias module:model/XmlNs0EnclaveProcessAllOf
     */
    constructor() { 
        
        XmlNs0EnclaveProcessAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0EnclaveProcessAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0EnclaveProcessAllOf} obj Optional instance to populate.
     * @return {module:model/XmlNs0EnclaveProcessAllOf} The populated <code>XmlNs0EnclaveProcessAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0EnclaveProcessAllOf();

            if (data.hasOwnProperty('attestationServer')) {
                obj['attestationServer'] = ApiClient.convertToType(data['attestationServer'], 'String');
            }
            if (data.hasOwnProperty('consoleOutput')) {
                obj['consoleOutput'] = ApiClient.convertToType(data['consoleOutput'], 'String');
            }
            if (data.hasOwnProperty('enclaveIdent')) {
                obj['enclaveIdent'] = ApiClient.convertToType(data['enclaveIdent'], 'String');
            }
            if (data.hasOwnProperty('enclaveInputstream')) {
                obj['enclaveInputstream'] = XmlNs0InputStream.constructFromObject(data['enclaveInputstream']);
            }
            if (data.hasOwnProperty('endingTime')) {
                obj['endingTime'] = ApiClient.convertToType(data['endingTime'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = XmlNs0Environment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('internalAttesationServer')) {
                obj['internalAttesationServer'] = ApiClient.convertToType(data['internalAttesationServer'], 'String');
            }
            if (data.hasOwnProperty('internalIdent')) {
                obj['internalIdent'] = ApiClient.convertToType(data['internalIdent'], 'String');
            }
            if (data.hasOwnProperty('internalRemoteControlServer')) {
                obj['internalRemoteControlServer'] = ApiClient.convertToType(data['internalRemoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('internalWireguardServer')) {
                obj['internalWireguardServer'] = ApiClient.convertToType(data['internalWireguardServer'], 'String');
            }
            if (data.hasOwnProperty('kubernetesEnclave')) {
                obj['kubernetesEnclave'] = XmlNs0KubernetesEnclave.constructFromObject(data['kubernetesEnclave']);
            }
            if (data.hasOwnProperty('portMapping')) {
                obj['portMapping'] = ApiClient.convertToType(data['portMapping'], Object);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [XmlNs0EnclavePort]);
            }
            if (data.hasOwnProperty('process')) {
                obj['process'] = XmlNs0Process.constructFromObject(data['process']);
            }
            if (data.hasOwnProperty('publicIdent')) {
                obj['publicIdent'] = ApiClient.convertToType(data['publicIdent'], 'String');
            }
            if (data.hasOwnProperty('remoteControlServer')) {
                obj['remoteControlServer'] = ApiClient.convertToType(data['remoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('signerIdent')) {
                obj['signerIdent'] = ApiClient.convertToType(data['signerIdent'], 'String');
            }
            if (data.hasOwnProperty('startupCMD')) {
                obj['startupCMD'] = ApiClient.convertToType(data['startupCMD'], 'String');
            }
            if (data.hasOwnProperty('startupTime')) {
                obj['startupTime'] = ApiClient.convertToType(data['startupTime'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('wgInterface')) {
                obj['wgInterface'] = XmlNs0WireguardInterface.constructFromObject(data['wgInterface']);
            }
            if (data.hasOwnProperty('wireguardPublicKey')) {
                obj['wireguardPublicKey'] = ApiClient.convertToType(data['wireguardPublicKey'], 'String');
            }
            if (data.hasOwnProperty('wireguardServer')) {
                obj['wireguardServer'] = ApiClient.convertToType(data['wireguardServer'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} attestationServer
 */
XmlNs0EnclaveProcessAllOf.prototype['attestationServer'] = undefined;

/**
 * 
 * @member {String} consoleOutput
 */
XmlNs0EnclaveProcessAllOf.prototype['consoleOutput'] = undefined;

/**
 * 
 * @member {String} enclaveIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['enclaveIdent'] = undefined;

/**
 * @member {module:model/XmlNs0InputStream} enclaveInputstream
 */
XmlNs0EnclaveProcessAllOf.prototype['enclaveInputstream'] = undefined;

/**
 * 
 * @member {String} endingTime
 */
XmlNs0EnclaveProcessAllOf.prototype['endingTime'] = undefined;

/**
 * @member {module:model/XmlNs0Environment} environment
 */
XmlNs0EnclaveProcessAllOf.prototype['environment'] = undefined;

/**
 * 
 * @member {String} internalAttesationServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalAttesationServer'] = undefined;

/**
 * 
 * @member {String} internalIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['internalIdent'] = undefined;

/**
 * 
 * @member {String} internalRemoteControlServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalRemoteControlServer'] = undefined;

/**
 * 
 * @member {String} internalWireguardServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalWireguardServer'] = undefined;

/**
 * @member {module:model/XmlNs0KubernetesEnclave} kubernetesEnclave
 */
XmlNs0EnclaveProcessAllOf.prototype['kubernetesEnclave'] = undefined;

/**
 * 
 * @member {Object} portMapping
 */
XmlNs0EnclaveProcessAllOf.prototype['portMapping'] = undefined;

/**
 * 
 * @member {Array.<module:model/XmlNs0EnclavePort>} ports
 */
XmlNs0EnclaveProcessAllOf.prototype['ports'] = undefined;

/**
 * @member {module:model/XmlNs0Process} process
 */
XmlNs0EnclaveProcessAllOf.prototype['process'] = undefined;

/**
 * 
 * @member {String} publicIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['publicIdent'] = undefined;

/**
 * 
 * @member {String} remoteControlServer
 */
XmlNs0EnclaveProcessAllOf.prototype['remoteControlServer'] = undefined;

/**
 * 
 * @member {String} signerIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['signerIdent'] = undefined;

/**
 * 
 * @member {String} startupCMD
 */
XmlNs0EnclaveProcessAllOf.prototype['startupCMD'] = undefined;

/**
 * 
 * @member {String} startupTime
 */
XmlNs0EnclaveProcessAllOf.prototype['startupTime'] = undefined;

/**
 * 
 * @member {String} status
 */
XmlNs0EnclaveProcessAllOf.prototype['status'] = undefined;

/**
 * @member {module:model/XmlNs0WireguardInterface} wgInterface
 */
XmlNs0EnclaveProcessAllOf.prototype['wgInterface'] = undefined;

/**
 * 
 * @member {String} wireguardPublicKey
 */
XmlNs0EnclaveProcessAllOf.prototype['wireguardPublicKey'] = undefined;

/**
 * 
 * @member {String} wireguardServer
 */
XmlNs0EnclaveProcessAllOf.prototype['wireguardServer'] = undefined;






export default XmlNs0EnclaveProcessAllOf;

