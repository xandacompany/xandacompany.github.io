document.addEventListener("DOMContentLoaded", () => {
    // Cargar los datos del JSON
    fetch("/src/assets/json/componentes.json")
        .then(response => response.json())  // Usar el método .json() para parsear correctamente
        .then(datos => {
            const contenedor = document.getElementById("id-contenedor-resultados");
            const buscador = document.getElementById("buscador");
            const mensajeSinResultados = document.getElementById("mensaje-sin-resultados");
            const svgResultados = document.getElementById("svg-resultados");

            // Función para mostrar los componentes
            const mostrarComponentes = (componentes) => {
                contenedor.innerHTML = ''; // Limpiar el contenedor de resultados

                if (componentes.length === 0) {
                    // Si no hay resultados, mostrar mensaje de "SIN RESULTADOS"
                    contenedor.innerHTML = `
                        <svg class="svg-resultados" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="page_x2C__document_x2C__emoji_x2C__No_results_x2C__empty_page">

                            <g id="XMLID_1521_">

                            <path d="M21.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S21.09,14.75,21.5,14.75z" fill="#263238" id="XMLID_1887_"/>

                            <path d="M10.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S10.09,14.75,10.5,14.75z" fill="#263238" id="XMLID_1885_"/>

                            </g>

                            <g id="XMLID_1337_">

                            <g id="XMLID_4010_">

                            <polyline fill="none" id="XMLID_4073_" points="     21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5    " stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <polyline fill="none" id="XMLID_4072_" points="     21.5,1.5 27.479,7.5 21.5,7.5 21.5,4    " stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <path d="     M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" id="XMLID_4071_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <g id="XMLID_4068_">

                            <path d="      M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z" fill="none" id="XMLID_4070_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <path d="      M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z" fill="none" id="XMLID_4069_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            </g>

                            </g>

                            <g id="XMLID_2974_">

                            <polyline fill="none" id="XMLID_4009_" points="     21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5    " stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <polyline fill="none" id="XMLID_4008_" points="     21.5,1.5 27.479,7.5 21.5,7.5 21.5,4    " stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <path d="     M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" id="XMLID_4007_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <g id="XMLID_4004_">

                            <path d="      M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z" fill="none" id="XMLID_4006_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            <path d="      M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z" fill="none" id="XMLID_4005_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                            </g>

                            </g>

                            </g>

                            </g>
                        </svg>
                        <p class="texto-sin-resultados" id="mensaje-sin-resultados">SIN RESULTADOS</p>
                    `;
                } else {
                    componentes.forEach(funcionflecha => {
                        const tarjeta = document.createElement("div");
                        tarjeta.classList.add("tarjeta-componentes");

                        const imagen = document.createElement("img");
                        imagen.src = funcionflecha.portada;
                        imagen.alt = funcionflecha.nombre;
                        imagen.title = funcionflecha.nombre;

                        const h4 = document.createElement("h4");
                        h4.textContent = funcionflecha.nombre;

                        const boton = document.createElement("a");
                        boton.classList.add("boton-descargar-componente");
                        boton.src = funcionflecha.ruta;
                        boton.textContent = "DESCARGAR";

                        const contenedoruniversal = document.createElement("div");
                        contenedoruniversal.classList.add("contenedor-universal");
                        contenedoruniversal.style.justifyContent = "space-between";

                        // Primero añadimos el botón
                        contenedoruniversal.appendChild(boton);

                        // Luego añadimos el SVG
                        contenedoruniversal.innerHTML += `
                        <svg class="svg-informacion-componente" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
                            <path d="M12 17V11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                            <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#1C274C"/>
                        </svg>
                        `;

                        tarjeta.appendChild(imagen);
                        tarjeta.appendChild(h4);
                        tarjeta.appendChild(contenedoruniversal);

                        // Finalmente, añadir la tarjeta al contenedor principal
                        contenedor.appendChild(tarjeta);
                    });
                }
            };

            // Mostrar mensaje de "REALIZA UNA BÚSQUEDA" cuando el campo de búsqueda esté vacío
            const mostrarMensajeBusqueda = () => {
                contenedor.innerHTML = `
                    <svg class="svg-resultados" id="svg-resultados" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="search_x2C__magnifier_x2C__magnifying_x2C__emoji_x2C__happy">

                        <g id="XMLID_1949_">

                        <g id="XMLID_2132_">

                        <path d="M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z" fill="#263238" id="XMLID_2137_"/>

                        <path d="M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z     " fill="#263238" id="XMLID_2134_"/>

                        <path d="M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z" fill="#263238" id="XMLID_2133_"/>

                        </g>

                        </g>

                        <g id="XMLID_1838_">

                        <g id="XMLID_4088_">

                        <line fill="none" id="XMLID_4094_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="23.43" x2="21.214" y1="23.401" y2="21.186"/>

                        <path d="     M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z" fill="none" id="XMLID_4093_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <circle cx="13" cy="13" fill="none" id="XMLID_4092_" r="11.5" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z" fill="none" id="XMLID_4091_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z" fill="none" id="XMLID_4090_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z" fill="none" id="XMLID_4089_" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        </g>

                        <g id="XMLID_3004_">

                        <line fill="none" id="XMLID_4087_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="23.43" x2="21.214" y1="23.401" y2="21.186"/>

                        <path d="     M29.914,27.086l-3.5-3.5c-0.756-0.756-2.072-0.756-2.828,0C23.208,23.964,23,24.466,23,25s0.208,1.036,0.586,1.414l3.5,3.5     c0.378,0.378,0.88,0.586,1.414,0.586s1.036-0.208,1.414-0.586S30.5,29.034,30.5,28.5S30.292,27.464,29.914,27.086z" fill="none" id="XMLID_3009_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <circle cx="13" cy="13" fill="none" id="XMLID_3008_" r="11.5" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M12,14.521h2c0,0.55-0.45,1-1,1S12,15.07,12,14.521z" fill="none" id="XMLID_3007_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M17.5,13c0.27,0,0.5,0.23,0.5,0.5S17.77,14,17.5,14S17,13.77,17,13.5S17.23,13,17.5,13z" fill="none" id="XMLID_3006_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        <path d="     M8.5,13C8.77,13,9,13.23,9,13.5S8.77,14,8.5,14S8,13.77,8,13.5S8.23,13,8.5,13z" fill="none" id="XMLID_3005_" stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/>

                        </g>

                        </g>

                        </g>
                    </svg>
                    <p class="texto-sin-resultados" id="mensaje-sin-resultados">REALIZA UNA BÚSQUEDA</p>
                `;
            };

            // Mostrar todos los componentes o el mensaje de búsqueda si el input está vacío
            if (buscador.value === '') {
                mostrarMensajeBusqueda();
            } else {
                mostrarComponentes(datos.componentes);
            }

            // Filtrar los componentes cuando se escribe en el campo de búsqueda
            buscador.addEventListener("input", (event) => {
                const query = event.target.value.toLowerCase(); // Convertir la búsqueda a minúsculas

                // Filtrar los componentes según la búsqueda
                const componentesFiltrados = datos.componentes.filter(funcionflecha => 
                    funcionflecha.nombre.toLowerCase().includes(query)
                );

                // Mostrar los componentes filtrados o el mensaje si no se encuentran resultados
                if (query === '') {
                    mostrarMensajeBusqueda();  // Mostrar el mensaje si la búsqueda está vacía
                } else {
                    mostrarComponentes(componentesFiltrados);  // Mostrar los resultados filtrados
                }
            });
        })
        .catch(error => console.error("Error al cargar el JSON", error));
});