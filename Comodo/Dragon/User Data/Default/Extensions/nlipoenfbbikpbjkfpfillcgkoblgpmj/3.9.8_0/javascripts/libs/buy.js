!function(){var a=this,b=function(b,c){var d=b.split("."),e=window||a;d[0]in e||!e.execScript||e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)d.length||void 0===c?e=e[f]?e[f]:e[f]={}:e[f]=c},c=function(a){var b=chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda",{}),c=!1;b.onMessage.addListener(function(b){c=!0,"response"in b&&!("errorType"in b.response)?a.success&&a.success(b):a.failure&&a.failure(b)}),b.onDisconnect.addListener(function(){!c&&a.failure&&a.failure({request:{},response:{errorType:"INTERNAL_SERVER_ERROR"}})}),b.postMessage(a)};b("google.payments.inapp.buy",function(a){a.method="buy",c(a)}),b("google.payments.inapp.getPurchases",function(a){a.method="getPurchases",c(a)}),b("google.payments.inapp.getSkuDetails",function(a){a.method="getSkuDetails",c(a)})}();