import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo3',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css',
})
export class Ejemplo3Component {
  title = 'ejemplo3';

  //propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0,
  };

  listaProductos = [
    // create at list 5 products with the characteristics that are listed above
    {
      id: 1,
      descripcion: 'Gansito Marinela',
      precio: 15.5,
    },
    {
      id: 2,
      descripcion: 'Sabritas Originales',
      precio: 18.75,
    },
    {
      id: 3,
      descripcion: 'Coca-Cola 600ml',
      precio: 20.0,
    },
    {
      id: 4,
      descripcion: 'Galletas Chokis',
      precio: 25.5,
    },
    {
      id: 5,
      descripcion: 'Sidral Mundet',
      precio: 18.5,
    },
  ];

  //función para agregar un producto a la lista
  agregarProducto() {
    if (this.producto.id === 0) {
      alert('El id del producto no puede ser 0');
      return;
    }
    //verificar que el id no exista
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    //damos de alta el producto
    this.listaProductos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
    });

    //settear los valores a cero
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //función para seleccionar un producto de la tabla
  seleccionarProducto(productoSeleccionado: {
    id: number;
    descripcion: string;
    precio: number;
  }) {
    {
      this.producto.id = productoSeleccionado.id;
      this.producto.descripcion = productoSeleccionado.descripcion;
      this.producto.precio = productoSeleccionado.precio;
    }
  }

  // función para modificar un producto existente
  modificarProducto() {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        this.listaProductos[i].descripcion = this.producto.descripcion;
        this.listaProductos[i].precio = this.producto.precio;

        //settear los valores a cero
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No existe ese ID');
  }

  //eliminar  un producto de la tabla
  eliminarProducto(id: number) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i].id) {
        this.listaProductos.splice(i, 1);
        return;
      }
    }
  }
}
