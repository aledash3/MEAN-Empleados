# 🚀 MEAN - Sistema de Gestión de Empleados

Aplicación web desarrollada con arquitectura **MEAN Stack (MongoDB,
Express, Angular, Node.js)** para la gestión y administración de
empleados.

Este proyecto implementa una arquitectura cliente-servidor separando
claramente el backend (API REST) del frontend (Angular).

------------------------------------------------------------------------

## 📌 Descripción del Proyecto

El sistema permite realizar operaciones CRUD sobre empleados:

-   ✔ Crear empleados\
-   ✔ Listar empleados\
-   ✔ Actualizar información\
-   ✔ Eliminar empleados

El backend expone una API REST conectada a MongoDB, mientras que el
frontend consume dichos servicios mediante Angular.

------------------------------------------------------------------------

## 🏗️ Arquitectura del Proyecto

MEAN-Empleados/ │ ├── backend/ → API REST (Node.js + Express + MongoDB)
├── frontend/ → Aplicación Angular ├── package.json └── README.md

------------------------------------------------------------------------

## 🛠️ Tecnologías Utilizadas

### 🔹 Backend

-   Node.js\
-   Express\
-   MongoDB\
-   Mongoose\
-   CORS\
-   Nodemon

### 🔹 Frontend

-   Angular\
-   TypeScript\
-   HTML5\
-   CSS3\
-   Bootstrap (si aplica)

### 🔹 Base de Datos

-   MongoDB Atlas (Base de datos en la nube)

------------------------------------------------------------------------

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

git clone https://github.com/aledash3/MEAN-Empleados.git cd
MEAN-Empleados

------------------------------------------------------------------------

## 🔹 Configuración del Backend

### Instalar dependencias

cd backend npm install

### Crear archivo .env

MONGODB_URI=tu_cadena_de_conexion\
PORT=4000

### Ejecutar servidor

npm run dev

O:

node index.js

Servidor disponible en:

http://localhost:4000

------------------------------------------------------------------------

## 🔹 Configuración del Frontend

### Instalar dependencias

cd frontend npm install

### Ejecutar Angular

ng serve

Aplicación disponible en:

http://localhost:4200

------------------------------------------------------------------------

## 🔗 Endpoints API (Ejemplo)

  Método   Endpoint             Descripción
  -------- -------------------- -----------------------------
  GET      /api/empleados       Obtener todos los empleados
  GET      /api/empleados/:id   Obtener empleado por ID
  POST     /api/empleados       Crear nuevo empleado
  PUT      /api/empleados/:id   Actualizar empleado
  DELETE   /api/empleados/:id   Eliminar empleado

------------------------------------------------------------------------

## 🧠 Modelo de Datos (Ejemplo)

{ nombre: String, cargo: String, salario: Number, departamento: String,
fechaIngreso: Date }

------------------------------------------------------------------------

## 📚 Objetivo Académico

Proyecto desarrollado como práctica académica para comprender:

-   Arquitectura MEAN
-   Consumo de APIs REST
-   Conexión Angular - Node
-   Gestión de base de datos MongoDB
-   Separación de responsabilidades frontend/backend

------------------------------------------------------------------------

## 👨‍💻 Autor

David Alejandro Cruz Palacios
Proyecto académico -- Ingeniería en Ciencias de la Computación

------------------------------------------------------------------------

## 📄 Licencia

Uso académico y educativo.
