/**
 * @ngdoc overview
 * @name Vinston Sundara Pandiyan
 * @description Workflow UI Project
 * # templeSevaUiApp
 *
 * Main module of the application.
 */
var AppConstants = {
    'ADMIN_USERNAME': 'admin',
    'ADMIN_PASSWORD': 'admin',
    'PROCESSES_PER_PAGE': 5,
    'TASKS_PER_PAGE': 10,
    'PANEL_TYPE_ACTIVE': 'active',
    'PANEL_TYPE_QUEUED': 'queued',
    'PANEL_TYPE_COMPLETE': 'complete',
    'PURCHASING_AGENTS': 'GateKeeper',
    'PURCHASING_MANAGERS': 'purchasingManagers',
	//'GROUPETEAM' : 'GroupeTeam',
	'GROUPETEAM' : 'GroupeTeamReview',
	'CONTENT_TEAM' :'ContentTeam',
    'SDI_TEAM' : 'SDITeam',
    'DEPLOYED_PROCESSES_PER_PAGE' : 15,
    'PROCESSES_INSTANCE_PER_PAGE' : 4,
    'AVAILABLE_FIELDS_PER_PAGE' : 5,
    'SELECTED_FIELDS_PER_PAGE' : 5
}
var tabType = null;
var reportDetails = null;
angular.module('templeSevaUiApp').constant('ConfigURL', {
    //'BaseURL': 'http://cimm2v4test.cimm2.com/cimm2bcentral/',
	//BaseURL : "http://192.168.2.211:9080/cimm2bcentral/",
    //'BaseURL' : "http://localhost:8080/cimm2bcentral/",
	//'BaseURL' : 'http://cimm2v4test.cimm2.com/cimm2bcentral/',
	//BaseURL : "http://groupedeschenes.cimm2.com/cimm2bcentral/",
	'BaseURL' : "https://hermes.cimm2.com/cimm2bcentralprod/", 
	'ImageBaseURL' : 'https://hermes.cimm2.com',
    'TenantId': 'Unilog',
    'Deployments': '/unilog/rest/workflow/repository/deployments',
    'Tasks': '/unilog/rest/workflow/runtime/tasks',
	'SaveBatchId' : '/unilog/rest/workflow/saveBatchId',
    'GoDetails' : 'http://cimm2v4test.cimm2.com/CIMM2Touch/BatchApproveListener?entityType=import&batchId=',
    'DeleteBatchId' :'/unilog/rest/workflow/deleteBatchId',
    'customProcessDefinitions':'unilog/rest/workflow/repository/custom-process-definitions/',
	'Comments' :'/unilog/rest/workflow/runtime/comments',
	'Attachments' :'/unilog/rest/workflow/runtime/attachments',
	'BatchDetails': '/unilog/rest/workflow/batchDetails',
    'MyInstance' : '/unilog/rest/workflow/runtime/process-instances/',
    'MyTaskCurrentStatus' : '/unilog/rest/workflow/history/custom-historic-task-instances',
    'ProcessDefinitions' : '/unilog/rest/workflow/repository/process-definitions',
	'UserList' : '/admin/user/getUserListByRoleId',
	'User' :'/admin/user/getUserByUserName',
	'EmailNotification' : '/unilog/rest/workflow/sendEmailNotification',
    'CompletedTasks': '/unilog/rest/workflow/history/historic-task-instances',
    'CompletedTaskItemDetails': '/unilog/rest/workflow/history/historic-detail/',
    'ItemIdFromTask': '/unilog/rest/workflow/runtime/item/tasks/',
    'SearchActiveTaskByPartNumber': '/unilog/rest/workflow/searchActiveTaskByVariable',
    'SearchQueuedTaskByPartNumber': '/unilog/rest/workflow/searchQueuedTaskByVariable',
    'SearchCompleteTaskByPartNumber': '/unilog/rest/workflow/searchHistoryTaskByVariable',
    'LoadModuleDetailsForItemView': 'admin/rolemodulefield/getAllModuleDetailsByUserNameModuleName',
    'GetAllAdminAvailableFields':'/unilog/rest/workflow/getAllWfAdminAvailableFields',
    'GetAllAdminSelectedFields':'/unilog/rest/workflow/getAllWfAdminSelectedFields',
    'SaveSelectedFields':'/unilog/rest/workflow/selectAvailableFields/',
    'RemoveSelectedFields':'/unilog/rest/workflow/removeSelectedFields',
    'GetAllEntityNames':'/unilog/rest/workflow/getAllEntityNames',

    // 'Username': username,
    // 'CandidateGroups': userroles    
});

angular.module('templeSevaUiApp').constant('ItemTaskFields', {
    'batchDescription' : 'Batch Description',
	'batchId' : 'Batch Id',
	'fileName' : 'batch Name',
	'createBy' :'Create By',
	'listPrice': 'List Price',
    'costPrice': 'Cost Price',
    'partNumber': 'Part Number',
    'manufacturerPartNumber': 'Manufacturer Part Number',
    'netPrice' : 'Net Price'
});

angular.module('templeSevaUiApp').constant('AuthConfig', {
    'Username': 'admin',
    'Password': 'admin'
});

angular.module('templeSevaUiApp').constant('CIMM2BCentralItemDemoServerAuth', {
    'Username': 'cimm2bclient',
    'Password': '@c!mm@bcl!ent',
});

angular.module('templeSevaUiApp').filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});

