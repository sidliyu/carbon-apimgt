/*
 * Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
var apiName;
var version;
var provider;
$(function () {
    apiName = store.publisher.apiIdentifier.name;
    version = store.publisher.apiIdentifier.version;
    provider = store.publisher.apiIdentifier.provider;
});

function downloadDocument(filePath, tenantDomain) {
    var url = '/registry/resourceContent?tenant=' + tenantDomain + '&path=' + filePath.split('registry/resource')[1];
    window.open(url, '_blank');
}

function viewDocument(docName, tenantDomain) {
    var urlPrefix;
    if (tenantDomain != null) {
        urlPrefix = "&tenant=" + tenantDomain;
    } else {
        urlPrefix = '';
    }
    var url = caramel.context + '/assets/api/view_document?docName=' + docName + '&name=' + apiName + '&version='
              + version + '&provider=' + provider + urlPrefix;
    window.open(url, '_blank');
}