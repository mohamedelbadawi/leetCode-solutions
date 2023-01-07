
var canCompleteCircuit = function(gas, cost) {
    let gasSum= gas.reduce((a,b)=>{return a+b},0)
    let costSum= cost.reduce((a,b)=>{return a+b},0)
    if(costSum>gasSum){
        return -1
    }
    let total=0
    let startIndex=0
    for(let i=0;i<gas.length;i++){
        total+=(gas[i]-cost[i])
        if(total<0){
            total=0
            startIndex=i+1
        }
    }
    return startIndex
};