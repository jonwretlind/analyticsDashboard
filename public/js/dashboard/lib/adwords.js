var gAds = document.getElementById('GoogleAds');
var sanitizedResult = result.replace(/&quot;/g, '"');
var sanitizedResult = sanitizedResult.replace(/&lt;/g, '<');
var sanitizedResult = sanitizedResult.replace(/&gt;/g, '>');
var resObj = JSON.parse(sanitizedResult);

console.log("==== GOOGLE ADS DATA ====");
console.log(resObj);

resObj.entries.forEach( ele => {
  var budget; if ( ele.budget === null ) budget = 0;
  var campaignHTML = "<div class='info-block'>"
                    + "<span><strong>ID: </strong></span><span>" + ele.id
                    + "</span><span><strong>Name: </strong></span><span>" + ele.name
                    + "</span><span><strong>Budget: </strong></span><span>$" + budget + "</span></div>"
  gAds.innerHTML += campaignHTML;
})
