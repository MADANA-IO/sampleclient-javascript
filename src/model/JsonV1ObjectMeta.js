/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.50
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonV1ManagedFieldsEntry from './JsonV1ManagedFieldsEntry';
import JsonV1OwnerReference from './JsonV1OwnerReference';

/**
 * The JsonV1ObjectMeta model module.
 * @module model/JsonV1ObjectMeta
 * @version 0.5.0-master.50
 */
class JsonV1ObjectMeta {
    /**
     * Constructs a new <code>JsonV1ObjectMeta</code>.
     * 
     * @alias module:model/JsonV1ObjectMeta
     */
    constructor() { 
        
        JsonV1ObjectMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonV1ObjectMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonV1ObjectMeta} obj Optional instance to populate.
     * @return {module:model/JsonV1ObjectMeta} The populated <code>JsonV1ObjectMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonV1ObjectMeta();

            if (data.hasOwnProperty('managedFields')) {
                obj['managedFields'] = ApiClient.convertToType(data['managedFields'], [JsonV1ManagedFieldsEntry]);
            }
            if (data.hasOwnProperty('finalizers')) {
                obj['finalizers'] = ApiClient.convertToType(data['finalizers'], ['String']);
            }
            if (data.hasOwnProperty('selfLink')) {
                obj['selfLink'] = ApiClient.convertToType(data['selfLink'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('clusterName')) {
                obj['clusterName'] = ApiClient.convertToType(data['clusterName'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
            if (data.hasOwnProperty('resourceVersion')) {
                obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
            }
            if (data.hasOwnProperty('generation')) {
                obj['generation'] = ApiClient.convertToType(data['generation'], 'Number');
            }
            if (data.hasOwnProperty('creationTimestamp')) {
                obj['creationTimestamp'] = ApiClient.convertToType(data['creationTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('ownerReferences')) {
                obj['ownerReferences'] = ApiClient.convertToType(data['ownerReferences'], [JsonV1OwnerReference]);
            }
            if (data.hasOwnProperty('deletionGracePeriodSeconds')) {
                obj['deletionGracePeriodSeconds'] = ApiClient.convertToType(data['deletionGracePeriodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('generateName')) {
                obj['generateName'] = ApiClient.convertToType(data['generateName'], 'String');
            }
            if (data.hasOwnProperty('deletionTimestamp')) {
                obj['deletionTimestamp'] = ApiClient.convertToType(data['deletionTimestamp'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Array.<module:model/JsonV1ManagedFieldsEntry>} managedFields
 */
JsonV1ObjectMeta.prototype['managedFields'] = undefined;

/**
 * 
 * @member {Array.<String>} finalizers
 */
JsonV1ObjectMeta.prototype['finalizers'] = undefined;

/**
 * 
 * @member {String} selfLink
 */
JsonV1ObjectMeta.prototype['selfLink'] = undefined;

/**
 * 
 * @member {String} name
 */
JsonV1ObjectMeta.prototype['name'] = undefined;

/**
 * 
 * @member {String} clusterName
 */
JsonV1ObjectMeta.prototype['clusterName'] = undefined;

/**
 * 
 * @member {String} uid
 */
JsonV1ObjectMeta.prototype['uid'] = undefined;

/**
 * 
 * @member {Object.<String, String>} annotations
 */
JsonV1ObjectMeta.prototype['annotations'] = undefined;

/**
 * 
 * @member {String} resourceVersion
 */
JsonV1ObjectMeta.prototype['resourceVersion'] = undefined;

/**
 * 
 * @member {Number} generation
 */
JsonV1ObjectMeta.prototype['generation'] = undefined;

/**
 * 
 * @member {Number} creationTimestamp
 */
JsonV1ObjectMeta.prototype['creationTimestamp'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonV1OwnerReference>} ownerReferences
 */
JsonV1ObjectMeta.prototype['ownerReferences'] = undefined;

/**
 * 
 * @member {Number} deletionGracePeriodSeconds
 */
JsonV1ObjectMeta.prototype['deletionGracePeriodSeconds'] = undefined;

/**
 * 
 * @member {String} namespace
 */
JsonV1ObjectMeta.prototype['namespace'] = undefined;

/**
 * 
 * @member {Object.<String, String>} labels
 */
JsonV1ObjectMeta.prototype['labels'] = undefined;

/**
 * 
 * @member {String} generateName
 */
JsonV1ObjectMeta.prototype['generateName'] = undefined;

/**
 * 
 * @member {Number} deletionTimestamp
 */
JsonV1ObjectMeta.prototype['deletionTimestamp'] = undefined;






export default JsonV1ObjectMeta;

