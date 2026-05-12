function append(value)
{
    document.getElementById("res").value += value;
}

function result()
{
    let expression = document.getElementById("res").value;

    document.getElementById("res").value = eval(expression);
}

function clearDisplay()
{
    document.getElementById("res").value = "";
}