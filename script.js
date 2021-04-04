function compute() 
{
    principal = document.getElementById("principal").value;
    if (principal <= 0) {
        document.getElementById("principal").focus();
        alert("Enter a positive number");
        return false;
    }
    rate = document.getElementById("rate").value;
    years = document.getElementById("numberr").value;
    interest = principal * years * rate / 100
    var d = new Date();
    var n = d.getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br> You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + n + "</mark>";
}
function show_value(x) 
{
    document.getElementById("slider_value").innerHTML = x;
}