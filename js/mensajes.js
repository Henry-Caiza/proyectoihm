
function validar(f) {
    var ok = true;
    if(f.elements[0].value == "")
    {
      ok = false;
    }
    if(f.elements[1].value == "")
    {
      ok = false;
    }
    if(f.elements[2].value == "")
    {
      ok = false;
    }
  
    if(ok == true && confirm('¿Desea guardar los datos?') == true){
    alert('Datos guardados');
    }
	else {alert("Datos no guardados");
		ok = false;
	}
    return ok;
};

function validar_reg(f) {
  var ok = true;
  if(f.elements[0].value == "")
  {
    ok = false;
  }
  if(f.elements[1].value == "")
  {
    ok = false;
  }
  if(f.elements[2].value == "")
  {
    ok = false;
  }

  if(ok == true && confirm('¿Desea seguri con su registro?') == true){
  alert('¡Registro exitoso!');
  }
else {alert("Datos no guardados");
  ok = false;
}
  return ok;
};


function guardar() {
    confirm("¿Desea guardar los datos?");
  };

function eliminar1(){
  var boton = document.getElementById("eli1");
  var text1 = document.getElementById("primero");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};
function eliminar2(){
  var boton = document.getElementById("eli2");
  var text1 = document.getElementById("segundo");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};
function eliminar3(){
  var boton = document.getElementById("eli3");
  var text1 = document.getElementById("tercero");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("¿Datos no eliminados");
}   
};
function eliminar4(){
  var boton = document.getElementById("eli4");
  var text1 = document.getElementById("cuarto");
  if(confirm('Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};
function eliminar5(){
  var boton = document.getElementById("eli5");
  var text1 = document.getElementById("quinto");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};
function eliminar6(){
  var boton = document.getElementById("eli6");
  var text1 = document.getElementById("sexto");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};
function eliminar7(){
  var boton = document.getElementById("eli7");
  var text1 = document.getElementById("septimo");
  if(confirm('¿Estas seguro de que deeas eliminar?')){
    alert('Datos eliminados');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos no eliminados");
}   
};

function eliminar8(){
  var boton = document.getElementById("eli");
  var text1 = document.getElementById("nopedido");
  if(confirm('¿Estas seguro de que deeas eliminar el pedido?')){
    alert('Pedido eliminado');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Pedido no eliminado");
}   
};

function buscarf(f){
  var ok = true;
  //var ejem=document.getElementById('txtusuario');
  var ejem=f.elements[0].value;
  var msg = "Debes escribir contenido en los campos:\n";
 // alert('Ingrese un equipo'   + ejem);
  if(f.elements[0].value != "2020-08-10"){
    alert("Pedido no encontrado")
    ok = false;
  }
  else{
    alert("Pedido encontrado")
    ok = true;
  }
  return ok;
};
function buscarn(f){
  var ok = true;
  //var ejem=document.getElementById('txtusuario');
  var ejem=f.elements[0].value;
  var msg = "Debes escribir contenido en los campos:\n";
 // alert('Ingrese un equipo'   + ejem);
  if(f.elements[0].value != "1"){
    alert("!COMPROBANTE NO ENCONTRADO¡")
    ok = false;
  }
  else{
    alert("COMPROBANTE ENCONTRADO")
    ok = true;
  }
  return ok;
};
function eliminard(){
  var boton = document.getElementById("el");
  var text1 = document.getElementById("diree");
  if(confirm('¿Estas seguro de que deeas eliminar la dirección?')){
    alert('Dirección eliminada');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Dirección no eliminada");
}   
};
function eliminarf(){
  var boton = document.getElementById("el2");
  var text1 = document.getElementById("facc");
  if(confirm('¿Estas seguro de que deeas eliminar los datos de factura')){
    alert('Datos de factura eliminada');
    if (boton.onclick){
      text1.style.display = "none";
    } else {
      text1.style.display = "block";
    }
  }
else {alert("Datos de factura no eliminada");
}   
};

function buscarplato(f){
  var ok = true;
  //var ejem=document.getElementById('txtusuario');
  var ejem=f.elements[0].value;
  ejem = ejem.toUpperCase();
  var msg = "Debes escribir contenido en los campos:\n";
 // alert('Ingrese un equipo'   + ejem);
  if(ejem != "DESAYUNO CONTINENTAL" && ejem != "DESAYUNO FRUTERO"){
    alert("Plato no encontrado")
    ok = false;
  }
  else{
    alert("Plato encontrado")
    ok = true;
  }
  return ok;
};
function buscarcedula(f){
  var ok = true;
  //var ejem=document.getElementById('txtusuario');
  var ejem=f.elements[0].value;
  var msg = "Debes escribir contenido en los campos:\n";
 // alert('Ingrese un equipo'   + ejem);
  if(ejem != "1727667220" ){
    alert("No se encontro ningún dato")
    ok = false;
  }
  else{
    alert("Dato encontrado")
    ok = true;
  }
  return ok;
};
function buscarpromo(f){
  var ok = true;
  //var ejem=document.getElementById('txtusuario');
  var ejem=f.elements[0].value;
  ejem = ejem.toUpperCase();
 // alert('Ingrese un equipo'   + ejem);
  if(ejem != "COMBO FAMILIAR DE POLLO"){
    alert("Promoción no encontrada")
    ok = false;
  }
  else{
    alert("Promoción encontrada")
    ok = true;
  }
  return ok;
};