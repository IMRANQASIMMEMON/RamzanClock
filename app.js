setInterval(() => {
    
    var time = new Date();
    var houre = document.getElementById("houre");
    houre.innerText = time.getHours();
     if(houre.innerText >11){houre.innerText -= 12} 
    var minut = document.getElementById("minut");
     minut.innerText = time.getMinutes();
     var sec = document.getElementById("sec");
     sec.innerText = time.getSeconds();
}, 1000);