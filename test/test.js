const should = require("should");
const request = require("request");
const expect = require("chai").expect;
var https = require('https');
var http = require('http');
require('it-each')({ testPerIteration: true });

var stageEndPoints = [ 
    'arcservice/ArcBusinessService/Management/Ping'
    ];
var productionEndPoints =  [ 
    'arcservice/ArcBusinessService/Management/Ping', 
    'ArcBusinessService/Management/Ping', 
    'ArcBusinessService/Management/Ping' 
    ];

describe('Asynchronous loop testing', function(){
   
    it.each(stageEndPoints, 'Production Enviornment of %s', ['element'], function(element, next){
        request.get('https://stg-arc2.selise.biz/CampaignServiceApi/CampaignServiceApi/Management/Ping'
        , function(res){
            console.log(res);
            if(res != 200){
                throw new Error('Found none 200 response code at ' + element + '!');
            }
            res.on('data', new Function()).on('end', next);
        });
    });


    
});   