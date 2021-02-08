/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.51
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import JsonDiskConfig from './model/JsonDiskConfig';
import JsonEnclavePort from './model/JsonEnclavePort';
import JsonEnclaveProcess from './model/JsonEnclaveProcess';
import JsonEnclaveRunRequest from './model/JsonEnclaveRunRequest';
import JsonEnclaveRunningAttestation from './model/JsonEnclaveRunningAttestation';
import JsonEnclaveRunningAttestationApproval from './model/JsonEnclaveRunningAttestationApproval';
import JsonEnclaveRunningAttestationApprovalAllOf from './model/JsonEnclaveRunningAttestationApprovalAllOf';
import JsonEnvironment from './model/JsonEnvironment';
import JsonEnvironmentPublishingRequest from './model/JsonEnvironmentPublishingRequest';
import JsonIPFSSystemInfo from './model/JsonIPFSSystemInfo';
import JsonKubernetesEnclave from './model/JsonKubernetesEnclave';
import JsonKubernetesEnclaveAllOf from './model/JsonKubernetesEnclaveAllOf';
import JsonMDNAUserObject from './model/JsonMDNAUserObject';
import JsonMDNCertificate from './model/JsonMDNCertificate';
import JsonMDNData from './model/JsonMDNData';
import JsonMDNMailAddress from './model/JsonMDNMailAddress';
import JsonMDNOAuthToken from './model/JsonMDNOAuthToken';
import JsonMDNPasswordReset from './model/JsonMDNPasswordReset';
import JsonMDNSetting from './model/JsonMDNSetting';
import JsonMDNSocialUserObject from './model/JsonMDNSocialUserObject';
import JsonMDNToken from './model/JsonMDNToken';
import JsonMDNUser from './model/JsonMDNUser';
import JsonMDNUserAllOf from './model/JsonMDNUserAllOf';
import JsonMDNUserCredentials from './model/JsonMDNUserCredentials';
import JsonMDNUserProfileImage from './model/JsonMDNUserProfileImage';
import JsonMDNUserSetting from './model/JsonMDNUserSetting';
import JsonMDNUserSettingAllOf from './model/JsonMDNUserSettingAllOf';
import JsonNetworkInterface from './model/JsonNetworkInterface';
import JsonNodeInfo from './model/JsonNodeInfo';
import JsonNodeRunRequest from './model/JsonNodeRunRequest';
import JsonProcess from './model/JsonProcess';
import JsonRunConfig from './model/JsonRunConfig';
import JsonSGXInfo from './model/JsonSGXInfo';
import JsonSignedData from './model/JsonSignedData';
import JsonSignedDataUtils from './model/JsonSignedDataUtils';
import JsonV1Event from './model/JsonV1Event';
import JsonV1EventList from './model/JsonV1EventList';
import JsonV1EventSeries from './model/JsonV1EventSeries';
import JsonV1EventSource from './model/JsonV1EventSource';
import JsonV1ListMeta from './model/JsonV1ListMeta';
import JsonV1ManagedFieldsEntry from './model/JsonV1ManagedFieldsEntry';
import JsonV1ObjectMeta from './model/JsonV1ObjectMeta';
import JsonV1ObjectReference from './model/JsonV1ObjectReference';
import JsonV1OwnerReference from './model/JsonV1OwnerReference';
import JsonWireguardInterface from './model/JsonWireguardInterface';
import JsonWireguardInterfaceAllOf from './model/JsonWireguardInterfaceAllOf';
import XmlNs0DiskConfig from './model/XmlNs0DiskConfig';
import XmlNs0DiskConfigAllOf from './model/XmlNs0DiskConfigAllOf';
import XmlNs0EnclavePort from './model/XmlNs0EnclavePort';
import XmlNs0EnclavePortAllOf from './model/XmlNs0EnclavePortAllOf';
import XmlNs0EnclaveProcess from './model/XmlNs0EnclaveProcess';
import XmlNs0EnclaveProcessAllOf from './model/XmlNs0EnclaveProcessAllOf';
import XmlNs0EnclaveRunningAttestation from './model/XmlNs0EnclaveRunningAttestation';
import XmlNs0EnclaveRunningAttestationAllOf from './model/XmlNs0EnclaveRunningAttestationAllOf';
import XmlNs0EnclaveRunningAttestationApproval from './model/XmlNs0EnclaveRunningAttestationApproval';
import XmlNs0EnclaveRunningAttestationApprovalAllOf from './model/XmlNs0EnclaveRunningAttestationApprovalAllOf';
import XmlNs0Environment from './model/XmlNs0Environment';
import XmlNs0EnvironmentAllOf from './model/XmlNs0EnvironmentAllOf';
import XmlNs0IPFSSystemInfo from './model/XmlNs0IPFSSystemInfo';
import XmlNs0IPFSSystemInfoAllOf from './model/XmlNs0IPFSSystemInfoAllOf';
import XmlNs0InputStream from './model/XmlNs0InputStream';
import XmlNs0KubernetesEnclave from './model/XmlNs0KubernetesEnclave';
import XmlNs0KubernetesEnclaveAllOf from './model/XmlNs0KubernetesEnclaveAllOf';
import XmlNs0MDNSetting from './model/XmlNs0MDNSetting';
import XmlNs0MDNSettingAllOf from './model/XmlNs0MDNSettingAllOf';
import XmlNs0MDNUserProfileImage from './model/XmlNs0MDNUserProfileImage';
import XmlNs0MDNUserProfileImageAllOf from './model/XmlNs0MDNUserProfileImageAllOf';
import XmlNs0MDNUserSetting from './model/XmlNs0MDNUserSetting';
import XmlNs0MDNUserSettingAllOf from './model/XmlNs0MDNUserSettingAllOf';
import XmlNs0NetworkInterface from './model/XmlNs0NetworkInterface';
import XmlNs0NetworkInterfaceAllOf from './model/XmlNs0NetworkInterfaceAllOf';
import XmlNs0NodeInfo from './model/XmlNs0NodeInfo';
import XmlNs0NodeInfoAllOf from './model/XmlNs0NodeInfoAllOf';
import XmlNs0Process from './model/XmlNs0Process';
import XmlNs0RunConfig from './model/XmlNs0RunConfig';
import XmlNs0RunConfigAllOf from './model/XmlNs0RunConfigAllOf';
import XmlNs0SGXInfo from './model/XmlNs0SGXInfo';
import XmlNs0SGXInfoAllOf from './model/XmlNs0SGXInfoAllOf';
import XmlNs0SignedData from './model/XmlNs0SignedData';
import XmlNs0SignedDataAllOf from './model/XmlNs0SignedDataAllOf';
import XmlNs0WireguardInterface from './model/XmlNs0WireguardInterface';
import XmlNs0WireguardInterfaceAllOf from './model/XmlNs0WireguardInterfaceAllOf';
import AccountServiceApi from './api/AccountServiceApi';
import AuthenticationServiceApi from './api/AuthenticationServiceApi';
import CertificateServiceApi from './api/CertificateServiceApi';
import DataCollectionServiceApi from './api/DataCollectionServiceApi';
import EnclaveServiceApi from './api/EnclaveServiceApi';
import EnvironmentServiceApi from './api/EnvironmentServiceApi';
import InvoiceServiceApi from './api/InvoiceServiceApi';
import NodeServiceApi from './api/NodeServiceApi';
import OrganizationServiceApi from './api/OrganizationServiceApi';
import RequestServiceApi from './api/RequestServiceApi';
import SocialPlatformServiceApi from './api/SocialPlatformServiceApi';
import SocialServiceApi from './api/SocialServiceApi';
import SubscriptionServiceApi from './api/SubscriptionServiceApi';
import SystemServiceApi from './api/SystemServiceApi';
import UserServiceApi from './api/UserServiceApi';


