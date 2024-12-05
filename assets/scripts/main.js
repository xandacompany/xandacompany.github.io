//Función para abrir el menú del celular
function abrir_menu() {
    document.getElementById('menu_celular').style.display = 'flex';
}





//Función para cerrar el menú del celular
function cerrar_menu() {
    document.getElementById('menu_celular').style.display = 'none';
}

const menuItems = document.querySelectorAll('.nav-1-ul .nav-1-li a');

const contenedorMenu = document.querySelector('.contenedor-menu-celular-main');

contenedorMenu.innerHTML = '';

menuItems.forEach(item => {
    // Crea el div contenedor de la opción
    const div = document.createElement('div');
    div.classList.add('menu-celular-opciones');
    
    const p = document.createElement('p');
    
    p.textContent = item.textContent;

    div.appendChild(p);
    
    contenedorMenu.appendChild(div);
});





// Función para manejar la visibilidad del menú en función del tamaño de la ventana
function ajustarMenu() {
    const menuCelular = document.getElementById('menu_celular');
    
    if (window.innerWidth > 800) {
        // Si la ventana es más grande que 800px, ocultamos el menú
        menuCelular.style.display = 'none';
    } else {
        // Si la ventana es menor o igual a 800px, dejamos el menú según el estado de la variable
        if (menuCelular.style.display === 'flex') {
            // Si el menú está visible, lo mantenemos visible
            menuCelular.style.display = 'flex';
        } else {
            // Si no está visible, lo dejamos oculto
            menuCelular.style.display = 'none';
        }
    }
}

ajustarMenu();

window.addEventListener('resize', ajustarMenu);





// Script para el el botón que te manda al inicio de la página (hasta arriba)
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("show"); // Muestra el botón con transición
    } else {
        scrollToTopBtn.classList.remove("show"); // Lo oculta con transición
    }
};





// Función para hacer scroll al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}





// Script para la cuenta regresiva
const targetDate = new Date("2024-12-10T00:00:00").getTime(); // Cambia esta fecha a la que desees

// Actualizar la cuenta regresiva cada segundo
const countdownElement = document.getElementById("countdown");

const interval = setInterval(function() {
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
    
    // Calcular la diferencia entre la fecha de destino y la fecha actual
    const distance = targetDate - now;
    
    // Calcular días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Mostrar la cuenta regresiva en el formato: Días:HH:MM:SS
    countdownElement.innerHTML = `
        <span>${days} :</span>
        <span>${hours} :</span>
        <span>${minutes} :</span>
        <span>${seconds}</span>
    `;
    
    // Si la cuenta regresiva llega a 0, mostrar un mensaje
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "<span</span>";
    }
}, 1000);





// URL del JSON
const jsonURL = '../assets/json/package.json';
async function cargarPatrocinadores() {
    try {
        // Hacemos la solicitud fetch para obtener el archivo JSON
        const response = await fetch(jsonURL);
        
        // Verificamos si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }
        
        // Convertimos la respuesta a JSON
        const data = await response.json();
        
        // Accede a las imágenes de las tres categorías
        const categorias = [
            { nombre: "imagenes_muy_importantes", contenedor: "carrusel-tarjetas-2" },
            { nombre: "imagenes_importantes", contenedor: "carrusel-tarjetas-2" },
            { nombre: "imagenes_subimportantes", contenedor: "carrusel-tarjetas-2" },
            { nombre: "imagenes_menos_importantes", contenedor: "carrusel-tarjetas-2" }
        ];
        
        // Itera sobre cada categoría para cargar sus imágenes
        categorias.forEach(categoria => {
            const imagenes = data[categoria.nombre];
            const contenedor = document.querySelector(`.${categoria.contenedor}`);
            
            imagenes.forEach(imagen => {
                // Crea un nuevo div para cada imagen
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjetas-2');
                
                // Crea la imagen dentro del div
                const img = document.createElement('img');
                img.src = imagen.src;
                img.alt = imagen.alt;
                img.title = imagen.title;
                img.classList.add(imagen.class);
                img.loading = imagen.loading; // Definir carga perezosa
                
                // Inserta la imagen en la tarjeta
                tarjeta.appendChild(img);
                
                // Inserta la tarjeta en el contenedor
                contenedor.appendChild(tarjeta);
            });
        });

        // Duplicamos las tarjetas para el movimiento infinito
        const tarjetas = document.querySelectorAll('.tarjetas-2');
        const contenedor = document.querySelector('.carrusel-tarjetas-2');

        // Duplicamos el contenido de las tarjetas para crear el efecto de desplazamiento infinito
        tarjetas.forEach(tarjeta => {
            const tarjetaClonada = tarjeta.cloneNode(true); // Duplicamos la tarjeta
            contenedor.appendChild(tarjetaClonada); // Insertamos la tarjeta clonada en el contenedor
        });

    } catch (error) {
        console.error('Error al cargar el JSON:', error);
    }
}

// Llama a la función para cargar los patrocinadores
cargarPatrocinadores();