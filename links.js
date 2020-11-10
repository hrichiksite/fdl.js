  
function makefdl(key, st, si, sd, domain, link){
	  
  var  bodydata = JSON.stringify({
	"longDynamicLink": "https://"+ domain + "/?link=" + link + "&st=" + st + "&sd="+ sd + "&si=" + si,
	"suffix": {
		"option": "SHORT"
	}
});

var url = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + key;
    
    
     
     var xhr = new XMLHttpRequest();
xhr.open('POST', url , true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = function () {
	
    var data = JSON.parse(this.responseText);
    var stlink = data.shortLink;
    return stlink;
};
xhr.send(bodydata);
     
}

  
function makedevfdl(key, st, si, sd, domain, link){
	  
  var  bodydata = JSON.stringify({
	"longDynamicLink": "https://"+ domain + "/?link=" + link + "&st=" + st + "&sd="+ sd + "&si=" + si,
	"suffix": {
		"option": "SHORT"
	}
});

var url = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + key;
    
    
     
     var xhr = new XMLHttpRequest();
xhr.open('POST', url , true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = function () {
	
    var data = JSON.parse(this.responseText);
    return data;
};
xhr.send(bodydata);
     
}
