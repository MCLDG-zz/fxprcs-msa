{"filter":false,"title":"tickerController.js","tooltip":"/client/controllers/tickerController.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":78,"column":26},"end":{"row":78,"column":27},"action":"insert","lines":["/"],"id":748}],[{"start":{"row":78,"column":27},"end":{"row":78,"column":28},"action":"insert","lines":["d"],"id":749}],[{"start":{"row":78,"column":28},"end":{"row":78,"column":29},"action":"insert","lines":["i"],"id":750},{"start":{"row":78,"column":29},"end":{"row":78,"column":30},"action":"insert","lines":["v"]}],[{"start":{"row":78,"column":30},"end":{"row":78,"column":31},"action":"insert","lines":[">"],"id":751}],[{"start":{"row":78,"column":12},"end":{"row":78,"column":32},"action":"remove","lines":["'<div>Hi<br/></div>'"],"id":752},{"start":{"row":78,"column":12},"end":{"row":78,"column":34},"action":"insert","lines":["htmlOuputFromDirective"]}],[{"start":{"row":77,"column":8},"end":{"row":78,"column":37},"action":"remove","lines":["var myEl = angular.element( document.querySelector( '#quotewidgets' ) );","myEl.append(htmlOuputFromDirective); "],"id":753}],[{"start":{"row":77,"column":8},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":754}],[{"start":{"row":77,"column":8},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":755}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":12},"action":"remove","lines":["    "],"id":756}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":12},"action":"remove","lines":["    "],"id":757}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":9},"action":"remove","lines":["c"],"id":758}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":9},"action":"insert","lines":["c"],"id":759}],[{"start":{"row":75,"column":41},"end":{"row":75,"column":42},"action":"insert","lines":["a"],"id":760}],[{"start":{"row":75,"column":42},"end":{"row":75,"column":43},"action":"insert","lines":["p"],"id":761}],[{"start":{"row":75,"column":43},"end":{"row":75,"column":44},"action":"insert","lines":["p"],"id":762}],[{"start":{"row":75,"column":44},"end":{"row":75,"column":45},"action":"insert","lines":["e"],"id":763}],[{"start":{"row":75,"column":45},"end":{"row":75,"column":46},"action":"insert","lines":["n"],"id":764}],[{"start":{"row":75,"column":46},"end":{"row":75,"column":47},"action":"insert","lines":["d"],"id":765}],[{"start":{"row":75,"column":47},"end":{"row":75,"column":48},"action":"remove","lines":["h"],"id":766}],[{"start":{"row":75,"column":47},"end":{"row":75,"column":48},"action":"remove","lines":["t"],"id":767}],[{"start":{"row":75,"column":47},"end":{"row":75,"column":48},"action":"remove","lines":["m"],"id":768}],[{"start":{"row":75,"column":47},"end":{"row":75,"column":48},"action":"remove","lines":["l"],"id":769}],[{"start":{"row":76,"column":0},"end":{"row":79,"column":0},"action":"remove","lines":["        ","        console.log(newHtml[0].innerHTML);","        console.log(newHtml[0].outerHTML);",""],"id":770}],[{"start":{"row":77,"column":0},"end":{"row":79,"column":0},"action":"insert","lines":["","    ",""],"id":771}],[{"start":{"row":78,"column":0},"end":{"row":83,"column":0},"action":"insert","lines":["    $scope.addQuoteWidget = function(){","        var compileFunction = $compile('<div quotewidgetdirective></div>'); //compile HTML fragment","        var htmlOuputFromDirective = compileFunction($scope);          //get HTML output from directive after applying $scope","        var newHtml = $('#quotewidgets').append(htmlOuputFromDirective); //set this HTML output from directive onto StaticHTML.html     ","    };",""],"id":773}],[{"start":{"row":78,"column":11},"end":{"row":78,"column":12},"action":"insert","lines":["c"],"id":774}],[{"start":{"row":78,"column":12},"end":{"row":78,"column":13},"action":"insert","lines":["l"],"id":775}],[{"start":{"row":78,"column":13},"end":{"row":78,"column":14},"action":"insert","lines":["o"],"id":776}],[{"start":{"row":78,"column":14},"end":{"row":78,"column":15},"action":"insert","lines":["s"],"id":777}],[{"start":{"row":78,"column":15},"end":{"row":78,"column":16},"action":"insert","lines":["e"],"id":778}],[{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"remove","lines":["a"],"id":779}],[{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"remove","lines":["d"],"id":780}],[{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"remove","lines":["d"],"id":781}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"remove","lines":[" "],"id":782}],[{"start":{"row":81,"column":20},"end":{"row":81,"column":21},"action":"remove","lines":["="],"id":783}],[{"start":{"row":81,"column":19},"end":{"row":81,"column":20},"action":"remove","lines":[" "],"id":784}],[{"start":{"row":81,"column":18},"end":{"row":81,"column":19},"action":"remove","lines":["l"],"id":785}],[{"start":{"row":81,"column":17},"end":{"row":81,"column":18},"action":"remove","lines":["m"],"id":786}],[{"start":{"row":81,"column":16},"end":{"row":81,"column":17},"action":"remove","lines":["t"],"id":787}],[{"start":{"row":81,"column":15},"end":{"row":81,"column":16},"action":"remove","lines":["H"],"id":788}],[{"start":{"row":81,"column":14},"end":{"row":81,"column":15},"action":"remove","lines":["w"],"id":789}],[{"start":{"row":81,"column":13},"end":{"row":81,"column":14},"action":"remove","lines":["e"],"id":790}],[{"start":{"row":81,"column":12},"end":{"row":81,"column":13},"action":"remove","lines":["n"],"id":791}],[{"start":{"row":81,"column":11},"end":{"row":81,"column":12},"action":"remove","lines":[" "],"id":792}],[{"start":{"row":81,"column":10},"end":{"row":81,"column":11},"action":"remove","lines":["r"],"id":793}],[{"start":{"row":81,"column":9},"end":{"row":81,"column":10},"action":"remove","lines":["a"],"id":794}],[{"start":{"row":81,"column":8},"end":{"row":81,"column":9},"action":"remove","lines":["v"],"id":795}],[{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["e"],"id":796}],[{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":["m"],"id":797}],[{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":["p"],"id":798}],[{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":["t"],"id":799}],[{"start":{"row":81,"column":31},"end":{"row":81,"column":32},"action":"insert","lines":["y"],"id":800}],[{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":["("],"id":801}],[{"start":{"row":81,"column":33},"end":{"row":81,"column":34},"action":"insert","lines":[")"],"id":802}],[{"start":{"row":81,"column":34},"end":{"row":81,"column":64},"action":"remove","lines":["append(htmlOuputFromDirective)"],"id":803}],[{"start":{"row":79,"column":0},"end":{"row":81,"column":0},"action":"remove","lines":["        var compileFunction = $compile('<div quotewidgetdirective></div>'); //compile HTML fragment","        var htmlOuputFromDirective = compileFunction($scope);          //get HTML output from directive after applying $scope",""],"id":804}],[{"start":{"row":79,"column":38},"end":{"row":79,"column":41},"action":"remove","lines":["set"],"id":805},{"start":{"row":79,"column":38},"end":{"row":79,"column":39},"action":"insert","lines":["r"]}],[{"start":{"row":79,"column":39},"end":{"row":79,"column":40},"action":"insert","lines":["e"],"id":806}],[{"start":{"row":79,"column":40},"end":{"row":79,"column":41},"action":"insert","lines":["m"],"id":807}],[{"start":{"row":79,"column":41},"end":{"row":79,"column":42},"action":"insert","lines":["o"],"id":808}],[{"start":{"row":79,"column":42},"end":{"row":79,"column":43},"action":"insert","lines":["v"],"id":809}],[{"start":{"row":79,"column":43},"end":{"row":79,"column":44},"action":"insert","lines":["e"],"id":810}],[{"start":{"row":79,"column":44},"end":{"row":79,"column":45},"action":"insert","lines":[" "],"id":811}],[{"start":{"row":79,"column":45},"end":{"row":79,"column":46},"action":"insert","lines":["t"],"id":812}],[{"start":{"row":79,"column":46},"end":{"row":79,"column":47},"action":"insert","lines":["h"],"id":813}],[{"start":{"row":79,"column":47},"end":{"row":79,"column":48},"action":"insert","lines":["e"],"id":814}],[{"start":{"row":79,"column":48},"end":{"row":79,"column":49},"action":"insert","lines":[" "],"id":815}],[{"start":{"row":79,"column":49},"end":{"row":79,"column":50},"action":"insert","lines":["w"],"id":816}],[{"start":{"row":79,"column":50},"end":{"row":79,"column":51},"action":"insert","lines":["i"],"id":817}],[{"start":{"row":79,"column":51},"end":{"row":79,"column":52},"action":"insert","lines":["d"],"id":818}],[{"start":{"row":79,"column":52},"end":{"row":79,"column":53},"action":"insert","lines":["g"],"id":819}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"insert","lines":["e"],"id":820}],[{"start":{"row":79,"column":54},"end":{"row":79,"column":55},"action":"insert","lines":["t"],"id":821}],[{"start":{"row":79,"column":55},"end":{"row":79,"column":113},"action":"remove","lines":[" this HTML output from directive onto StaticHTML.html     "],"id":822}],[{"start":{"row":79,"column":26},"end":{"row":79,"column":27},"action":"insert","lines":["."],"id":823}],[{"start":{"row":79,"column":27},"end":{"row":79,"column":28},"action":"insert","lines":["r"],"id":824}],[{"start":{"row":79,"column":27},"end":{"row":79,"column":28},"action":"remove","lines":["r"],"id":825},{"start":{"row":79,"column":27},"end":{"row":79,"column":35},"action":"insert","lines":["remove()"]}],[{"start":{"row":79,"column":34},"end":{"row":79,"column":36},"action":"insert","lines":["\"\""],"id":826}],[{"start":{"row":79,"column":35},"end":{"row":79,"column":51},"action":"insert","lines":["pricequotewidget"],"id":827}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["."],"id":828}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["e"],"id":829}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["m"],"id":830}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["p"],"id":831}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["t"],"id":832}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":["y"],"id":833}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":55},"action":"remove","lines":["()"],"id":834}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"remove","lines":[";"],"id":835}],[{"start":{"row":79,"column":53},"end":{"row":79,"column":54},"action":"insert","lines":[";"],"id":836}],[{"start":{"row":71,"column":0},"end":{"row":81,"column":0},"action":"remove","lines":["    ","    $scope.addQuoteWidget = function(){","        var compileFunction = $compile('<div quotewidgetdirective></div>'); //compile HTML fragment","        var htmlOuputFromDirective = compileFunction($scope);          //get HTML output from directive after applying $scope","        var newHtml = $('#quotewidgets').append(htmlOuputFromDirective); //set this HTML output from directive onto StaticHTML.html     ","    };","","    $scope.closeQuoteWidget = function(){","        $('#quotewidgets').remove(\"pricequotewidget\"); //remove the widget","    };",""],"id":837}],[{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"remove","lines":["    "],"id":838}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["t"],"id":839}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["r"],"id":840}],[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["l"],"id":841}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["o"],"id":842}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["n"],"id":843},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["t"]}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["r"],"id":844}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["o"],"id":845}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["l"],"id":846}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["l"],"id":847}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["e"],"id":848}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["r"],"id":849}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":26},"end":{"row":2,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":15,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1435153911948,"hash":"cc280fae0694faa0c9f0547326414a6ecfdbf2da"}