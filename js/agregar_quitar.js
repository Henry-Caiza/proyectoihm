
function suma1() {
    var numero1 = document.getElementById("des1").value;
    var resultado= numero1 + 1;
    document.getElementById("des1").innerHTML = resultado;
    alert("El resultado es: "+resultado);
  };
  function myFunction() {
    alert("I am an alert box!");
  };


  var pedido1 = document.getElementById("p1");
  var cantidad1 = document.getElementById("cantidad1");
  var sumar1 = document.getElementById("add1");
  var pre1 = document.getElementById("precio1");
  var restar1= document.getElementById("rest1");

  var pedido2 = document.getElementById("p2");
  var cantidad2 = document.getElementById("cantidad2");
  var sumar2 = document.getElementById("add2");
  var pre2 = document.getElementById("precio2");
  var restar2= document.getElementById("rest2");

  var pedido3 = document.getElementById("p3");
  var cantidad3 = document.getElementById("cantidad3");
  var sumar3 = document.getElementById("add3");
  var pre3 = document.getElementById("precio3");
  var restar3= document.getElementById("rest3");

  var pedido4 = document.getElementById("p4");
  var cantidad4 = document.getElementById("cantidad4");
  var sumar4 = document.getElementById("add4");
  var pre4 = document.getElementById("precio4");
  var restar4= document.getElementById("rest4");


  var direccion1 = document.getElementById("direc1");
  document.getElementById('aceptar').disabled=true;
  var acep = document.getElementById("aceptar2");

  var salir1 =  document.getElementById("salir");
  var no =  document.getElementById("no1");
  count1 = 1;
  precio1 = 10.20;
  document.getElementById('rest1').disabled=true;

  count2 = 1;
  precio2 = 6.60;
  document.getElementById('rest2').disabled=true;

  count3 = 1;
  precio3 = 8.20;
  document.getElementById('rest3').disabled=true;

  count4 = 1;
  precio4 = 15.80;
  document.getElementById('rest4').disabled=true;

  sumar1.onclick = function() {
    document.getElementById('rest1').disabled=false;
    pedido1.onclick = function(){
      document.getElementById('add1').disabled=false;
    count1=1;
    cantidad1.innerHTML = 1;
    precio1 = 10.20;
    pre1.innerHTML = 10.20;
  }
  count1 += 1;
  precio1 += 10.20;
  cantidad1.innerHTML = count1;
  pre1.innerHTML = precio1.toFixed(2);
  if(count1==15){
    document.getElementById('add1').disabled=true;
    alert("Solo se puede comprar hasta 15 unidades");
  }
};

sumar2.onclick = function() {
  document.getElementById('rest2').disabled=false;
  pedido2.onclick = function(){
  document.getElementById('add2').disabled=false;
  count2=1;
  cantidad2.innerHTML = 1;
  precio2 = 6.60;
  pre2.innerHTML = 6.60;
}
count2 += 1;
precio2 += 6.60;
cantidad2.innerHTML = count2;
pre2.innerHTML = precio2.toFixed(2);
if(count2==15){
  document.getElementById('add2').disabled=true;
  alert("Solo se puede comprar hasta 15 unidades");
}
};

sumar3.onclick = function() {
  document.getElementById('rest3').disabled=false;
pedido3.onclick = function(){
  document.getElementById('add3').disabled=false;
  count3=1;
  cantidad3.innerHTML = 1;
  precio3 = 8.20;
  pre3.innerHTML = 8.20;
}
count3 += 1;
precio3 += 8.20;
cantidad3.innerHTML = count3;
pre3.innerHTML = precio3.toFixed(2);
if(count3==15){
  document.getElementById('add3').disabled=true;
  alert("Solo se puede comprar hasta 15 unidades");
}
};

sumar4.onclick = function() {
  document.getElementById('rest4').disabled=false;
  pedido4.onclick = function(){
    document.getElementById('add4').disabled=false;
  count4=1;
  cantidad4.innerHTML = 1;
  precio4 = 15.80;
  pre4.innerHTML = 15.80;
}
count4 += 1;
precio4 += 15.80;
cantidad4.innerHTML = count4;
pre4.innerHTML = precio4.toFixed(2);
if(count4==15){
  document.getElementById('add4').disabled=true;
  alert("Solo se puede comprar hasta 15 unidades");
}
};


restar1.onclick=function(){
  if(count1<=15){
    document.getElementById('add1').disabled=false;
  }
  if(precio1>10.20){
    document.getElementById('rest1').disabled=false;
    count1 -=1;
precio1 -= 10.20;
cantidad1.innerHTML = count1;
pre1.innerHTML = precio1.toFixed(2);
  }else{
  document.getElementById('rest1').disabled=true;
  }
};


restar2.onclick=function(){
  if(count2<=15){
    document.getElementById('add2').disabled=false;
  }
  if(precio2>6.60){
    document.getElementById('rest2').disabled=false;
    count2 -=1;
precio2 -= 6.60;
cantidad2.innerHTML = count2;
pre2.innerHTML = precio2.toFixed(2);
  }else{
  document.getElementById('rest2').disabled=true;
  }
};

restar3.onclick=function(){
  if(count3<=15){
    document.getElementById('add3').disabled=false;
  }
  if(precio3>8.20){
    document.getElementById('rest3').disabled=false;
    count3 -=1;
    precio3 -= 8.20;
    cantidad3.innerHTML = count3;
    pre3.innerHTML = precio3.toFixed(2);
  }else{
  document.getElementById('rest3').disabled=true;
  }
};

restar4.onclick=function(){
  if(count4<=15){
    document.getElementById('add4').disabled=false;
  }
  if(precio4>20){
    document.getElementById('rest4').disabled=false;
    count4 -=1;
    precio4 -= 15.8;
    cantidad4.innerHTML = count4;
    pre4.innerHTML = precio4.toFixed(2);
  }else{
  document.getElementById('rest4').disabled=true;
  }
};

direccion1.onclick= function(){
  document.getElementById('aceptar').disabled=false;
};
acep.onclick= function(){
  alert('Ubicación guardada')
  document.getElementById('aceptar').disabled=false;
  document.getElementById('direc1').checked=false;
}
salir1.onclick= function(){
  document.getElementById('aceptar').disabled=true;
  document.getElementById('direc1').checked=false;
};
no.onclick= function(){
  document.getElementById('aceptar').disabled=true;
  document.getElementById('direc1').checked=false;
};

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("di");
  // Get the output text
  var text = document.getElementById("select2");
  var text1 = document.getElementById("direccion");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
    text1.style.display = "none";
  } else {
    text.style.display = "none";
    text1.style.display = "block";
  }
}