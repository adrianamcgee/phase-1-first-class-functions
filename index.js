const { spy } = require("chai");

function Spy(){
    console.log('dookie');
}

function receivesAFunction(callback){
    return callback(Spy);

}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){}
}
   