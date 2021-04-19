# Para comenzar: Create React App

Este proyecto usa bootstrap: [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

En el directorio del proyecto, para hacer correr la app:

### `npm start`

Corre la app en modo desarrollador .\
Abre [http://localhost:3000](http://localhost:3000) para que se visibilice en el navegador.

La página recargará si haces cambios.

### src

Aquí encontrarás el funcionamiento de la App, dentro de ella verás a la carpeta madre components,
dentro de ella están todos los archivos, algunos de ellos dentro de otra carpeta.
Solo las carpetas "Cart, firebase y routes" están por fuera de components.

### Navbar

Un simple menú donde puedes filtrar el tipo de comida que prefieras.

### RouterApp

Este archivo se encarga de redireccionar la app entre sus componentes.

### ItemList

Podrás visualizar toda la lista de comidas y podrás seleccionar y agregar según el stock
disponible lo que quieras agregar al carrito.

### CartWidget

Solo se mostrará, (con el total de tu selección) una vez que hayas seleccionado las comidas 
con el botón "Agregar".

### Cart

Aquí tendrás el detalle de tu selección de comidas y podrás eliminar alguna selección que no
quieras hacer o mismo, podrás seguir el procedimiento con el botón "ir a pagar".

### CheckOut

Este es el último paso, aquí completarás tus datos personales y luego, al clickear "generar orden",
tu información se enviará a la base de datos de firebase.

### firebase

En este archivo, se encuentran los productos disponibles y las ordenes que se van cargando a medida
que los usuarios van generando sus compras.
De igual manera, estos datos son exclusivos del propietario de la app.

### App.css

Aquí verás todos los estilos de la app.

### Cloudinary

Las imagenes se encuentran en cloudinary. [https://cloudinary.com/]

## Aprende más

Puedes aprender mas aquí -> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, chequea -> [React documentation](https://reactjs.org/).


