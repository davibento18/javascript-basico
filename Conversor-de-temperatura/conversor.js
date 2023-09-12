document.getElementById('convert').onclick = tempConvert;
document.getElementById('convert').onclick = clearForm;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").Value;
    var celsius = document.getElementById("celsius").Value;

    if(isNaN(fahrenheit) ||isNaN(celsius)){
        alert("Digite um valor válido!");
        return
    }else if(fahrenheit ===''){
       fahrenheit = (parseFloat(celsius)* 1.8)+ 32;
    }else if(celsius ===''){
       celsius = (parseFloat(fahreheit) - 32)/ 1.8;
    }

    document.getElementById("fahrenheit").Value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").Value = parseFloat(celsius).toFixed(1);

}

function clearForm(){
    document.getElementById("fahrenheit").Value = "";
    document.getElementById("celsius").Value = "";
}