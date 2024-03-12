# Actividad Práctica (No Evaluativa): Desarrollo del Frontend con HTML, CSS y JavaScript

## Objetivo de la Actividad

El propósito de esta actividad práctica es permitir que los estudiantes apliquen y refuercen los conocimientos adquiridos a lo largo del curso en el desarrollo del frontend de una aplicación web. Mediante el uso de HTML, CSS y JavaScript, tendrán la oportunidad de diseñar e implementar una interfaz de usuario que sea tanto atractiva como funcional.

## Consignas

### 1. Diseño de Interfaz de Usuario

- Desarrolle una interfaz de usuario que sea atractiva y esté adaptada para dispositivos móviles (responsive) utilizando HTML y CSS.
- Aplique principios básicos de diseño web para garantizar que la interfaz sea fácil de usar y navegar por el usuario.

### 2. Funcionalidades Interactivas con JavaScript

- Implemente características interactivas en su proyecto utilizando JavaScript. Esto puede incluir, pero no se limita a, la manipulación del DOM, validaciones de formularios, y animaciones que mejoren la experiencia del usuario.
- Integre eventos para interactuar con los usuarios, como clics de botón y entradas de formulario, para hacer que la página web sea dinámica.

### 3. Diseño Responsivo

- Asegure que el diseño de su proyecto sea responsivo, lo que significa que debe verse y funcionar bien en una variedad de dispositivos y tamaños de pantalla, desde teléfonos móviles hasta pantallas de computadora de escritorio.

### 4. Documentación y Comentarios

- Incluya documentación y comentarios en su código cuando sea necesario para explicar el propósito de segmentos específicos de código o las decisiones de diseño tomadas. Esto no solo es una buena práctica, sino que también facilita la colaboración con otros desarrolladores.

## Publicación del Proyecto

- Cree un repositorio en GitHub para alojar el código de su proyecto. Esto no solo sirve como una forma de versionar y guardar su trabajo, sino que también facilita la compartición y colaboración con otros.
- Utilice GitHub Pages para desplegar su proyecto y obtener una URL accesible públicamente. Esto le permitirá visualizar su trabajo en la web sin necesidad de descargar y ejecutar el código localmente.

Esta actividad es una excelente oportunidad para practicar la integración de HTML, CSS y JavaScript en un proyecto real, permitiéndoles experimentar con el diseño y la programación de una interfaz de usuario desde cero. Es importante recordar que el enfoque está en el proceso de aprendizaje y experimentación, no en la evaluación. ¡Diviértanse y sean creativos con su proyecto!

rules_version = '2';

service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write: if false;
}
}
}

if request.time < timestamp.date(2024, 4, 8)
