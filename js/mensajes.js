
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
