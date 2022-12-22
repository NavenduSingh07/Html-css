function add()
{
   var x = document.getElementById("input1").value
   var y = document.getElementById("input2").value
   z =parseInt(x)+parseInt(y)
   document.getElementById("Output").value=z
}

function mul()
{
   var x = document.getElementById("input1").value
   var y = document.getElementById("input2").value
   z =parseInt(x)*parseInt(y)
   document.getElementById("Output").value=z
}

function sub()
{
   var x = document.getElementById("input1").value
   var y = document.getElementById("input2").value
   z =parseInt(x)-parseInt(y)
   document.getElementById("Output").value=z
}

function div()
{
   var x = document.getElementById("input1").value
   var y = document.getElementById("input2").value
   z =parseInt(x)/parseInt(y)
   document.getElementById("Output").value=z
}

function clr()
{
    document.getElementById("input1").value=" "
    document.getElementById("input2").value=" "
    document.getElementById("Output").value=" "
}