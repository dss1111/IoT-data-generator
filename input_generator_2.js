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
    let name="electricity_sensor1";
    let model="electricity";
    let y,m,d1,d2,h1,h2;
    y="2020";
    m="10";
    h1=0;
    h2=1;
    let value1_name="elec";
    let value1;
    let value1_min=0.2;
    let value1_max=1.1;
    let dif1=(value1_max-value1_min)/24;
    let value2_name=null;
    let value2;
    let value2_min=10;
    let value2_max=12;
    let dif2=(value2_max-value2_min)/24;
    let value3_name=null;
    let value3;
    let value3_min=399;
    let value3_max=408;
    let dif3=(value3_max-value3_min)/24;
    let data = {
    };
    for(d=1;d<32;d++)
    {
        d1=parseInt(d/10);
        d2=d%10;
        for(h=0;h<24;h++)
        {
            h1=parseInt(h/10);
            h2=h%10;
            switch(h)
            {
                case 0:
                    value1=value1_min+6*dif1;
                    value2=value2_min+6*dif2;
                    value3=value3_min+6*dif3;
                    break;
                case 1:
                    value1=value1_min+4.4*dif1;
                    value2=value2_min+4.4*dif2;
                    value3=value3_min+4.4*dif3;
                    break;
                case 2:
                    value1=value1_min+3.2*dif1;
                    value2=value2_min+3.2*dif2;
                    value3=value3_min+3.2*dif3;
                    break;
                case 3:
                    value1=value1_min+2.2*dif1;
                    value2=value2_min+2.2*dif2;
                    value3=value3_min+2.2*dif3;
                    break;
                case 4:
                    value1=value1_min+1.2*dif1;
                    value2=value2_min+1.2*dif2;
                    value3=value3_min+1.2*dif3;
                    break;
                case 5:
                    value1=value1_min+0.6*dif1;
                    value2=value2_min+0.6*dif2;
                    value3=value3_min+0.6*dif3;
                    break;
                case 6:
                    value1=value1_min;
                    value2=value2_min;
                    value3=value3_min;
                    break;
                case 7:
                    value1=value1_min+dif1;
                    value2=value2_min+dif2;
                    value3=value3_min+dif3;
                    break;
                case 8:
                    value1=value1_min+2*dif1;
                    value2=value2_min+2*dif2;
                    value3=value3_min+2*dif3;
                    break;
                case 9:
                    value1=value1_min+4*dif1;
                    value2=value2_min+4*dif2;
                    value3=value3_min+4*dif3;
                    break;
                case 10:
                    value1=value1_min+9*dif1;
                    value2=value2_min+9*dif2;
                    value3=value3_min+9*dif3;
                    break;
                case 11:
                    value1=value1_min+13*dif1;
                    value2=value2_min+13*dif2;
                    value3=value3_min+13*dif3;
                    break;
                case 12:
                    value1=value1_min+16*dif1;
                    value2=value2_min+16*dif2;
                    value3=value3_min+16*dif3;
                    break;
                case 13:
                    value1=value1_min+19*dif1;
                    value2=value2_min+19*dif2;
                    value3=value3_min+19*dif3;
                    break;
                case 14:
                    value1=value1_min+22*dif1;
                    value2=value2_min+22*dif2;
                    value3=value3_min+22*dif3;
                    break;
                case 15:
                    value1=value1_max;
                    value2=value2_max;
                    value3=value3_max;
                    break;
                case 16:
                    value1=value1_max-4*dif1;
                    value2=value2_max-4*dif2;
                    value3=value3_max-4*dif3;
                    break;
                case 17:
                    value1=value1_max-7.4*dif1;
                    value2=value2_max-7.4*dif2;
                    value3=value3_max-7.4*dif3;
                    break;
                case 18:
                    value1=value1_max-10*dif1;
                    value2=value2_max-10*dif2;
                    value3=value3_max-10*dif3;
                    break;
                case 19:
                    value1=value1_max-12*dif1;
                    value2=value2_max-12*dif2;
                    value3=value3_max-12*dif3;
                    break;
                case 20:
                    value1=value1_max-13.2*dif1;
                    value2=value2_max-13.2*dif2;
                    value3=value3_max-13.2*dif3;
                    break;
                case 21:
                    value1=value1_max-14.6*dif1;
                    value2=value2_max-14.6*dif2;
                    value3=value3_max-14.6*dif3;
                    break;
                case 22:
                    value1=value1_max-15.2*dif1;
                    value2=value2_max-15.2*dif2;
                    value3=value3_max-15.2*dif3;
                    break;
                case 23:
                    value1=value1_max-16*dif1;
                    value2=value2_max-16*dif2;
                    value3=value3_max-16*dif3;
                    break;
                default:
                    break;
            }
            data["name"]=name;
            data["model"]=model;
            data["date"]=y+"-"+m+"-"+d1+d2+"T"+h1+h2+":00:00.000Z";
            data["loc1"]="00";
            data["loc2"]="00";
            if(value1_name!=null)
            {
                data[value1_name]=value1;
            }
            if(value2_name!=null)
            {
                data[value2_name]=value2;
            }
            if(value3_name!=null)
            {
                data[value3_name]=value3;
            }
            // DATA PUT 
            req.write(JSON.stringify(data)); 
            req.headers = http.h
            setTimeout(function(){
                console.log();
            }, 1000);
        }    
    }
    req.end();
}
elasticsearchPut();