/**
* h1Using_the_madana_api_h1_______pThis_documentation_contains_a_Quickstart_Guide_relating_client_functionality_and_information_about_the_available________endpoints_and_used_datamodels_____p_____p_The_madana_api_and_its_implementations_are_still_in_heavy_development__This_means_that_there_may_be_problems_in_our_protocols_or_there_may_be_mistakes_in_our_implementations__We_take_security_vulnerabilities_very_seriously__If_you_discover_a_security_issue_please_bring_it_to_our_attention_right_away_If_you_find_a_vulnerability_that_may_affect_live_deployments____for_example_by_exposing_a_remote_execution_exploit____please_send_your_report_privately_to_infomadana_io__Please_DO_NOT_file_a_public_issue__If_the_issue_is_a_protocol_weakness_that_cannot_be_immediately_exploited_or_something_not_yet_deployed_just_discuss_it_openly____p__br__p_Note_Not_all_functionality_might_be_acessible_without_having_accquired_and_api_license_token__For_more_information_visit_a_hrefhttps__www_madana_iowww_madana_io_a__p______br.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MadanaApiclient = require('index'); // See note below*.
* var xxxSvc = new MadanaApiclient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MadanaApiclient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MadanaApiclient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MadanaApiclient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.5.0-master.51
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The JsonDiskConfig model constructor.
     * @property {module:model/JsonDiskConfig}
     */
    JsonDiskConfig,

    /**
     * The JsonEnclavePort model constructor.
     * @property {module:model/JsonEnclavePort}
     */
    JsonEnclavePort,

    /**
     * The JsonEnclaveProcess model constructor.
     * @property {module:model/JsonEnclaveProcess}
     */
    JsonEnclaveProcess,

    /**
     * The JsonEnclaveRunRequest model constructor.
     * @property {module:model/JsonEnclaveRunRequest}
     */
    JsonEnclaveRunRequest,

    /**
     * The JsonEnclaveRunningAttestation model constructor.
     * @property {module:model/JsonEnclaveRunningAttestation}
     */
    JsonEnclaveRunningAttestation,

    /**
     * The JsonEnclaveRunningAttestationApproval model constructor.
     * @property {module:model/JsonEnclaveRunningAttestationApproval}
     */
    JsonEnclaveRunningAttestationApproval,

    /**
     * The JsonEnclaveRunningAttestationApprovalAllOf model constructor.
     * @property {module:model/JsonEnclaveRunningAttestationApprovalAllOf}
     */
    JsonEnclaveRunningAttestationApprovalAllOf,

    /**
     * The JsonEnvironment model constructor.
     * @property {module:model/JsonEnvironment}
     */
    JsonEnvironment,

    /**
     * The JsonEnvironmentPublishingRequest model constructor.
     * @property {module:model/JsonEnvironmentPublishingRequest}
     */
    JsonEnvironmentPublishingRequest,

    /**
     * The JsonIPFSSystemInfo model constructor.
     * @property {module:model/JsonIPFSSystemInfo}
     */
    JsonIPFSSystemInfo,

    /**
     * The JsonKubernetesEnclave model constructor.
     * @property {module:model/JsonKubernetesEnclave}
     */
    JsonKubernetesEnclave,

    /**
     * The JsonKubernetesEnclaveAllOf model constructor.
     * @property {module:model/JsonKubernetesEnclaveAllOf}
     */
    JsonKubernetesEnclaveAllOf,

    /**
     * The JsonMDNAUserObject model constructor.
     * @property {module:model/JsonMDNAUserObject}
     */
    JsonMDNAUserObject,

    /**
     * The JsonMDNCertificate model constructor.
     * @property {module:model/JsonMDNCertificate}
     */
    JsonMDNCertificate,

    /**
     * The JsonMDNData model constructor.
     * @property {module:model/JsonMDNData}
     */
    JsonMDNData,

    /**
     * The JsonMDNMailAddress model constructor.
     * @property {module:model/JsonMDNMailAddress}
     */
    JsonMDNMailAddress,

    /**
     * The JsonMDNOAuthToken model constructor.
     * @property {module:model/JsonMDNOAuthToken}
     */
    JsonMDNOAuthToken,

    /**
     * The JsonMDNPasswordReset model constructor.
     * @property {module:model/JsonMDNPasswordReset}
     */
    JsonMDNPasswordReset,

    /**
     * The JsonMDNSetting model constructor.
     * @property {module:model/JsonMDNSetting}
     */
    JsonMDNSetting,

    /**
     * The JsonMDNSocialUserObject model constructor.
     * @property {module:model/JsonMDNSocialUserObject}
     */
    JsonMDNSocialUserObject,

    /**
     * The JsonMDNToken model constructor.
     * @property {module:model/JsonMDNToken}
     */
    JsonMDNToken,

    /**
     * The JsonMDNUser model constructor.
     * @property {module:model/JsonMDNUser}
     */
    JsonMDNUser,

    /**
     * The JsonMDNUserAllOf model constructor.
     * @property {module:model/JsonMDNUserAllOf}
     */
    JsonMDNUserAllOf,

    /**
     * The JsonMDNUserCredentials model constructor.
     * @property {module:model/JsonMDNUserCredentials}
     */
    JsonMDNUserCredentials,

    /**
     * The JsonMDNUserProfileImage model constructor.
     * @property {module:model/JsonMDNUserProfileImage}
     */
    JsonMDNUserProfileImage,

    /**
     * The JsonMDNUserSetting model constructor.
     * @property {module:model/JsonMDNUserSetting}
     */
    JsonMDNUserSetting,

    /**
     * The JsonMDNUserSettingAllOf model constructor.
     * @property {module:model/JsonMDNUserSettingAllOf}
     */
    JsonMDNUserSettingAllOf,

    /**
     * The JsonNetworkInterface model constructor.
     * @property {module:model/JsonNetworkInterface}
     */
    JsonNetworkInterface,

    /**
     * The JsonNodeInfo model constructor.
     * @property {module:model/JsonNodeInfo}
     */
    JsonNodeInfo,

    /**
     * The JsonNodeRunRequest model constructor.
     * @property {module:model/JsonNodeRunRequest}
     */
    JsonNodeRunRequest,

    /**
     * The JsonProcess model constructor.
     * @property {module:model/JsonProcess}
     */
    JsonProcess,

    /**
     * The JsonRunConfig model constructor.
     * @property {module:model/JsonRunConfig}
     */
    JsonRunConfig,

    /**
     * The JsonSGXInfo model constructor.
     * @property {module:model/JsonSGXInfo}
     */
    JsonSGXInfo,

    /**
     * The JsonSignedData model constructor.
     * @property {module:model/JsonSignedData}
     */
    JsonSignedData,

    /**
     * The JsonSignedDataUtils model constructor.
     * @property {module:model/JsonSignedDataUtils}
     */
    JsonSignedDataUtils,

    /**
     * The JsonV1Event model constructor.
     * @property {module:model/JsonV1Event}
     */
    JsonV1Event,

    /**
     * The JsonV1EventList model constructor.
     * @property {module:model/JsonV1EventList}
     */
    JsonV1EventList,

    /**
     * The JsonV1EventSeries model constructor.
     * @property {module:model/JsonV1EventSeries}
     */
    JsonV1EventSeries,

    /**
     * The JsonV1EventSource model constructor.
     * @property {module:model/JsonV1EventSource}
     */
    JsonV1EventSource,

    /**
     * The JsonV1ListMeta model constructor.
     * @property {module:model/JsonV1ListMeta}
     */
    JsonV1ListMeta,

    /**
     * The JsonV1ManagedFieldsEntry model constructor.
     * @property {module:model/JsonV1ManagedFieldsEntry}
     */
    JsonV1ManagedFieldsEntry,

    /**
     * The JsonV1ObjectMeta model constructor.
     * @property {module:model/JsonV1ObjectMeta}
     */
    JsonV1ObjectMeta,

    /**
     * The JsonV1ObjectReference model constructor.
     * @property {module:model/JsonV1ObjectReference}
     */
    JsonV1ObjectReference,

    /**
     * The JsonV1OwnerReference model constructor.
     * @property {module:model/JsonV1OwnerReference}
     */
    JsonV1OwnerReference,

    /**
     * The JsonWireguardInterface model constructor.
     * @property {module:model/JsonWireguardInterface}
     */
    JsonWireguardInterface,

    /**
     * The JsonWireguardInterfaceAllOf model constructor.
     * @property {module:model/JsonWireguardInterfaceAllOf}
     */
    JsonWireguardInterfaceAllOf,

    /**
     * The XmlNs0DiskConfig model constructor.
     * @property {module:model/XmlNs0DiskConfig}
     */
    XmlNs0DiskConfig,

    /**
     * The XmlNs0DiskConfigAllOf model constructor.
     * @property {module:model/XmlNs0DiskConfigAllOf}
     */
    XmlNs0DiskConfigAllOf,

    /**
     * The XmlNs0EnclavePort model constructor.
     * @property {module:model/XmlNs0EnclavePort}
     */
    XmlNs0EnclavePort,

    /**
     * The XmlNs0EnclavePortAllOf model constructor.
     * @property {module:model/XmlNs0EnclavePortAllOf}
     */
    XmlNs0EnclavePortAllOf,

    /**
     * The XmlNs0EnclaveProcess model constructor.
     * @property {module:model/XmlNs0EnclaveProcess}
     */
    XmlNs0EnclaveProcess,

    /**
     * The XmlNs0EnclaveProcessAllOf model constructor.
     * @property {module:model/XmlNs0EnclaveProcessAllOf}
     */
    XmlNs0EnclaveProcessAllOf,

    /**
     * The XmlNs0EnclaveRunningAttestation model constructor.
     * @property {module:model/XmlNs0EnclaveRunningAttestation}
     */
    XmlNs0EnclaveRunningAttestation,

    /**
     * The XmlNs0EnclaveRunningAttestationAllOf model constructor.
     * @property {module:model/XmlNs0EnclaveRunningAttestationAllOf}
     */
    XmlNs0EnclaveRunningAttestationAllOf,

    /**
     * The XmlNs0EnclaveRunningAttestationApproval model constructor.
     * @property {module:model/XmlNs0EnclaveRunningAttestationApproval}
     */
    XmlNs0EnclaveRunningAttestationApproval,

    /**
     * The XmlNs0EnclaveRunningAttestationApprovalAllOf model constructor.
     * @property {module:model/XmlNs0EnclaveRunningAttestationApprovalAllOf}
     */
    XmlNs0EnclaveRunningAttestationApprovalAllOf,

    /**
     * The XmlNs0Environment model constructor.
     * @property {module:model/XmlNs0Environment}
     */
    XmlNs0Environment,

    /**
     * The XmlNs0EnvironmentAllOf model constructor.
     * @property {module:model/XmlNs0EnvironmentAllOf}
     */
    XmlNs0EnvironmentAllOf,

    /**
     * The XmlNs0IPFSSystemInfo model constructor.
     * @property {module:model/XmlNs0IPFSSystemInfo}
     */
    XmlNs0IPFSSystemInfo,

    /**
     * The XmlNs0IPFSSystemInfoAllOf model constructor.
     * @property {module:model/XmlNs0IPFSSystemInfoAllOf}
     */
    XmlNs0IPFSSystemInfoAllOf,

    /**
     * The XmlNs0InputStream model constructor.
     * @property {module:model/XmlNs0InputStream}
     */
    XmlNs0InputStream,

    /**
     * The XmlNs0KubernetesEnclave model constructor.
     * @property {module:model/XmlNs0KubernetesEnclave}
     */
    XmlNs0KubernetesEnclave,

    /**
     * The XmlNs0KubernetesEnclaveAllOf model constructor.
     * @property {module:model/XmlNs0KubernetesEnclaveAllOf}
     */
    XmlNs0KubernetesEnclaveAllOf,

    /**
     * The XmlNs0MDNSetting model constructor.
     * @property {module:model/XmlNs0MDNSetting}
     */
    XmlNs0MDNSetting,

    /**
     * The XmlNs0MDNSettingAllOf model constructor.
     * @property {module:model/XmlNs0MDNSettingAllOf}
     */
    XmlNs0MDNSettingAllOf,

    /**
     * The XmlNs0MDNUserProfileImage model constructor.
     * @property {module:model/XmlNs0MDNUserProfileImage}
     */
    XmlNs0MDNUserProfileImage,

    /**
     * The XmlNs0MDNUserProfileImageAllOf model constructor.
     * @property {module:model/XmlNs0MDNUserProfileImageAllOf}
     */
    XmlNs0MDNUserProfileImageAllOf,

    /**
     * The XmlNs0MDNUserSetting model constructor.
     * @property {module:model/XmlNs0MDNUserSetting}
     */
    XmlNs0MDNUserSetting,

    /**
     * The XmlNs0MDNUserSettingAllOf model constructor.
     * @property {module:model/XmlNs0MDNUserSettingAllOf}
     */
    XmlNs0MDNUserSettingAllOf,

    /**
     * The XmlNs0NetworkInterface model constructor.
     * @property {module:model/XmlNs0NetworkInterface}
     */
    XmlNs0NetworkInterface,

    /**
     * The XmlNs0NetworkInterfaceAllOf model constructor.
     * @property {module:model/XmlNs0NetworkInterfaceAllOf}
     */
    XmlNs0NetworkInterfaceAllOf,

    /**
     * The XmlNs0NodeInfo model constructor.
     * @property {module:model/XmlNs0NodeInfo}
     */
    XmlNs0NodeInfo,

    /**
     * The XmlNs0NodeInfoAllOf model constructor.
     * @property {module:model/XmlNs0NodeInfoAllOf}
     */
    XmlNs0NodeInfoAllOf,

    /**
     * The XmlNs0Process model constructor.
     * @property {module:model/XmlNs0Process}
     */
    XmlNs0Process,

    /**
     * The XmlNs0RunConfig model constructor.
     * @property {module:model/XmlNs0RunConfig}
     */
    XmlNs0RunConfig,

    /**
     * The XmlNs0RunConfigAllOf model constructor.
     * @property {module:model/XmlNs0RunConfigAllOf}
     */
    XmlNs0RunConfigAllOf,

    /**
     * The XmlNs0SGXInfo model constructor.
     * @property {module:model/XmlNs0SGXInfo}
     */
    XmlNs0SGXInfo,

    /**
     * The XmlNs0SGXInfoAllOf model constructor.
     * @property {module:model/XmlNs0SGXInfoAllOf}
     */
    XmlNs0SGXInfoAllOf,

    /**
     * The XmlNs0SignedData model constructor.
     * @property {module:model/XmlNs0SignedData}
     */
    XmlNs0SignedData,

    /**
     * The XmlNs0SignedDataAllOf model constructor.
     * @property {module:model/XmlNs0SignedDataAllOf}
     */
    XmlNs0SignedDataAllOf,

    /**
     * The XmlNs0WireguardInterface model constructor.
     * @property {module:model/XmlNs0WireguardInterface}
     */
    XmlNs0WireguardInterface,

    /**
     * The XmlNs0WireguardInterfaceAllOf model constructor.
     * @property {module:model/XmlNs0WireguardInterfaceAllOf}
     */
    XmlNs0WireguardInterfaceAllOf,

    /**
    * The AccountServiceApi service constructor.
    * @property {module:api/AccountServiceApi}
    */
    AccountServiceApi,

    /**
    * The AuthenticationServiceApi service constructor.
    * @property {module:api/AuthenticationServiceApi}
    */
    AuthenticationServiceApi,

    /**
    * The CertificateServiceApi service constructor.
    * @property {module:api/CertificateServiceApi}
    */
    CertificateServiceApi,

    /**
    * The DataCollectionServiceApi service constructor.
    * @property {module:api/DataCollectionServiceApi}
    */
    DataCollectionServiceApi,

    /**
    * The EnclaveServiceApi service constructor.
    * @property {module:api/EnclaveServiceApi}
    */
    EnclaveServiceApi,

    /**
    * The EnvironmentServiceApi service constructor.
    * @property {module:api/EnvironmentServiceApi}
    */
    EnvironmentServiceApi,

    /**
    * The InvoiceServiceApi service constructor.
    * @property {module:api/InvoiceServiceApi}
    */
    InvoiceServiceApi,

    /**
    * The NodeServiceApi service constructor.
    * @property {module:api/NodeServiceApi}
    */
    NodeServiceApi,

    /**
    * The OrganizationServiceApi service constructor.
    * @property {module:api/OrganizationServiceApi}
    */
    OrganizationServiceApi,

    /**
    * The RequestServiceApi service constructor.
    * @property {module:api/RequestServiceApi}
    */
    RequestServiceApi,

    /**
    * The SocialPlatformServiceApi service constructor.
    * @property {module:api/SocialPlatformServiceApi}
    */
    SocialPlatformServiceApi,

    /**
    * The SocialServiceApi service constructor.
    * @property {module:api/SocialServiceApi}
    */
    SocialServiceApi,

    /**
    * The SubscriptionServiceApi service constructor.
    * @property {module:api/SubscriptionServiceApi}
    */
    SubscriptionServiceApi,

    /**
    * The SystemServiceApi service constructor.
    * @property {module:api/SystemServiceApi}
    */
    SystemServiceApi,

    /**
    * The UserServiceApi service constructor.
    * @property {module:api/UserServiceApi}
    */
    UserServiceApi
};
