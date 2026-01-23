document.addEventListener("DOMContentLoaded", () => {
    fetch("/src/assets/json/componentes.json")
        .then(respuesta => respuesta.json())
        .then(datos => {
            const contenedor_opciones = document.getElementById("id-seccion-menu-opciones");

            // Archivo actual (ej: index.html)
            const paginaActual = window.location.pathname.split("/").pop();

            datos.componentes.forEach(item => {
                const opcion = document.createElement("a");
                opcion.classList.add("opcion-menu-opciones");
                opcion.href = item.ruta;

                // Insertar SVG + texto
                opcion.innerHTML = `
                    ${item.icono ? item.icono : ""}
                    ${item.nombre}
                `;

                // Archivo de la ruta del JSON
                const archivoOpcion = item.ruta.split("/").pop();

                // Comparación para opción activa
                if (archivoOpcion === paginaActual) {
                    opcion.classList.add("opcion-activa");
                }

                contenedor_opciones.appendChild(opcion);
            });
        })
        .catch(error => console.error("Error cargando el menú:", error));
});