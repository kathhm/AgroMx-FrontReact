# AgroMX - Ecommerce de productos agroecológicos

AgroMX es una aplicación ecommerce, enfocada en la venta de productos agroecológicos, que pretende conectar a productores locales de toda la República Mexicana con consumidores interesados en productos nutritivos y producidos sosteniblemente.

La plataforma tiene diversas funcionalidades propias de las plataformas de comercio en línea como un catálogo con filtros que redirige a una página de productos, registro de usuario, inicio de sesión, registro de nuevos productos y un carrito, además de una página de comunidad donde los usuarios pueden interactuar. Incluimos una base de datos con un catálogo de productos provenientes de distintos productores dummy, con descripciones y ejemplos de técnicas de producción aroecológica.

Esta plataforma no solo facilita la compra y venta de productos agroecológicos, sino que además busca estimular la economía local y promover el consumo responsable. En AgroMX, creemos en un modelo de comercio electrónico que beneficia tanto a los pequeños productores como a los consumidores finales.

## Páginas del proyecto y features

**Landing page**
|  Features                           | Coded? |
| ----------------------------------- | ------ |
| Categorías que redirigen a filtros  |   ✔   |

**Registro de usuario**
|  Features                    | Coded? |
| ---------------------------- | ------ |
| Petición de registro POST    |   ✔   |
| Validación de datos          |   ✔   |
| Ojo para ocultar contraseña  |   ✔   |

**Inicio de sesión**
|  Features                        |  Coded? |
| -------------------------------- | ------- |
| Inicio de sesión con Google      |    ✔    |
| Petición GET para iniciar sesión |    ✔    |
| Validación de e-mail             |    ✔    |

**Agregar un producto**
|  Features                           |  Coded? |
| ----------------------------------- | ------- |
| Validación de datos                 |    ✔    |
| Petición POST para agregar producto |    ✔    |
| Ver catálogo                        |    ✔    |

**Catálogo**
|  Features                               |  Coded? |
| --------------------------------------- | ------- |
| Filtros por categoría                   |    ✔    |
| Petición GET para tarjetas de producto  |    ✔    |
| Botón para agregar a carrito            |    ✔    |
| Redirección a página de producto        |    ✔    |

**Producto**
|  Features                               |  Coded? |
| --------------------------------------- | ------- |
| Contador                                |    ✔    |
| Agregar a carrito                       |         |
| Petición GET para datos de producto     |    ✔    |

**Sobre Nosotros**
|  Features                               |  Coded? |
| --------------------------------------- | ------- |

**Comunidad**
|  Features                               |  Coded? |
| --------------------------------------- | ------- |
| Carrusel con información de productores |    ✔    |
| Carrusel con recetas                    |         |
| Petición GET para datos de producto     |    ✔    |

**Developer team**
|  Features                               |  Coded? |
| --------------------------------------- | ------- |
| Tarjetas con info de desarrolladores    |    ✔    |

## Tecnologías utilizadas

El frontend de AgroMX ha sido desarrollado con las siguientes tecnologías:

- **JSX**: Para la estructura del contenido y la interactividad, usando eficientemente código y mejorar el rendimiento.
- **CSS3**: Para manejar los estilos de las páginas.

## Instalación y configuración

### Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Git (para clonar el repositorio)

### Pasos de instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/agromx-frontend.git
   ```
2. Ingresar al directorio del proyecto:
   ```sh
   cd agromx-frontend
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Iniciar el entorno de desarrollo:
   ```sh
   npm start
   ```

Esto ejecutará la aplicación en `http://localhost:3000/`.

## Estructura del proyecto

```
/agromx-frontend
│── /public        # Archivos estáticos y assets
│   │── /data      # Archivos JSON con datos de productos
│   │── /images    # Imágenes del sitio
│   │── /json      # Otros datos en formato JSON
│── /src
│   │── /components  # Componentes reutilizables
│   │── /context     # Contexto de la aplicación
│   │── /pages       # Páginas principales del sitio
│   │   │── /Carrito         # Página del carrito de compras
│   │   │── /Catalogo        # Catálogo de productos
│   │   │── /Comunidad       # Sección comunitaria
│   │   │── /DetallesProducto # Detalles de un producto
│   │   │── /DeveloperTeam   # Información del equipo
│   │   │── /login           # Página de inicio de sesión
│   │   │── /Productos       # Listado de productos
│   │   │── /Registro        # Página de registro de usuarios
│   │   │── /SobreNosotros   # Información sobre la empresa
│   │── carrito.jsx  # Componente del carrito de compras
│   │── Inicio.jsx   # Página de inicio
│   │── App.css      # Estilos generales de la aplicación
│   │── App.jsx      # Componente principal de React
│   │── index.css    # Estilos base
│   │── main.jsx     # Punto de entrada de la aplicación
│── .gitignore       # Archivos y carpetas ignorados por Git
│── .prettierrc.json # Configuración de Prettier
│── eslint.config.js # Configuración de ESLint
│── index.html       # Archivo base HTML
│── LICENSE          # Licencia del proyecto
│── package-lock.json# Archivo de bloqueo de dependencias
│── package.json     # Dependencias y configuración de npm
│── README.md        # Documentación del proyecto
│── vercel.json      # Configuración para despliegue en Vercel
│── vite.config.js   # Configuración de Vite para React
```

## Deployment

Para desplegar la aplicación en un entorno de producción, se recomienda utilizar plataformas como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) (solo para proyectos estáticos)

Pasos para despliegue en Vercel:

1. Instalar Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Autenticarse en Vercel:
   ```sh
   vercel login
   ```
3. Desplegar el proyecto:
   ```sh
   vercel
   ```

## Contribución

Si deseas contribuir al proyecto:

1. Realiza un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios y confirma los commits (`git commit -m "Descripción del cambio"`).
4. Sube los cambios a tu fork (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request en el repositorio principal.

## Contacto

Si tienes dudas o sugerencias, puedes contactarnos a:

- **jaelbkz@icloud.com**
- **katherinehinojosamolina@gmail.com**
- **diazdae@gmail.com**
- **liset10nieve@live.com.mx**
- **elizabethania.te@gmail.com**
- **davidavellaneda863@gmail.com**
- **ecjeux24@gmail.com**
- **hilarihernandezislas@gmail.com**
