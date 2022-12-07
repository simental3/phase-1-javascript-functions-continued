// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}


const wrapAdjective = function (surround = "*") {
    return function (description = "super") {
        return `You are ${surround}${description}${surround}!`;
    };
};