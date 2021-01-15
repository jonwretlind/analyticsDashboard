var AdwordsUser = JSON.parse(AdwordsUser);
var AdwordsConstants = JSON.parse(AdwordsConstants);

let user = new AdwordsUser({
    developerToken: 'kOtPuZXM_eCivcruqaqQSQ', //your adwords developerToken
    userAgent: 'Jon C. Wretlind Graphics', //any company name
    clientCustomerId: '760-967-1894', //the Adwords Account id (e.g. 123-123-123)
    client_id: '178364157751-k72vsu1o0t37rpvtssu27hvtf69o96h8.apps.googleusercontent.com', //this is the api console client_id
    client_secret: 'ouZCUYfEtB9BEPIoiPfX9lYO',
    refresh_token: '1/cJ7jqZ8AymHRzNEqGaP7e2GqVu-pG9DSVpisB7gBr8w'
});

let campaignService = user.getService('CampaignService', 'v201809')

//create selector
let selector = {
    fields: ['Id', 'Name'],
    ordering: [{field: 'Name', sortOrder: 'ASCENDING'}],
    paging: {startIndex: 0, numberResults: AdwordsConstants.RECOMMENDED_PAGE_SIZE}
}

campaignService.get({serviceSelector: selector}, (error, result) => {
    console.log(error, result);
})
