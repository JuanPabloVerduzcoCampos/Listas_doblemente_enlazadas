class Nodo{
    constructor(numero){
      this.numero=numero;
      this.sig=null;
      this.ant=null;
    }
}

class ListaDoble{

    constructor(){
      this.primero=null;
      this.ultimo=null;
    }

    agregar(nuevo){
      if (!this.primero){
        this.primero=nuevo;
        this.ultimo=nuevo;
      }else{
        this.ultimo.sig=nuevo;
        nuevo.ant=this.ultimo;
        this.ultimo=nuevo;
      }
    }

    
    
}

let lista = new ListaDoble();

class  Producto{
    constructor(codigo,nombre,costo,cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}

function addProducto(){
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let costo = document.getElementById("costo").value;
    
    if(codigo=="" || nombre=="" || cantidad=="" || costo==""){
        alert("Ingrese todos los datos");
    }
    let articulo = new Producto(codigo,nombre,costo,cantidad);

    lista.agregar(articulo);
    console.log(lista);

    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("costo").value = "";
}



function buscarX(){
    let codigo = document.getElementById("productoB").value;
    let temp=lista.primero;
    let tabla = document.getElementById("tabla1");
    tabla.innerHTML = "";
    while(temp){
        if(temp.codigo==codigo){
            tabla.innerHTML += `
            <tr>
                <td>${temp.codigo}</td>
                <td>${temp.nombre}</td>
                <td>${temp.cantidad}</td>
                <td>${temp.costo}</td>
            </tr>
            `
        }
        temp=temp.sig;
    }
    document.getElementById("productoB").value = "";
}

function eliminarX(){
    let codigo = document.getElementById("eliminarP").value;
    lista.eliminar(codigo);
    console.log(lista);
    document.getElementById("eliminarP").value = "";
}


function listar(){
    let temp=lista.primero;
    let tabla = document.getElementById("productos");
    tabla.innerHTML = "";
    while(temp){
        tabla.innerHTML += `
        <tr>
            <td>${temp.codigo}</td>
            <td>${temp.nombre}</td>
            <td>${temp.cantidad}</td>
            <td>${temp.costo}</td>
        </tr>
        `
        temp=temp.sig;
    }
}

function listarI(){
    let temp=lista.ultimo;
    let tabla = document.getElementById("prod");
    tabla.innerHTML = "";
    while(temp){
        tabla.innerHTML += `
        <tr>
            <td>${temp.codigo}</td>
            <td>${temp.nombre}</td>
            <td>${temp.cantidad}</td>
            <td>${temp.costo}</td>
        </tr>
        `
        temp=temp.ant;
    }
}

