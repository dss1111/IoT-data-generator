var http = require('http');
function elasticsearchPut(){ 
    var option = { 
        hostname: "192.168.0.5", 
        port: 5000, 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }; 
    var req = http.request(option, function(res) { 
        //console.log('STATUS: ' + res.statusCode); 
        //console.log('HEADERS: ' + JSON.stringify(res.headers)); 
    });
    let name="integrated_sensor1";
    let model="integrated";
    let y,m,h1,h2;
    y="2020";
    m="10";
    h1=0;
    h2=1;
    let data = {};
    for(k=1;k<102400;k++)
    {

        data["name"]=name;
        data["model"]=model;
        data["date"]="2020-10-01T00:00:00.000Z";
        data["loc1"]="00";
        data["loc2"]="00";
        req.write(JSON.stringify(data)); 
        req.headers = http.h
        setTimeout(function(){
            console.log();
        }, 50);
    }
    req.end();
}
elasticsearchPut();


