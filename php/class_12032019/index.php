<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<label for="">Enter integer x:</label>
<input type="number" id="num1">

<br><br>

<label for="">Enter integer y:</label>
<input type="number" id="num2">

<br><br>

<button type="submit">Submit</button>

<br><br>

<p id="output"></p>

<script>

var btn = document.querySelector('button');
// var ans = document.querySelector('p');
var xText = document.getElementById('num1');
var yText = document.getElementById('num2');
var ans = document.getElementById('output');

//anonymous function

btn.onclick = function(){

    var z = parseInt(xText.value) + parseInt(yText.value);
    ans.textContent = 'The Output is '+z;

}

// custom function




</script>

</body>
</html>