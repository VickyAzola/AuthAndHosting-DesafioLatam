# Proyecto de Autenticación con Vue 3 y Firebase

## Tabla de Contenidos

- [Descripción](#descripción)
- [Funcionalidades principales](#funcionalidades-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Autores](#autores)

## Descripción

Este proyecto es una aplicación simple creada con **Vue 3** que implementa la autenticación de usuarios utilizando **Firebase Authentication**. Los usuarios pueden registrarse, iniciar sesión y ser redirigidos a páginas protegidas. También maneja errores comunes como el registro de correos electrónicos duplicados y contraseñas incorrectas.

Con **Firebase Hosting** se hizo deploy de la aplicación, puedes [revisar el resultado aqui](https://crear-usuarios-4131d.web.app)

## Funcionalidades principales

### Registro de usuarios

Los usuarios pueden registrarse proporcionando su correo electrónico y contraseña. El sistema maneja errores como el registro de correos duplicados y muestra mensajes de error adecuados al usuario.

### Inicio de sesión de usuarios

Los usuarios pueden iniciar sesión utilizando el correo electrónico y la contraseña. Si las credenciales son correctas, son redirigidos a la página de home. Si no, se les muestra un mensaje de error.

### Protección de rutas

Las rutas están protegidas usando Vue Router. Solo los usuarios autenticados pueden acceder a la página de home. Si un usuario no autenticado intenta acceder, es redirigido a la página de inicio de sesión.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del sitio web.
- **CSS**: Para el diseño y la presentación del sitio web.
- **Vue.js**: Framework de JavaScript para construir interfaces de usuario.
- **Vue Router**: Para Single Page Aplication.
- **Firebase Authentication**: Para crear usuarios y permitir el inicio de sesión mediante autentificacion.
- **Firebase Hosting**: Para hacer deploy de la aplicación.

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/VickyAzola/AuthAndHosting-DesafioLatam.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd AuthAndHosting-DesafioLatam
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```
    
4. Configura Firebase para la autenticación en este proyecto.
5. Obtén las credenciales de Firebase.
6. Crea un archivo .env en la raíz del proyecto y añade tus credenciales de Firebase.
   
7. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

8. Abre el enlace 'Local' en tu navegador para ver la aplicación en funcionamiento.

## Autores

- **Desarrollador Principal y Diseñador**: [Victoria Azola Silva](https://github.com/VickyAzola) - Responsable del desarrollo del código.
