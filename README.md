# LyG Motos - Proyecto Final React

E-commerce de productos para motos hecho con React y Firebase para el curso de Coderhouse.

## Descripción

Es una tienda online de productos para motocicletas donde se pueden ver cubiertas, cascos y accesorios. El usuario puede navegar por las categorías, ver el detalle de cada producto, agregar al carrito y finalizar la compra.

## Qué hace la aplicación

- Muestra un listado de productos que vienen de Firebase
- Tiene un filtro por categorías (cubiertas, cascos, accesorios)
- Al hacer click en un producto te lleva al detalle con más info
- Podés agregar productos al carrito eligiendo la cantidad
- El carrito muestra todos los productos agregados con el total
- Hay un formulario para completar datos y finalizar la compra
- Cuando comprás te da un número de orden
- Si agregás dos veces el mismo producto, suma las cantidades
- Tiene mensajes cuando el carrito está vacío o no hay stock

## Tecnologías que usé

- React (con hooks useState, useEffect, useContext)
- React Router para la navegación
- Firebase/Firestore para guardar productos y órdenes
- Bootstrap y React Bootstrap para los estilos
- Vite para correr el proyecto

## Componentes principales

- **NavbarBS**: la barra de navegación con los links a las categorías y el carrito
- **ItemListContainer**: trae los productos de Firebase y los muestra
- **ItemList**: recibe los productos y los mapea
- **Item**: la tarjeta de cada producto
- **ItemDetailContainer**: trae el detalle de un producto por id
- **ItemDetail**: muestra la info completa del producto
- **ItemCount**: contador para elegir cuántos productos agregar
- **CartView**: muestra todos los productos del carrito
- **CartWidget**: el iconito del carrito con el numerito de productos
- **CheckoutForm**: el formulario para comprar
- **CartContext**: maneja el estado del carrito en toda la app

## Cómo funciona Firebase

Tengo dos colecciones en Firestore:

**productos**: donde están todos los productos con su nombre, precio, stock, categoría, imagen y descripción

**orders**: donde se guardan las órdenes cuando alguien compra, con los datos del comprador, los productos que compró, el total y la fecha

## Cómo instalarlo
- [x] ItemCount con validaciones de stock y cantidades
- [x] ItemCount se oculta al agregar producto al carrito

### ✅ Navegación
- [x] React Router configurado con rutas dinámicas
- [x] Navegación por categorías desde NavBar
- [x] Modelo SPA sin recargas de página
- [x] Rutas: Home, Categorías, Detalle, Carrito, Checkout

### ✅ Carrito de Compras
- [x] CartContext con estado global del carrito
- [x] CartView mostrando productos, cantidades y totales
- [x] CartWidget con contador de unidades en NavBar
- [x] Funciones: agregar, eliminar, limpiar, calcular totales

### ✅ Firebase
- [x] Firestore como base de datos
- [x] Colección de productos con consultas dinámicas
- [x] Generación de órdenes al confirmar compra
- [x] Queries con filtros por categoría

### ✅ Experiencia de Usuario
- [x] Loaders durante la carga de datos
- [x] Mensajes: "sin stock", "carrito vacío", "producto no encontrado"
- [x] ID de orden mostrado al usuario tras la compra
- [x] Validaciones y feedback visual

## 🚦 Instalación y Uso
## Cómo instalarlo

1. Clonar el repo:
```bash
git clone https://github.com/kiritOCAVS/lygmotos.git
```

2. Entrar a la carpeta:
```bash
cd lygmotos
```

3. Instalar todo:
```bash
npm install
```

4. Correr el proyecto:
```bash
npm run dev
```

## Rutas que tiene

- `/` → página principal con todos los productos
- `/category/:type` → productos filtrados por categoría (cubiertas, cascos, accesorios)
- `/item/:id` → detalle de un producto
- `/cart` → el carrito
- `/checkout` → formulario para comprar

## Cosas que cumple el proyecto

✅ Tiene ItemListContainer e ItemDetailContainer
✅ Los componentes están separados en contenedores y presentacionales
✅ El ItemCount valida el stock y se oculta cuando agregás al carrito
✅ Usa React Router y navega sin recargar la página
✅ El carrito está en un Context y se puede ver desde cualquier lado
✅ CartWidget muestra la cantidad de productos
✅ Firebase guarda los productos y las órdenes
✅ Cuando comprás te da el ID de la orden
✅ Tiene loaders y mensajes de error

## Autor

Proyecto final para Coderhouse - React

## Notas

- La config de Firebase está en el código (en producción iría en variables de entorno)
- Los productos son de ejemplo
- Usé Bootstrap para no perder tiempo con CSS
