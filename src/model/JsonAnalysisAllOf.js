/**
 * madana-api
 * <h1>API Quickstart Guide</h1>        <p>This documentation contains a Quickstart Guide, a few <a href=\"downloads.html\">sample clients</a>  for download and information about the available  <a href=\"resources.html\">endpoints</a>  and  <a href=\"data.html\">DataTypes</a>  </p>     <p>The <a target=\"_blank\" href=\"http://madana-explorer-staging.eu-central-1.elasticbeanstalk.com/login\">  MADANA Explorer</a> can be used to verify the interactions with the API</p>           <p>Internal use only. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a></p>         <br> <br>
 *
 * The version of the OpenAPI document: 0.4.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonAnalysisRequestAction from './JsonAnalysisRequestAction';
import JsonDatasetInfo from './JsonDatasetInfo';

/**
 * The JsonAnalysisAllOf model module.
 * @module model/JsonAnalysisAllOf
 * @version 0.4.12
 */
class JsonAnalysisAllOf {
    /**
     * Constructs a new <code>JsonAnalysisAllOf</code>.
     * @alias module:model/JsonAnalysisAllOf
     */
    constructor() { 
        
        JsonAnalysisAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonAnalysisAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonAnalysisAllOf} obj Optional instance to populate.
     * @return {module:model/JsonAnalysisAllOf} The populated <code>JsonAnalysisAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonAnalysisAllOf();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
            }
            if (data.hasOwnProperty('datasets')) {
                obj['datasets'] = ApiClient.convertToType(data['datasets'], [JsonDatasetInfo]);
            }
            if (data.hasOwnProperty('participants')) {
                obj['participants'] = ApiClient.convertToType(data['participants'], ['String']);
            }
            if (data.hasOwnProperty('views')) {
                obj['views'] = ApiClient.convertToType(data['views'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [JsonAnalysisRequestAction]);
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = ApiClient.convertToType(data['creator'], 'String');
            }
            if (data.hasOwnProperty('datasetCount')) {
                obj['datasetCount'] = ApiClient.convertToType(data['datasetCount'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} created
 */
JsonAnalysisAllOf.prototype['created'] = undefined;

/**
 * 
 * @member {String} uuid
 */
JsonAnalysisAllOf.prototype['uuid'] = undefined;

/**
 * 
 * @member {String} status
 */
JsonAnalysisAllOf.prototype['status'] = undefined;

/**
 * 
 * @member {String} agent
 */
JsonAnalysisAllOf.prototype['agent'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonDatasetInfo>} datasets
 */
JsonAnalysisAllOf.prototype['datasets'] = undefined;

/**
 * 
 * @member {Array.<String>} participants
 */
JsonAnalysisAllOf.prototype['participants'] = undefined;

/**
 * 
 * @member {String} views
 */
JsonAnalysisAllOf.prototype['views'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonAnalysisRequestAction>} actions
 */
JsonAnalysisAllOf.prototype['actions'] = undefined;

/**
 * 
 * @member {String} creator
 */
JsonAnalysisAllOf.prototype['creator'] = undefined;

/**
 * 
 * @member {String} datasetCount
 */
JsonAnalysisAllOf.prototype['datasetCount'] = undefined;






export default JsonAnalysisAllOf;

