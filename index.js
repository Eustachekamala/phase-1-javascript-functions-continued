// code your solution here
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function saturdayFun( name ='roller-skate'){
    return `This Saturday, I want to ${name}!`
}

function wrapAdjective(){
    let result = '*';
    let emphatic = 'a hard worker';
        return (() => {
            if(result === '*'){
                return `You are ${result}${emphatic}${result}!`;
            }
            return (function wraps(){
                result = '||';
                return `You are ${result}${emphatic}${result}`; 
            })
        });
}

mondayWork();
mondayWork('work at home');
saturdayFun();
wrapAdjective()()();

