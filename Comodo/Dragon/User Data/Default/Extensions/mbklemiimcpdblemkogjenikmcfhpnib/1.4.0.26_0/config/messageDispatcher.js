(function(){var b=!0,a=null;(function(X){function x(v){if("bug-string-char-index"==v){return"a"!="a"[0]}var p,s="json"==v;if(s||"json-stringify"==v||"json-parse"==v){if("json-stringify"==v||s){var r=ac.stringify,u="function"==typeof r&&ab;if(u){(p=function(){return 1}).toJSON=p;try{u="0"===r(0)&&"0"===r(new Number)&&'""'==r(new String)&&r(aa)===V&&r(V)===V&&r()===V&&"1"===r(p)&&"[1]"==r([p])&&"[null]"==r([V])&&"null"==r(a)&&"[null,null,null]"==r([V,aa,a])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==r({a:[p,b,!1,a,"\x00\u0008\n\u000c\r\t"]})&&"1"===r(a,p)&&"[\n 1,\n 2\n]"==r([1,2],a,1)&&'"-271821-04-20T00:00:00.000Z"'==r(new Date(-8640000000000000))&&'"+275760-09-13T00:00:00.000Z"'==r(new Date(8640000000000000))&&'"-000001-01-01T00:00:00.000Z"'==r(new Date(-62198755200000))&&'"1969-12-31T23:59:59.999Z"'==r(new Date(-1))}catch(j){u=!1}}if(!s){return u}}if("json-parse"==v||s){v=ac.parse;if("function"==typeof v){try{if(0===v("0")&&!v(!1)){p=v('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var q=5==p.a.length&&1===p.a[0];if(q){try{q=!v('"\t"')}catch(l){}if(q){try{q=1!==v("01")}catch(k){}}}}}catch(m){q=!1}}if(!s){return q}}return u&&q}}var aa={}.toString,Z,U,V,T=typeof define==="function"&&define.amd,ac="object"==typeof exports&&exports;ac||T?"object"==typeof ctaJSON&&ctaJSON?ac?(ac.stringify=ctaJSON.stringify,ac.parse=ctaJSON.parse):ac=ctaJSON:T&&(ac=X.ctaJSON={}):ac=X.ctaJSON||(X.ctaJSON={});var ab=new Date(-3509827334573292);try{ab=-109252==ab.getUTCFullYear()&&0===ab.getUTCMonth()&&1===ab.getUTCDate()&&10==ab.getUTCHours()&&37==ab.getUTCMinutes()&&6==ab.getUTCSeconds()&&708==ab.getUTCMilliseconds()}catch(c){}if(!x("json")){var S=x("bug-string-char-index");if(!ab){var R=Math.floor,i=[0,31,59,90,120,151,181,212,243,273,304,334],h=function(j,k){return i[k]+365*(j-1970)+R((j-1969+(k=+(k>1)))/4)-R((j-1901+k)/100)+R((j-1601+k)/400)}}if(!(Z={}.hasOwnProperty)){Z=function(j){var k={},l;if((k.__proto__=a,k.__proto__={toString:1},k).toString!=aa){Z=function(m){var p=this.__proto__,m=m in (this.__proto__=a,this);this.__proto__=p;return m}}else{l=k.constructor;Z=function(m){var p=(this.constructor||l).prototype;return m in this&&!(m in p&&this[m]===p[m])}}k=a;return Z.call(this,j)}}var g={"boolean":1,number:1,string:1,undefined:1};U=function(k,m){var q=0,j,l,p;(j=function(){this.valueOf=0}).prototype.valueOf=0;l=new j;for(p in l){Z.call(l,p)&&q++}j=l=a;if(q){q=q==2?function(s,u){var z={},r=aa.call(s)=="[object Function]",v;for(v in s){!(r&&v=="prototype")&&!Z.call(z,v)&&(z[v]=1)&&Z.call(s,v)&&u(v)}}:function(s,u){var z=aa.call(s)=="[object Function]",r,v;for(r in s){!(z&&r=="prototype")&&Z.call(s,r)&&!(v=r==="constructor")&&u(r)}(v||Z.call(s,r="constructor"))&&u(r)}}else{l=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];q=function(s,u){var z=aa.call(s)=="[object Function]",r,v;if(v=!z){if(v=typeof s.constructor!="function"){v=typeof s.hasOwnProperty;v=v=="object"?!!s.hasOwnProperty:!g[v]}}v=v?s.hasOwnProperty:Z;for(r in s){!(z&&r=="prototype")&&v.call(s,r)&&u(r)}for(z=l.length;r=l[--z];v.call(s,r)&&u(r)){}}}q(k,m)};if(!x("json-stringify")){var f={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},O=function(j,k){return("000000"+(k||0)).slice(-j)},w=function(k){var m='"',j=0,q=k.length,l=q>10&&S,r;for(l&&(r=k.split(""));j<q;j++){var p=k.charCodeAt(j);switch(p){case 8:case 9:case 10:case 12:case 13:case 34:case 92:m=m+f[p];break;default:if(p<32){m=m+("\\u00"+O(2,p.toString(16)));break}m=m+(l?r[j]:S?k.charAt(j):k[j])}}return m+'"'},Q=function(N,M,L,K,H,C,J){var I=M[N],G,F,E,D,z,u,r,p,m;try{I=M[N]}catch(B){}if(typeof I=="object"&&I){G=aa.call(I);if(G=="[object Date]"&&!Z.call(I,"toJSON")){if(I>-1/0&&I<1/0){if(h){E=R(I/86400000);for(G=R(E/365.2425)+1970-1;h(G+1,0)<=E;G++){}for(F=R((E-h(G,0))/30.42);h(G,F+1)<=E;F++){}E=1+E-h(G,F);D=(I%86400000+86400000)%86400000;z=R(D/3600000)%24;u=R(D/60000)%60;r=R(D/1000)%60;D=D%1000}else{G=I.getUTCFullYear();F=I.getUTCMonth();E=I.getUTCDate();z=I.getUTCHours();u=I.getUTCMinutes();r=I.getUTCSeconds();D=I.getUTCMilliseconds()}I=(G<=0||G>=10000?(G<0?"-":"+")+O(6,G<0?-G:G):O(4,G))+"-"+O(2,F+1)+"-"+O(2,E)+"T"+O(2,z)+":"+O(2,u)+":"+O(2,r)+"."+O(3,D)+"Z"}else{I=a}}else{if(typeof I.toJSON=="function"&&(G!="[object Number]"&&G!="[object String]"&&G!="[object Array]"||Z.call(I,"toJSON"))){I=I.toJSON(N)}}}L&&(I=L.call(M,N,I));if(I===a){return"null"}G=aa.call(I);if(G=="[object Boolean]"){return""+I}if(G=="[object Number]"){return I>-1/0&&I<1/0?""+I:"null"}if(G=="[object String]"){return w(""+I)}if(typeof I=="object"){for(N=J.length;N--;){if(J[N]===I){throw TypeError()}}J.push(I);p=[];M=C;C=C+H;if(G=="[object Array]"){F=0;for(N=I.length;F<N;m||(m=b),F++){G=Q(F,I,L,K,H,C,J);p.push(G===V?"null":G)}N=m?H?"[\n"+C+p.join(",\n"+C)+"\n"+M+"]":"["+p.join(",")+"]":"[]"}else{U(K||I,function(k){var j=Q(k,I,L,K,H,C,J);j!==V&&p.push(w(k)+":"+(H?" ":"")+j);m||(m=b)});N=m?H?"{\n"+C+p.join(",\n"+C)+"\n"+M+"}":"{"+p.join(",")+"}":"{}"}J.pop();return N}};ac.stringify=function(v,u,s){var r,m,k;if(typeof u=="function"||typeof u=="object"&&u){if(aa.call(u)=="[object Function]"){m=u}else{if(aa.call(u)=="[object Array]"){k={};for(var q=0,p=u.length,l;q<p;l=u[q++],(aa.call(l)=="[object String]"||aa.call(l)=="[object Number]")&&(k[l]=1)){}}}}if(s){if(aa.call(s)=="[object Number]"){if((s=s-s%1)>0){r="";for(s>10&&(s=10);r.length<s;r=r+" "){}}}else{aa.call(s)=="[object String]"&&(r=s.length<=10?s:s.slice(0,10))}}return Q("",(l={},l[""]=v,l),m,k,r,"",[])}}if(!x("json-parse")){var e=String.fromCharCode,d={92:"\\",34:'"',47:"/",98:"\u0008",116:"\t",110:"\n",102:"\u000c",114:"\r"},ae,Y,ad=function(){ae=Y=a;throw SyntaxError()},W=function(){for(var j=Y,p=j.length,s,r,m,l,q;ae<p;){q=j.charCodeAt(ae);switch(q){case 9:case 10:case 13:case 32:ae++;break;case 123:case 125:case 91:case 93:case 58:case 44:s=S?j.charAt(ae):j[ae];ae++;return s;case 34:s="@";for(ae++;ae<p;){q=j.charCodeAt(ae);if(q<32){ad()}else{if(q==92){q=j.charCodeAt(++ae);switch(q){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:s=s+d[q];ae++;break;case 117:r=++ae;for(m=ae+4;ae<m;ae++){q=j.charCodeAt(ae);q>=48&&q<=57||q>=97&&q<=102||q>=65&&q<=70||ad()}s=s+e("0x"+j.slice(r,ae));break;default:ad()}}else{if(q==34){break}q=j.charCodeAt(ae);for(r=ae;q>=32&&q!=92&&q!=34;){q=j.charCodeAt(++ae)}s=s+j.slice(r,ae)}}}if(j.charCodeAt(ae)==34){ae++;return s}ad();default:r=ae;if(q==45){l=b;q=j.charCodeAt(++ae)}if(q>=48&&q<=57){for(q==48&&(q=j.charCodeAt(ae+1),q>=48&&q<=57)&&ad();ae<p&&(q=j.charCodeAt(ae),q>=48&&q<=57);ae++){}if(j.charCodeAt(ae)==46){for(m=++ae;m<p&&(q=j.charCodeAt(m),q>=48&&q<=57);m++){}m==ae&&ad();ae=m}q=j.charCodeAt(ae);if(q==101||q==69){q=j.charCodeAt(++ae);(q==43||q==45)&&ae++;for(m=ae;m<p&&(q=j.charCodeAt(m),q>=48&&q<=57);m++){}m==ae&&ad();ae=m}return +j.slice(r,ae)}l&&ad();if(j.slice(ae,ae+4)=="true"){ae=ae+4;return b}if(j.slice(ae,ae+5)=="false"){ae=ae+5;return false}if(j.slice(ae,ae+4)=="null"){ae=ae+4;return a}ad()}}return"$"},y=function(k){var j,l;k=="$"&&ad();if(typeof k=="string"){if((S?k.charAt(0):k[0])=="@"){return k.slice(1)}if(k=="["){for(j=[];;l||(l=b)){k=W();if(k=="]"){break}if(l){if(k==","){k=W();k=="]"&&ad()}else{ad()}}k==","&&ad();j.push(y(k))}return j}if(k=="{"){for(j={};;l||(l=b)){k=W();if(k=="}"){break}if(l){if(k==","){k=W();k=="}"&&ad()}else{ad()}}(k==","||typeof k!="string"||(S?k.charAt(0):k[0])!="@"||W()!=":")&&ad();j[k.slice(1)]=y(W())}return j}ad()}return k},n=function(k,j,l){l=o(k,j,l);l===V?delete k[j]:k[j]=l},o=function(k,j,p){var m=k[j],l;if(typeof m=="object"&&m){if(aa.call(m)=="[object Array]"){for(l=m.length;l--;){n(m,l,p)}}else{U(m,function(q){n(m,q,p)})}}return p.call(k,j,m)};ac.parse=function(j,k){var m,l;ae=0;Y=""+j;m=y(W());W()!="$"&&ad();ae=Y=a;return k&&aa.call(k)=="[object Function]"?o((l={},l[""]=m,l),"",k):m}}}T&&define(function(){return ac})})(this)}());if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){for(var b=(d||0),a=this.length;b<a;b++){if(this[b]===c){return b}}return -1}}var cta_linr={};cta_linr.innerFunctions={};cta_linr.instances={};cta_linr.ajax={};cta_linr.ajax.instances={};cta_linr.adtr_adStats={};cta_linr.adtr_iFrameList={};cta_linr.setStatInfo=function(a,b,d){if(a=="*"){for(var c in cta_linr.adtr_iFrameList){if(cta_linr.adtr_iFrameList.hasOwnProperty(c)){this.setStatInfo(c,b,d)}}return}if(!cta_linr.adtr_adStats[a]){cta_linr.adtr_adStats[a]={}}cta_linr.adtr_adStats[a][b]=d;this.sendStatInfo(a,b,d)};cta_linr.getInitInfo=function(c,e){var b=e.params.clickId,d=cta_linr.adtr_adStats[b]||{};d.url=window.location.href;var a=ctaJSON.stringify({command:"adtr_acceptInitInfo",value:d});cta_linr.adtr_iFrameList[b]=c;c.source.postMessage(a,c.origin)};cta_linr.sendStatInfo=function(b,c,e){if(!(b in cta_linr.adtr_iFrameList)){return}var d=cta_linr.adtr_iFrameList[b];var a=ctaJSON.stringify({command:"adtr_acceptStat",key:c,value:e});d.source.postMessage(a,d.origin)};cta_linr.regInstance=function(b,c){var a=b.origin+"_"+(Math.random()*10000000);cta_linr.instances[a]={source:b.source,origin:b.origin}};cta_linr.sendAjaxRequest=function(b,d){var c=d.params.requestId,a=d.params.requestUrl;cta_linr.ajax.registerRequest(c,b,d.params);cta_linr.ajax.appendScript(c,a)};cta_linr.receiveAjaxData=function(c,b){var d={requestId:c,responce:b};var a=cta_linr.ajax.instances[c];if(typeof a!=="undefined"){a.ev.source.postMessage(ctaJSON.stringify({command:"receiveAjaxResponce",params:d}),a.ev.origin)}};cta_linr.ajax.registerRequest=function(b,a,c){cta_linr.ajax.instances[b]={ev:a,params:c}};cta_linr.ajax.appendScript=function(c,b){var a;a=document.createElement("script");a.src="//priv.dog.extension/cta_linr.receiveAjaxData/"+c+"/"+b;document.getElementsByTagName("head")[0].appendChild(a)};cta_linr.getContentType=function(){var p={};p.adult=[/(big|hard|dirty|sexy|hottest|naked|adult|hardcore|transexual|lesbian|asian|latina|ebony|amateur|milf|mature|teen|voyeur|group|pregnant|interracial|vintage){1,}.*(porn|xxx|sex|pussy|fetish|tits|dick|cunt|fuck|masturbat|fisting|boobs|butt|cock|suck|vagina|dildo|blowjob|whore|bbw|cfnm|bdsm|pornstar|gay|cumshot|penis|hentai|gangbang|cunnilingus|gonzo|fingering|bebe|girl){1,}/gi,/(nude|porn|xxx| pussy | fetish | tits | dick | cunt | fuck| masturbat| fisting | boobs | cock | suck| vagina | dildo | blowjob | whore | bbw | cfnm | bdsm | pornstar | gay | cumshot| penis | hentai | gangbang | cunnilingus | gonzo| fingering | transexual | lesbian | ass )/gi];var a={title:true,keywords:true,description:true,"og:title":true,"og:keywords":true,"og:description":true},k={},d=document.getElementsByTagName("meta"),o,g;for(var f=0,c=d.length;f<c;f++){o=d[f];g=d[f].name||d[f].getAttribute("property");try{if((g.toLowerCase() in a)){k[g]=o.getAttribute("content")||o.getAttribute("value")}}catch(h){}}var b=document.getElementsByTagName("title");if(b.length>0){k.title=b[0].innerHTML}for(var m in p){var r=p[m];for(var q in r){var n=r[q];for(var j in k){try{var o=k[j];if(found=n.exec(o)){return m}}catch(h){}}}}return"clean"};cta_linr.closeAllAds=function(l,d){var o;for(var g in cta_linr.instances){o=cta_linr.instances[g];var c=ctaJSON.stringify({command:"closeSelf",params:{}});o.source.postMessage(c,o.origin)}var k=cta_linr.adreplace.innerFunctions.getElementsByAttribute(document,"*","name","cta_divforc");for(var g=0;g<k.length;g++){var a=k[g];var n=cta_linr.innerFunctions.getElementSize(a.getElementsByTagName("div")[0]||a);if(typeof n!="undefined"){a.style.width=parseInt(n.width)+"px";a.style.height=parseInt(n.height)+"px"}a.innerHTML=""}var j=cta_linr.adreplace.innerFunctions.getElementsByAttribute(document,"iframe","name","cta_iframeforc");for(var g=0;g<j.length;g++){var e=j[g];var n=cta_linr.innerFunctions.getElementSize(e);var b=e.parentNode;var a=document.createElement("div");a.style.width=parseInt(n.width)+"px";a.style.height=parseInt(n.height)+"px";a.style.display="block";b.insertBefore(a,e);b.removeChild(e)}var h=document.getElementsByName("test-img");for(var g=0;g<h.length;g++){var f=h[g];f.style.display="none"}};cta_linr.innerFunctions.getReverseColor=function(d){var b="FFFFFF",a={r:255,g:255,b:255,a:1},c={r:0,g:0,b:0,a:0};if(typeof d=="undefined"){return a}do{if(d.currentStyle){var e=d.currentStyle.backgroundColor}else{if(window.getComputedStyle){var e=document.defaultView.getComputedStyle(d,null).getPropertyValue("background-color")}}if(e&&e!="transparent"&&e!="rgba(0, 0, 0, 0)"){b=e;break}}while(d=d.parentNode);if(/^rgb/.test(b)){t=b.match(/(\d{1,})/g);a.r=t[0];a.g=t[1];a.b=t[2];if(t.length>3){a.a=t[3]}}else{if(b.length==3){t=b.match(/(.)/g);a.r=parseInt(t[0],16);a.g=parseInt(t[1],16);a.b=parseInt(t[2],16)}else{if(b.length==6){t=b.match(/(.{2})/g);a.r=parseInt(t[0],16);a.g=parseInt(t[1],16);a.b=parseInt(t[2],16)}}}c.r=255-a.r;c.g=255-a.g;c.b=255-a.b;c.a=1-a.a;return c};cta_linr.innerFunctions.getElementSize=function(a){var b={height:0,width:0};if(typeof a!="undefined"){if(typeof a.style!="undefined"&&a.style.height){b.height=a.style.height}else{if(a.innerHeight){b.height=a.innerHeight}else{if(a.clientHeight){b.height=a.clientHeight}}}if(typeof a.style!="undefined"&&a.style.width){b.width=a.style.width}else{if(a.innerWidth){b.width=a.innerWidth}else{if(a.clientWidth){b.width=a.clientWidth}}}}return b};cta_linr.innerFunctions.findElPos=function(b,a){var c=offtop=0;if(typeof b!="undefined"&&b.offsetParent){do{if(a&&(b.style.position=="absolute"||b.style.position=="relative")){break}c+=b.offsetLeft;offtop+=b.offsetTop}while(b=b.offsetParent)}return{offleft:c,offtop:offtop}};cta_linr.getAdditionalParams=function(a,b){b.params.params.cType=cta_linr.getContentType();cta_linr.getClientHeight(a,b)};cta_linr.getClientHeight=function(l,c){var k=0;if(window.innerHeight){k=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){k=document.documentElement.clientHeight}else{if(document.body){k=document.body.clientHeight}}}var f={clientHeight:k,offsetTop:0,params:c.params.params};var d=/^http[s]?\:\/\/(www\.)?/i;var a=document.getElementsByTagName("iframe");for(var g=0;g<a.length;g++){try{var e=a[g];pos=cta_linr.innerFunctions.findElPos(e);if(e.src.toLowerCase().replace(d,"")==c.params.referrer.toLowerCase().replace(d,"")){f.offsetTop=pos.offtop;l.source.postMessage(ctaJSON.stringify({command:"setFoldIfIsItYour",params:f}),"*")}else{f.offsetTop=pos.offtop;e.contentWindow.postMessage(ctaJSON.stringify({command:"setFoldIfIsItYour",params:f}),"*")}}catch(j){}}var h=document.getElementsByTagName("frame");for(var g=0;g<h.length;g++){var b=h[g];pos=cta_linr.innerFunctions.findElPos(b);if(b.src.toLowerCase().replace(d,"")==c.params.referrer.toLowerCase().replace(d,"")){f.offsetTop=f.clientHeight*1+c.params.params.height*1;l.source.postMessage(ctaJSON.stringify({command:"setFoldIfIsItYour",params:f}),"*")}else{f.offsetTop=pos.offtop;b.contentWindow.postMessage(ctaJSON.stringify({command:"setFoldIfIsItYour",params:f}),"*")}}f.offsetTop=f.clientHeight*1+c.params.params.height*1;l.source.postMessage(ctaJSON.stringify({command:"setFoldIfIsItYour",params:f}),"*");return f};cta_linr.callOuterFunction=function(a,c){if(window[c.params.func]!=undefined&&typeof window[c.params.func]=="function"){try{window[c.params.func].apply(window,c.params.arguments)}catch(b){console.log("CATCH",b)}}};cta_linr.listn=function(b){try{var d=ctaJSON.parse(b.data);if(typeof d.command!="undefined"&&(typeof cta_linr[d.command]=="function")){var c=cta_linr[d.command](b,d);if(d.params!=undefined&&d.params.callback!=undefined){b.source.postMessage(ctaJSON.stringify({callback:d.params.callback,data:c}),b.origin)}}}catch(a){}};cta_linr.adreplace={};cta_linr.adreplace.banners={};cta_linr.adreplace.init=function(){cta_linr.adreplace.innerFunctions={};cta_linr.adreplace.innerFunctions.addTAEvent=function(elem,evnt,func){if(elem.constructor&&elem.constructor.prototype&&elem.constructor.prototype.addEventListener){elem.constructor.prototype.addEventListener.call(elem,evnt,func,false)}else{if(elem.attachEvent){if(elem.constructor&&elem.constructor.prototype&&elem.constructor.attachEvent&&typeof elem.constructor.prototype.attachEvent.call!=="unknown"){elem.constructor.prototype.attachEvent(elem,"on"+evnt,func)}else{elem.attachEvent("on"+evnt,func)}}else{elem[evnt]=func}}};cta_linr.adreplace.innerFunctions.ctaLog=function(){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(typeof console.log.apply=="undefined"){var errorsSummary="";for(var i=0;i<arguments.length;i++){errorsSummary+=arguments[i]+" "}console.log(errorsSummary)}else{console.log.apply(console,arguments)}}};cta_linr.adreplace.innerFunctions.ctaError=function(message,debugInfo){this.error=new Error();this.error.name="ctaErrorType";this.error.message=message;cta_linr.adreplace.innerFunctions.ctaLog(debugInfo,"\n"+this.error.stack);return this.error};cta_linr.adreplace.innerFunctions.showAdByInterval=function(params){params.div_interval=setInterval(function(){var div=document.getElementById(params.divid);if(typeof div=="undefined"||div==null){return}try{cta_linr.adreplace.innerFunctions.createUrl(params);clearInterval(params.div_interval);div.style.display="inline-block";div.setAttribute("name","cta_divforc");var p=div.parentNode;var script=document.createElement("script");script.type="text/javascript";script.src=params.src;cta_linr.adreplace.innerFunctions.ctaAddEvent(window,"load",function(){window.scrollBy(0,1);window.scrollBy(0,-1)});cta_linr.adreplace.innerFunctions.appendStyles(params);p.appendChild(script)}catch(ex){cta_linr.adreplace.innerFunctions.ctaLog(ex)}},100)};cta_linr.adreplace.innerFunctions.createId=function(){return"ad_div_"+Math.floor(Math.random()*10000000)};cta_linr.adreplace.innerFunctions.ctaParseInt=function(d){d=/(\d+)/.exec(d);return d==null?0:(d[0]*1)};cta_linr.adreplace.innerFunctions.getElementsByAttribute=function(oElm,strTagName,strAttributeName,strAttributeValue){if(!oElm){oElm=document}var arrElements=(strTagName=="*"&&oElm.all)?oElm.all:oElm.getElementsByTagName(strTagName);var arrReturnElements=new Array();var oAttributeValue=(typeof strAttributeValue!="undefined")?new RegExp("(^|\\s)"+strAttributeValue+"(\\s|$)","i"):null;var oCurrent;var oAttribute;for(var i=0;i<arrElements.length;i++){oCurrent=arrElements[i];oAttribute=oCurrent.getAttribute&&oCurrent.getAttribute(strAttributeName);if(typeof oAttribute=="string"&&oAttribute.length>0){if(typeof strAttributeValue=="undefined"||(oAttributeValue&&oAttributeValue.test(oAttribute))){arrReturnElements.push(oCurrent)}}}return arrReturnElements};cta_linr.adreplace.innerFunctions.getWindowSize=function(params){var myWidth=0,myHeight=0;if((cta_linr.adreplace.innerFunctions.ctaParseInt(params.width)==0)&&(cta_linr.adreplace.innerFunctions.ctaParseInt(params.height)==0)){if(params.method=="iframe"){var id=params.wdivid;if(typeof(window.innerWidth)=="number"&&(window.innerWidth>0)){myWidth=window.innerWidth;myHeight=window.innerHeight}else{if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)&&(document.documentElement.clientWidth>0)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight}else{if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight}}}var div=document.getElementById(id);if(div){div.parentNode.removeChild(div)}}params.width=myWidth;params.height=myHeight}};cta_linr.adreplace.innerFunctions.ctaFindPos=function(params,usePos){var adDiv=document.getElementById(params.divid);var foldDiv=document.createElement("div");foldDiv.style.width=params.width+"px";foldDiv.style.height=params.height+"px";foldDiv.style.display="block";foldDiv.style.position="relative";foldDiv.id=Math.random()*1000000;adDiv.appendChild(foldDiv);var offleft=0;var offtop=0;if(typeof foldDiv!="undefined"&&foldDiv.offsetParent){var parentFold=foldDiv;do{if(usePos&&(parentFold.style.position=="absolute"||parentFold.style.position=="relative")){break}offleft+=parentFold.offsetLeft;offtop+=parentFold.offsetTop}while(parentFold=parentFold.offsetParent)}adDiv.removeChild(foldDiv);return{offleft:offleft,offtop:offtop}};cta_linr.adreplace.innerFunctions.ctaSetImmediateStyles=function(style,el){if(!el){return false}el.style.cssText+=";"+style};cta_linr.adreplace.innerFunctions.ctaAddExternalStyles=function(externalStyles,params){params.css=params.css||"";params.css+=externalStyles};cta_linr.adreplace.innerFunctions.collectStyles=function(params){var cssAdditionalDiv="";var cssSufix="";var cssInlineBlock="";if(params.advert==="www.googletagservices.com"){cssAdditionalDiv=">div";cssSufix="_sub";cssInlineBlock=" display: inline-block !important"}var css="#%id%{padding:0 !important;width:auto !important;border: 0 !important;}\n                #%id%"+cssAdditionalDiv+">#%id%_sub{margin:0 auto !important;right:0px !important;top:0px !important;padding:0 !important;position: relative !important;border:0 !important; \n                    display: block !important;height: "+params.height+"px !important; min-height: "+params.height+"px !important;"+cssInlineBlock+";} \n                #%id%_sub iframe{position: static !important;display:block;margin:0 !important;background-color: transparent; visibility: visible !important; min-width: 0 !important} \n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md {position: absolute !important;cursor:pointer !important;box-sizing:content-box !important;-mox-box-sizing:content-box !important; white-space:nowrap !important; \n                    line-height:16px !important;height:11px !important;width:45px !important;opacity:1 !important;border:none !important;background:none !important;display:none; \n                    font:normal 8px Arial,Verdana,Helvetica,sans-serif !important;z-index:auto !important;\n                    direction:ltr !important;padding:0 !important;margin: 0 !important;border-radius:0 !important;box-shadow:none !important;overflow: visible !important;min-width: 0 !important;} \n                #%id%>div * {text-indent:0em !important; letter-spacing: 0 !important;max-width: none !important; min-height: 0 !important; text-shadow: none !important} \n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md>span{position: static !important;background:none !important;font-size: 8px !important;\n                    bottom:0 !important;left:0 !important;padding: 0!important;box-sizing:inherit !important;\n                    -moz-box-sizing:inherit !important;float:none !important;line-height:inherit !important;width:31px !important;margin:0px !important;border:none !important;height:12px !important;\n                    vertical-align:middle !important;font:inherit !important;transform:none !important;-webkit-transform:none !important;-ms-transform:none !important;min-width:0 !important;\n                    display:inline-block !important;color:rgb(216, 216, 216) !important;text-decoration:none !important;text-align:left !important;white-space:nowrap !important; min-height:0 !important;} \n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md>img{height:11px !important;width:11px !important;vertical-align:baseline !important;position:static !important;\n                    float:none !important;box-sizing:inherit !important;-moz-box-sizing:inherit !important;\n                    display:inline-block !important;padding:0px !important; margin:0px !important; border:none !important;}\n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md>#ctaMenuDivId{position:absolute !important; z-index:auto !important;width:auto !important;height:auto !important;right:0px !important;left:auto !important;text-align:left !important}\n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md>#ctaMenuDivId a{margin:0 !important;padding:0 !important; color: #000 !important}\n                #%id%"+cssAdditionalDiv+">#%id%_sub>#%id%"+cssSufix+"_md>#ctaMenuDivId table{display: table !important}";if(cta_linr.adreplace.browser.name.toLowerCase()=="explorer"){css+="#%id%"+cssSufix+"_md>span{margin-top:-10px !important;} \n";css+="#%id% {display: inline!important} \n"}else{if(cta_linr.adreplace.browser.name.toLowerCase()=="firefox"){css+="#%id%>div>div{line-height:14px !important;} \n"}}if(window.top!==window.self){css+="body {margin:0 !important;} \n"}if(params.css){css+=params.css}return css.replace(/%id%/g,params.divid)};cta_linr.adreplace.innerFunctions.ctaAppendStyles=function(params){var css=cta_linr.adreplace.innerFunctions.collectStyles(params);var style=document.createElement("style");var head=document.getElementsByTagName("head")[0];style.type="text/css";if(style.styleSheet){style.styleSheet.cssText=css}else{style.appendChild(document.createTextNode(css))}head.appendChild(style);params.css=""};cta_linr.adreplace.innerFunctions.checkSizeLimit=function(params){var message;if((params.width<=params.requestLogging.minSize.width)||(params.height<=params.requestLogging.minSize.height)){message="banner size is to small!".toUpperCase()}else{if((params.width>=params.requestLogging.maxSize.width)||(params.height>=params.requestLogging.maxSize.height)){message="banner size is to large!".toUpperCase();if(params.requestLogging.enabled){cta_linr.adreplace.innerFunctions.logToServer(params.requestLogging.url,{real_referrer:params.real_referrer,host:params.advert,protocol:params.request_protocol,request:params.request,width:params.width,height:params.height})}}}if(message){throw cta_linr.adreplace.innerFunctions.ctaError(params,message)}};cta_linr.adreplace.innerFunctions.logToServer=function(destination,query){var tracker=new Image(1,1),request=[];for(var param in query){request.push(param+"="+encodeURIComponent(query[param]))}tracker.src=destination+"?"+request.join("&")};cta_linr.adreplace.innerFunctions.createUrl=function(params){function formatTimeStr(number,length){var str=""+number;while(str.length<length){str="0"+str}return str}cta_linr.adreplace.innerFunctions.getWindowSize(params);var div=document.getElementById(params.wdivid);if(div){div.parentNode.removeChild(div)}if((!params.width||!params.height)){var intv=setInterval(function(){params.countAttepts=params.countAttepts+1||0;cta_linr.adreplace.innerFunctions.getWindowSize(params);if(params.width>0&&params.height>0){clearInterval(intv);cta_linr.adreplace.innerFunctions.showAd(params)}if(params.countAttepts>10){clearInterval(intv)}},1000);throw cta_linr.adreplace.innerFunctions.ctaError("Didn't determine dimensions!")}cta_linr.adreplace.innerFunctions.checkSizeLimit(params);div=document.getElementById(params.divid);if(params.advert!=="www.googletagservices.com"){if(div){div.style.height=params.height+"px"}}var dateObj=new Date();var timezoneOffset=dateObj.getTimezoneOffset();timezoneOffset="GMT"+((timezoneOffset<0?"+":"-")+formatTimeStr(parseInt(Math.abs(timezoneOffset/60)),2)+formatTimeStr(Math.abs(timezoneOffset%60),2));params.src=params.delivery_url+"?width="+params.width+"&height="+params.height+"&adtype="+params.adtype+"&method="+params.method+"&advert="+params.advert+"&ts="+dateObj.getTime()+"&tz="+encodeURIComponent(timezoneOffset)+"&cb="+Math.floor(Math.random()*99999999999);params.src+=document.charset?"&charset="+document.charset:(document.characterSet?"&charset="+document.characterSet:"");if(params.real_referrer){params.src+="&referer="+encodeURIComponent(params.real_referrer)}else{if(window!=window.top&&document.referrer){params.src+="&referer="+encodeURIComponent(document.referrer)}else{params.src+="&referer="+encodeURIComponent(window.location)}}if(params.divid&&(typeof params.fold=="undefined")){cta_linr.adreplace.innerFunctions.cta_getAdditionalParams(params)}params.src+="&cookie_enabled="+(navigator.cookieEnabled?1:0);params.src+="&logonly="+params.logonly;params.src+="&"+params.del_taafid_name+"="+params.taafid;params.src+="&"+params.del_tainsid_name+"="+params.tainsid;params.src+="&ta_divid="+params.divid;if(params.advert==="www.googletagservices.com"){params.src+="_sub"}params.src+="&pv="+encodeURIComponent(params.ta_pdversion);params.src+="&fold="+params.fold;params.cType=cta_linr.adreplace.innerFunctions.getContentType(params);if(params.cType=="adult"&&!params.isInWhiteList&&params.blockAdult){params.src="";throw cta_linr.adreplace.innerFunctions.ctaError("This is an adult publisher")}params.src+="&ctype="+params.cType;params.src+="&page_id="+params.pageId;return params.src};cta_linr.adreplace.innerFunctions.getContentType=function(params){var contentType;if(params.isAdultNetwork==1){contentType="adult"}else{if(window!=window.top){contentType=params.cType}else{contentType=cta_linr.getContentType()}}return contentType};cta_linr.adreplace.innerFunctions.cta_getAdditionalParams=function(params){var fold;var clientHeight=0;var elementHeight=cta_linr.adreplace.innerFunctions.ctaParseInt(params.height);var foldPercent=params.foldPercent;if(foldPercent>100||foldPercent<0){foldPercent=0}var foldCoef=foldPercent/100;if(window!=window.top){var a=params.advert;var m_loc=window.location.toString().replace(window.location.host,a);if(params.method=="iframe"){if(cta_linr.adreplace.browser.name.toLowerCase()=="firefox"){var a="adtrustmedia.com/**-"+params.request_protocol+"://"+params.advert;m_loc=window.location.toString().replace(window.location.host,a)}else{if(cta_linr.adreplace.browser.name.toLowerCase()=="explorer"){m_loc=window.location.toString()}}}params.foldCoef=foldCoef;p={location:m_loc,referrer:document.referrer,mLocation:window.location.toString(),params:params};params.reservedKey=reservParams(params);top.postMessage(JSON.stringify({command:"getAdditionalParams",params:p}),"*");throw cta_linr.adreplace.innerFunctions.ctaError("Message sent through postMessage. Break function")}else{if(window.innerHeight){clientHeight=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){clientHeight=document.documentElement.clientHeight}else{if(document.body){clientHeight=document.body.clientHeight}}}}fold=(cta_linr.adreplace.innerFunctions.ctaParseInt(cta_linr.adreplace.innerFunctions.ctaFindPos(params).offtop)+(cta_linr.adreplace.innerFunctions.ctaParseInt(elementHeight)-(elementHeight*foldCoef)))<=clientHeight;params.fold=fold?"above":"below"};cta_linr.adreplace.innerFunctions.documentWrite=function(id,request){if(document.readyState==="loading"){document.write("<div id='"+id+"'></div>")}else{cta_linr.adreplace.innerFunctions.insertBefore(id,request)}};cta_linr.adreplace.innerFunctions.insertBefore=function(id,src){var scriptNodes=document.getElementsByTagName("script");if(scriptNodes.length>0){for(var i in scriptNodes){if(typeof(scriptNodes[i].src)!="undefined"){if(0<=scriptNodes[i].src.indexOf(src)&&scriptNodes[i].parentNode.nodeName.toLowerCase()!="head"){var newDiv=document.createElement("div");newDiv.id=id;scriptNodes[i].parentElement.insertBefore(newDiv,scriptNodes[i]);scriptNodes[i].parentElement.removeChild(scriptNodes[i])}}}}};cta_linr.adreplace.innerFunctions.decodeURI=function(val){var str=[],cval="",charcode;try{cval=decodeURIComponent(val)}catch(ignore){val=val.replace(/\+/g,"%20");str=val.split("%");cval=str[0];for(var i=1,len=str.length;i<len;++i){charcode=parseInt(str[i].substring(0,2),16);if(charcode){cval+=String.fromCharCode(charcode)+str[i].substring(2)}}}return cval};cta_linr.adreplace.innerFunctions.showAd=function(params){if(typeof params.addiotionalScript==="function"){var additionalCode="("+params.addiotionalScript.toString()+")()";params.addiotionalScript=undefined;eval(additionalCode);return}try{if(params.divid==""){params.divid=cta_linr.adreplace.innerFunctions.createId();cta_linr.adreplace.innerFunctions.documentWrite(params.divid,params.request)}if(typeof params.applyException==="function"){var exceptionCode="("+params.applyException.toString()+")()";eval(exceptionCode)}var div=document.getElementById(params.divid);if(typeof div=="undefined"||div==null){cta_linr.adreplace.innerFunctions.showAdByInterval(params);return}cta_linr.adreplace.innerFunctions.createUrl(params);div.setAttribute("name","cta_divforc");var script=document.createElement("script");script.type="text/javascript";script.src=params.src;cta_linr.adreplace.innerFunctions.addTAEvent(window,"load",function(){window.scrollBy(0,1);window.scrollBy(0,-1)});if(typeof div.parentNode!="undefined"&&div.parentNode.appendChild){cta_linr.adreplace.innerFunctions.ctaAppendStyles(params);div.parentNode.appendChild(script);params.divid=""}}catch(ex){cta_linr.adreplace.innerFunctions.ctaLog(ex)}};cta_linr.adreplace.innerFunctions.cta_clearAd=function(id){var divs=document.getElementById(id).getElementsByTagName("div");if(divs.length>0){var div=divs[0];div.style.display="table-cell";var fw=16;div.style.textAlign="center";div.style.fontSize=fw+"px";div.style.wordWrap="break-word";div.style.verticalAlign="middle";div.id="";div.style.padding="0px 20px";div.style.backgroundColor="white";div.style.color="black";div.style.border="1px solid black";div.innerHTML=""}window.ctaMenuShow=undefined};var browserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(data){for(var i=0;i<data.length;i++){var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString){if(dataString.indexOf(data[i].subString)!=-1){return data[i].identity}}}},searchVersion:function(dataString){var index=dataString.indexOf(this.versionSearchString);if(index==-1){return}return parseFloat(dataString.substring(index+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{string:navigator.userAgent,subString:"Opera",identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};browserDetect.init();cta_linr.adreplace.browser={};cta_linr.adreplace.browser.name=browserDetect.browser;cta_linr.adreplace.browser.version=browserDetect.version;var reservedParams=reservedParams||{};var listener={};var ajaxProcessor={};ajaxProcessor.requestInstances={};ajaxProcessor.reigsterAjaxRequest=function(callback){var requestId=Math.floor(Math.random()*10000000);ajaxProcessor.requestInstances[requestId]=callback;return requestId};ajaxProcessor.checkRequestParams=function(requestUrl,callback){return(typeof requestUrl==="string"&&typeof callback==="function")};ajaxProcessor.sendAjaxRequest=function(requestUrl,callback){if(!ajaxProcessor.checkRequestParams(requestUrl,callback)){cta_linr.adreplace.innerFunctions.ctaLog("Invalid request params. Request url: ",requestUrl," Request callback: ",callback);return}var requestId=ajaxProcessor.reigsterAjaxRequest(callback);var requestParams={requestId:requestId,requestUrl:encodeURIComponent(requestUrl)};cta_linr.adreplace.innerFunctions.addTAEvent(window,"message",listener.callbackHandle);top.postMessage(JSON.stringify({command:"sendAjaxRequest",params:requestParams}),"*")};listener.receiveAjaxResponce=function(responceData){var requestId=responceData.requestId,responce=responceData.responce;if(typeof ajaxProcessor.requestInstances[requestId]!=="undefined"){ajaxProcessor.requestInstances[requestId](responce);if(typeof params!=="undefined"){params.width=parseInt(params.width);params.height=parseInt(params.height);if(params.width<20||params.height<20||params.width>=1000||params.height>=1000){var div=document.getElementById(params.divid);div.parentNode.removeChild(div)}}}};listener.callbackHandle=function(event){try{var data=JSON.parse(event.data);if(typeof data!=="undefined"&&data.command&&typeof listener[data.command]==="function"){listener[data.command](data.params)}}catch(e){cta_linr.adreplace.innerFunctions.ctaLog(e)}};var reservParams=function(params){var key=(new Date()).getTime()+"_"+cta_linr.adreplace.innerFunctions.ctaParseInt(Math.random()*100000);reservedParams[key]=params;return key};if(window!=window.top){listener.setFoldIfIsItYour=function(params){var p=params.params;if(typeof reservedParams[p.reservedKey]!="undefined"){reservedParams[p.reservedKey]=undefined;p.reservedKey=undefined;var sumOffsetTop=params.offsetTop+cta_linr.adreplace.innerFunctions.ctaFindPos(p).offtop;var fold=(cta_linr.adreplace.innerFunctions.ctaParseInt(sumOffsetTop)+(cta_linr.adreplace.innerFunctions.ctaParseInt(p.height)-(p.height*p.foldCoef)))<=params.clientHeight;p.fold=fold?"above":"below";cta_linr.adreplace.innerFunctions.showAd(p)}};listener.closeSelf=function(){var divs=cta_linr.adreplace.innerFunctions.getElementsByAttribute(document,"div","name","cta_divforc");for(var td in divs){var d=divs[td];var dd=d.getElementsByTagName("div")[0];if(typeof dd!="undefined"){d.style.width=dd.style.width;d.style.height=dd.style.height}d.innerHTML="";d.id=""}var menus=cta_linr.adreplace.innerFunctions.getElementsByAttribute(document,"div","name","test-img");for(var td in menus){var d=menus[td];d.parentNode.removeChild(d)}};cta_linr.adreplace.innerFunctions.addTAEvent(window,"message",listener.callbackHandle);var p={command:"regInstance",params:{}};top.postMessage(JSON.stringify(p),"*")}};cta_linr.execCode=function(ev,params){eval(params.code)};cta_linr.sendBaseCode=function(a,c){console.log("send base code to iframe");var b="(function (){cta_linr={adreplace: {}}; cta_linr.adreplace.init="+cta_linr.adreplace.init.toString()+"; cta_linr.adreplace.init(); cta_linr.adreplace.innerFunctions.showAd(params); })();";a.source.postMessage(ctaJSON.stringify({command:"executeBaseCode",code:b}),"*")};cta_linr.adreplace.init();cta_linr.adreplace.innerFunctions.addTAEvent(window,"message",cta_linr.listn);