
    function validar_login(f){
        var ok = true;
        //var ejem=document.getElementById('txtusuario');
        var ejem=f.elements[1].value;
        var msg = "Debes escribir contenido en los campos:\n";
       // alert('Ingrese un equipo'   + ejem);
        if(f.elements[0].value != "usuario1")
        {
        alert('Usuario Incorrecto');
          ok = false;
        }
        if(ejem != "contraseña1")
        {
          alert('Contraseña Incorrecta');
          ok = false;
        }
        return ok;
      };

      function login_admin(){ 
        var done=0; 
        var usuario=document.login.usuario.value; 
        var password=document.login.password.value; 
        if (usuario!="admin1")
            {
            alert('Usuario Incorrecto');
            }
        if (password!="contra1")
            {
            alert('Contraseña Incorrecta');
            }   
        if (usuario=="admin1" && password=="contra1") { 
        window.location="administrador/index.html"; 
        } 
        } ;

        