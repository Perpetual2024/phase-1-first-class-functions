
 function receivesAFunction (spy,callback){
return spy(callback);
 }


function returnsANamedFunction(){
function name(fn) {
    console.log (fn.name);
}
    
return name;

}
function returnsAnAnonymousFunction(){
    return function(){
        console.log ('"before all" hook:');
    }
}








    




 
    

 
 



