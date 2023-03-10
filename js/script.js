var tripInfoButoon = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");
var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget for this trip?"));
    var accomadation = Number(prompt("What are your accomodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"));
    calculateDailyBudget(totalBudget, accomadation, numDays);   
};
var calculateDailyBudget = function (totalBudget, accomadation, numDays) {
    var daily = ((totalBudget - accomadation) / numDays).toFixed(2);
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};
calculateDailyBudget(totalBudget, accamodation, numDays);
tripInfoButton.addEventListener ("click", tripInfo);