document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "230px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style="height:150px; width:150px; background-color:blue; margin:25px";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px";

});