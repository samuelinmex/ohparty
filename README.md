# Oh Party! — Landing page

Sitio estático listo para GitHub Pages.

## Antes de publicar

1. Abre `script.js`.
2. Cambia:
   `whatsapp: "529980000000"`
   por el WhatsApp real en formato internacional, sin `+`, espacios ni guiones.
3. En `index.html`, cambia:
   - `hola@oh-party.com.mx` si usarás otro correo.
   - El enlace de Instagram.
4. Revisa los textos de servicios para que coincidan exactamente con lo que ofrece Oh Party!.

## Publicar en GitHub Pages

Sube estos archivos a la raíz del repositorio:

- `index.html`
- `styles.css`
- `script.js`

Después ve a:
Settings → Pages → Deploy from a branch → `main` / `(root)`.

## Dominio personalizado

En GitHub Pages agrega:
`oh-party.com.mx`

Para conservar el dominio en el repositorio, también puedes crear un archivo `CNAME` con:
`oh-party.com.mx`

Este paquete ya incluye ese archivo.

## Importante

La página NO inventa testimonios, clientes, métricas ni reseñas. Cuando tengas material real, conviene agregar una sección visual de eventos reales y prueba social.


## Animaciones

La versión v2 incluye un sistema de movimiento sin librerías externas:

- entrada escalonada del hero;
- animaciones suaves al hacer scroll;
- ticket y stickers flotantes;
- profundidad ligera al mover el mouse;
- brillo ambiental sutil;
- tarjetas y botones con microinteracciones;
- compatibilidad con `prefers-reduced-motion` para accesibilidad.

La intención es que se sienta divertido sin perder una apariencia premium.


## Identidad visual integrada

Esta versión ya integra el logo real de Oh Party!, sus variantes para web,
favicon y las dos fotografías reales proporcionadas para la sección visual del sitio.

No muevas los archivos fuera de `/assets/images/` sin actualizar sus rutas en `index.html`.
