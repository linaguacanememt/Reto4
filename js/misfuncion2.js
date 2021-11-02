unction traerInformacionCategorias(){
    $.ajax({
        //url:"http://129.151.125.42:80/api/Category/all",
        url:"http://localhost:80/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategorias(respuesta);
        }
    });
}

function traerInformacionBotes(){
    $.ajax({
        //url:"http://129.151.125.42:80/api/Boat/all",
        url:"http://localhost:80/api/Boat/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBotes(respuesta);
        }
    });
}

function traerInformacionClientes(){
    $.ajax({
        //url:"http://129.151.125.42:80/api/Client/all",
        url:"http://localhost:80/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function traerInformacionMensajes(){
    $.ajax({
        //url:"http://129.151.125.42:80/api/Message/all",
        url:"http://localhost:80/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}

function traerInformacionReservaciones(){
    $.ajax({
        //url:"http://129.151.125.42:80/api/Reservation/all",
        url:"http://localhost:80/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}

function pintarRespuestaCategorias(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoCategoria("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCategorias").html(myTable);
}

function pintarRespuestaBotes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionBotes("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoBote("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoBotes").html(myTable);
}

function pintarRespuestaClientes(respuesta){
    
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionClientes("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoCliente("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}
         
function pintarRespuestaMensajes(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMensajes("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoMensaje("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensajes").html(myTable);
}

function pintarRespuestaReservaciones(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionReservaciones("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarElementoReservacion("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoReservaciones").html(myTable);
}

function guardarInformacionCategorias(){
    console.log();
    if($("#nameCategoria").val() !== "" &
       $("#descriptionCategoria").val() !== "" ){
            let var2 = {
                name:$("#nameCategoria").val(),
                description:$("#descriptionCategoria").val()
            };
            $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                //url:"http://129.151.125.42:80/api/Category/save",
                url:"http://localhost:80/api/Category/save",
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Categorias\"")
            return false
        }
}

function guardarInformacionBotes(){
    console.log();
    if($("#name").val() !== "" &
       $("#brand").val() !== "" &
       $("#year").val()  !== "" &
       $("#description").val() !== "" ){
            let var2={
                name:$("#name").val(),
                brand:$("#brand").val(),
                year:$("#year").val(),
                description:$("#description").val(),
            };
            $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                //url:"http://129.151.125.42:80/api/Boat/save",
                url:"http://localhost:80/api/Boat/save",
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
            });    
        } else {
            alert("Debe diligenciar todos los campos de \"Barcos\"")
            return false
        }
}

function guardarInformacionClientes(){
    console.log();
    if($("#email").val() !== "" &
       $("#password").val() !== "" &
       $("#nameCliente").val()  !== "" &
       $("#age").val() !== "" ){
            let var2={
                email:$("#email").val(),
                password:$("#password").val(),
                name:$("#nameCliente").val(),
                age:$("#age").val(),
            };
            $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                //url:"http://129.151.125.42:80/api/Client/save",
                url:"http://localhost:80/api/Client/save",
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
            });    
        } else {
            alert("Debe diligenciar todos los campos de \"Clientes\"")
            return false
        }    
}

function guardarInformacionMensajes(){
    console.log();
    if($("#messagetext").val() !== ""){
            let var2={
                messageText:$("#messagetext").val(),
            };
            $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                //url:"http://129.151.125.42:80/api/Message/save",
                url:"http://localhost:80/api/Message/save",
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Mensajes\"")
            return false
        }
}

function guardarInformacionReservaciones(){
    console.log();
    if($("#startDate").val() !== "" &
       $("#devolutionDate").val() !== "" &
       $("#status").val()  !== ""){
            let var2={
                startDate:$("#startDate").val(),
                devolutionDate:$("#devolutionDate").val(),
                status:$("#status").val(),
            };
            $.ajax({
                type:'POST',
                contentType: "application/json; charset=utf-8",
                dataType: 'JSON',
                data: JSON.stringify(var2),
                //url:"http://129.151.125.42:80/api/Reservation/save",
                url:"http://localhost:80/api/Reservation/save",
                success:function(response) {
                    console.log(response);
                    console.log("Se guardo correctamente");
                    alert("Se guardo correctamente");
                    window.location.reload()
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    window.location.reload()
                    alert("No se guardo correctamente");
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Reservaciones\"")
            return false
        }

}

function actualizarInformacionCategorias(idElemento){
    console.log();
    if($("#nameCategoria").val() !== "" &
       $("#descriptionCategoria").val() !== "" ){
            let myData={
                id:idElemento,
                name:$("#nameCategoria").val(),
                description:$("#descriptionCategoria").val()
            };
            console.log(myData);
            let dataToSend=JSON.stringify(myData);
            $.ajax({
                //url:"http://129.151.125.42:80/api/Category/update",
                url:"http://localhost:80/api/Category/update",
                type:"PUT",
                data:dataToSend,
                contentType:"application/JSON",
                datatype:"JSON",
                success:function(respuesta){
                    $("#resultado").empty();
                    $("#idCategoria").val("");
                    $("#nameCategoria").val("");
                    $("#descriptionCategoria").val("");
                    traerInformacionCategorias();
                    alert("se ha Actualizado correctamente la categoria")
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Categorias\"")
            return false
        }
}

function actualizarInformacionBotes(idElemento){
    console.log();
    if($("#name").val() !== "" &
       $("#brand").val() !== "" &
       $("#year").val()  !== "" &
       $("#description").val() !== "" ){
            let myData={
                id:idElemento,
                name:$("#name").val(),
                brand:$("#brand").val(),
                year:$("#year").val(),
                description:$("#description").val(),
            };
            console.log(myData);
            let dataToSend=JSON.stringify(myData);
            $.ajax({
                //url:"http://129.151.125.42:80/api/Boat/update",}
                url:"http://localhost:80/api/Boat/update",
                type:"PUT",
                data:dataToSend,
                contentType:"application/JSON",
                datatype:"JSON",
                success:function(respuesta){
                    $("#resultadoBotes").empty();
                    $("#id").val("");
                    $("#name").val("");
                    $("#brand").val("");
                    $("#year").val("");
                    $("#description").val("");
                    traerInformacionBotes();
                    alert("se ha Actualizado correctamente Botes")
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Barcos\"")
            return false
        }
}

function actualizarInformacionClientes(idElemento){
    console.log();
    if($("#email").val() !== "" &
       $("#password").val() !== "" &
       $("#nameCliente").val()  !== "" &
       $("#age").val() !== "" ){    
            let myData={
                idClient:idElemento,
                email:$("#email").val(),
                password:$("#password").val(),
                name:$("#nameCliente").val(),
                age:$("#age").val(),
            };
            console.log(myData);
            let dataToSend=JSON.stringify(myData);
            $.ajax({
                //url:"http://129.151.125.42:80/api/Client/update",
                url:"http://localhost:80/api/Client/update",
                type:"PUT",
                data:dataToSend,
                contentType:"application/JSON",
                datatype:"JSON",
                success:function(respuesta){
                    $("#resultadoClientes").empty();
                    $("#idCliente").val("");
                    $("#email").val("");
                    $("#password").val("");
                    $("#nameCliente").val("");
                    $("#age").val("");
                    traerInformacionClientes();
                    alert("se ha Actualizado")
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Clientes\"")
            return false
        } 
}

function actualizarInformacionMensajes(idElemento){
    console.log();
    if($("#messagetext").val() !== ""){
            let myData={
                idMessage:idElemento,
                messageText:$("#messagetext").val(),
            };
            console.log(myData);
            let dataToSend=JSON.stringify(myData);
            $.ajax({
                //url:"http://129.151.125.42:80/api/Message/update",
                url:"http://localhost:80/api/Message/update",
                type:"PUT",
                data:dataToSend,
                contentType:"application/JSON",
                datatype:"JSON",
                success:function(respuesta){
                    $("#resultadoMensajes").empty();
                    $("#idMensajes").val("");
                    $("#messagetext").val("");
                    traerInformacionMensajes();
                    alert("se ha Actualizado")
                }
            });
        } else {
            alert("Debe diligenciar todos los campos de \"Mensajes\"")
            return false
        }
}

function actualizarInformacionReservaciones(idElemento){
    console.log();
    if($("#startDate").val() !== "" &
       $("#devolutionDate").val() !== "" &
       $("#status").val()  !== ""){
            let myData={
                idReservation:idElemento,
                startDate:$("#startDate").val(),
                devolutionDate:$("#devolutionDate").val(),
                status:$("#status").val(),
            };
            console.log(myData);
            let dataToSend=JSON.stringify(myData);
            $.ajax({
                //url:"http://129.151.125.42:80/api/Reservation/update",
                url:"http://localhost:80/api/Reservation/update",
                type:"PUT",
                data:dataToSend,
                contentType:"application/JSON",
                datatype:"JSON",
                success:function(respuesta){
                    $("#resultadoClientes").empty();
                    $("#idReservacion").val("");
                    $("#startDate").val("");
                    $("#devolutionDate").val("");
                    $("#status").val("");
                    traerInformacionReservaciones();
                    alert("se ha Actualizado")
                }
            });
        } else {
            alert("Debe diligenciar Todos los campos de \"Reservaciones\"")
            return false
        }
}

function borrarElementoCategoria(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://129.151.125.42:80/api/Category/"+idElemento,
        url:"http://localhost:80/api/Category/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });
}

function borrarElementoBote(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://129.151.125.42:80/api/Boat/"+idElemento,
        url:"http://localhost:80/api/Boat/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionBotes();
            alert("Se ha Eliminado.")
        }
    });
}

function borrarElementoCliente(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://129.151.125.42:80/api/Client/"+idElemento,
        url:"http://localhost:80/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://129.151.125.42:80/api/Message/"+idElemento,
        url:"http://localhost:80/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado.")
        }
    });
}


function borrarElementoReservacion(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        //url:"http://129.151.125.42:80/api/Reservation/"+idElemento,
        url:"http://localhost:80/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            alert("Se ha Eliminado.")
        }
    });
}