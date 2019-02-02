$(document).ready(function () {

    $.ajax(settins)
        .done(function (response) {
            $("#fifthWorkDayOfMonth").text(response);
            const dayOfWeek = new Date("2019-02-07T00:00:00Z").getDay();
            $("#fifthWorkDayOfWeek").text(weekday[dayOfWeek]);
        })

});
var weekday = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const currentMonthNormalized = currentMonth < 10 ? "0" + currentMonth : currentMonth
const settins = {
    method: "GET",
    url: ` https://elekto.com.br/api/Calendars/br-BC/Add?initialDate=${currentYear}-${currentMonthNormalized}-01&days=4&type=work&finalAdjust=none`,
}