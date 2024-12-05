import os
import sys

def crear_carpetas(ruta):
    # Define los nombres de las carpetas principales a crear
    carpetas_a_crear = ['assets', 'docs', 'pages']

    # Crea cada carpeta principal dentro de la ruta dada
    for carpeta in carpetas_a_crear:
        ruta_carpeta = os.path.join(ruta, carpeta)
        try:
            os.makedirs(ruta_carpeta, exist_ok=True)
            print(f"Carpeta '{carpeta}' creada en {ruta}")
        except Exception as e:
            print(f"Error al crear la carpeta '{carpeta}': {e}")

    # Crear subcarpetas dentro de 'assets' y archivos específicos
    crear_subcarpetas_y_archivos(os.path.join(ruta, 'assets'))

    # Crear el archivo README.md en la carpeta 'docs'
    crear_readme(os.path.join(ruta, 'docs'))

    # Crear el archivo index.html en la raíz del proyecto
    crear_index_html(ruta)

    # Crear el archivo sitemap.xml en la raíz del proyecto
    crear_sitemap_xml(ruta)

    # Crear el archivo sistem.py en la raíz del proyecto
    crear_sistem_py(ruta)

def crear_subcarpetas_y_archivos(ruta_assets):
    # Define las subcarpetas dentro de 'assets' y los archivos a crear
    subcarpetas_y_archivos = {
        'styles': 'main.css',
        'scripts': 'main.js',
        'json': 'package.json',
        'images': None  # No se necesita archivo en 'images'
    }

    # Crea cada subcarpeta y su archivo correspondiente (si aplica)
    for subcarpeta, archivo in subcarpetas_y_archivos.items():
        ruta_subcarpeta = os.path.join(ruta_assets, subcarpeta)
        try:
            os.makedirs(ruta_subcarpeta, exist_ok=True)
            print(f"Subcarpeta '{subcarpeta}' creada en {ruta_assets}")

            # Si hay un archivo que debe crearse en esta subcarpeta
            if archivo:
                ruta_archivo = os.path.join(ruta_subcarpeta, archivo)
                with open(ruta_archivo, 'w') as f:
                    # Si el archivo es "main.css", se añade el contenido específico
                    if archivo == 'main.css':
                        f.write("""
.body{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0%;
    padding: 0%;
}

.header{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    background-color: #ffffff;
    padding: 0px 0px;
    margin: 0%;
    grid-gap: 0px 15px;
}

.contenedor-logo-1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding: 15px 15px;
    margin: 0%
}

.nav-1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 10px 15px;
    margin: 0%;
    grid-gap: 25px 25px;
    background-color: #3E3E3E;
}

.nav-1-ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    grid-gap: 25px 25px;
    margin: 0%;
    padding: 0%;
}

.nav-1-ul-celular{
    display: none;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: auto;
}

.nav-1-li{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 0%;
    padding: 10px 15px;
    cursor: pointer;
    transition: 0.25s;
}

.nav-1-li:hover{
    background-color: #4b4b4b;
}

.nav-1-li:active{
    background-color: #656565;
}

.nav-1-li a{
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Inter", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: clamp(13px, 1.3vw, 18px);
    font-weight: 500;
    margin: 0%;
    padding: 0%;
}

.main{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0%;
    grid-gap: 50px;
}

.section-universal{
    width: 1000%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    padding: 50px 50px;
    margin: 0%;
    grid-gap: 50px;
}

.h2-1{
    color: #000000;
    font-size: clamp(25px, 2.5vw, 38px);
    padding: 0%;
    margin: 0%;
    text-transform: uppercase;
    font-family: "Inter", serif;
    font-optical-sizing: auto;
    font-style: normal;
}

.logo{
    height: 50px;
}

.fa-bars{
    color: #ffffff;
    font-size: 25px;
    cursor: pointer;
    transition: 0.25s;
}

.fa-bars:hover{
    background: linear-gradient(45deg, #F3944C, #D25917);
    -webkit-background-clip: text;
    color: transparent;
}

.fa-xmark{
    color: #ffffff;
    font-size: 25px;
    cursor: pointer;
    transition: 0.25s;
}

.fa-xmark:hover{
    transform: rotate(180deg);
    background: linear-gradient(45deg, #F3944C, #D25917);
    -webkit-background-clip: text;
    color: transparent;
}

.fa-xmark:active{
    transform: scale(0.85) rotate(180deg);
}

.section-menu-celular-1{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    display: none;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #3E3E3E;
}

.contenedor-menu-celular-header{
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 15px 15px;
}

.contenedor-menu-celular-main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 85%;
    grid-gap: 20px 20px;
    padding: 0px 25px;
}

.contenedor-menu-celular-footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
}

.menu-celular-opciones{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0%;
    padding: 15px 15px;
    cursor: pointer;
    transition: 0.25s;
    border-radius: 10px;
}

.menu-celular-opciones p{
    color: #ffffff;
    padding: 0%;
    margin: 0%;
    font-size: 23px;
    text-transform: uppercase;
    font-family: "Inter", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 500;
}

.menu-celular-opciones:hover{
    background-color: #4b4b4b;
}

.menu-celular-opciones:active{
    background-color: #656565;
}

@media screen and (min-width: 0px) and (max-width: 800px) {
    .main{
        grid-gap: 25px;
    }

    .section-universal{
        grid-gap: 25px;
        padding: 25px 25px;
    }

    .logo{
        height: 40px;
    }

    .nav-1-ul{
        display: none;
    }

    .nav-1-ul-celular{
        display: flex;
    }
}
""")
                    else:
                        f.write("")  # Crea el archivo vacío si no es main.css
                print(f"Archivo '{archivo}' creado en {ruta_subcarpeta}")

        except Exception as e:
            print(f"Error al crear la subcarpeta '{subcarpeta}' o el archivo '{archivo}': {e}")

def crear_readme(ruta_docs):
    # Define la ruta completa para README.md
    ruta_readme = os.path.join(ruta_docs, 'README.md')
    try:
        with open(ruta_readme, 'w') as f:
            f.write("# Documentación del Proyecto\n\nEste archivo README.md contiene la documentación del proyecto.")
        print(f"Archivo 'README.md' creado en {ruta_docs}")
    except Exception as e:
        print(f"Error al crear el archivo 'README.md': {e}")

def crear_index_html(ruta_raiz):
    # Define la ruta completa para index.html
    ruta_index = os.path.join(ruta_raiz, 'index.html')
    contenido_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nombre</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="date" content="2024-09-05">
    <link rel="canonical" href="URL">
    <meta name="theme-color" content="#ffffff">
    <link rel="alternate" hreflang="es" href="URL">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="Referrer-Policy" content="no-referrer-when-downgrade">
    <meta name="google-adsense-account" content="ca-pub-2107247831846945">
    
    <!-- SEO -->
    <meta name="description" content="descripción">
    <meta name="keywords" content="etiquetas">
    <meta name="author" content="autor">
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="subject" content="descripción">
    <meta name="rating" content="General">
    
    <!-- Open Graph para Redes Sociales -->
    <meta property="og:title" content="nombre">
    <meta property="og:type" content="website">
    <meta property="og:url" content="URL">
    <meta property="og:description" content="descripción">
    <meta property="og:locale" content="es_MX">
    <meta property="og:site_name" content="nombre">
    <meta property="og:image" content="URL">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="nombre">
    <meta name="twitter:description" content="descripción">
    <meta name="twitter:site" content="@nombre">
    <meta name="twitter:image" content="URL">
    <meta property="og:image:alt" content="nombre">

    <!-- Favicon -->
    <link rel="icon" href="assets/images/favicon.ico">
    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/images/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="120x120" href="assets/images/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="assets/images/apple-touch-icon-76x76.png">

    <!-- Iconos para Android -->
    <link rel="icon" sizes="192x192" href="assets/images/android-chrome-192x192.png">
    <link rel="icon" sizes="512x512" href="assets/images/android-chrome-512x512.png">

    <!-- Otros formatos -->
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon-16x16.png">

    <!-- AWESOME  -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/styles/main.css">

    <!-- Datos Estructurados JSON-LD -->
    <script type="application/ld+json">
        {
        "@context": "https://schema.org",
        "@type": "NewsMediaOrganization",
        "name": "Atenagoras",
        "url": "URL",
        "logo": "assets/images/logo.png",
        "sameAs": [
            "URL",
            "URL"
        ],
        "description": "Descripción",
        "founder": "Nombre de la persona",
        "foundingDate": "Año",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "correo electrónico",
            "url": "URL"
        }
        }
    </script>


    <!-- Fuentes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</head>
<body class="body">
    <!-- Header -->
    <header class="header">
        <div class="contenedor-logo-1">
            <img src="assets/images/3.png" alt="alt" title="title" class="logo">
        </div>
        <nav class="nav-1">
            <ul class="nav-1-ul">
                <li class="nav-1-li">
                    <a href="#">PÁGINA</a>
                </li>
                <li class="nav-1-li">
                    <a href="#">HOME</a>
                </li>
                <li class="nav-1-li">
                    <a href="#">PÁGINA</a>
                </li>
            </ul>
            <div class="nav-1-ul-celular">
                <i class="fa-solid fa-bars" onClick="abrir_menu()"></i>
            </div>
        </nav>
    </header>

    <!-- Main -->
    <main class="main">
        <section class="section-universal">
            <h2>Titulo h2</h2>
        </section>
        <section class="section-universal">
            <h2>Titulo h2</h2>
        </section>
        <section class="section-universal">
            <h2>Titulo h2</h2>
        </section>

        <section class="section-menu-celular-1" id="menu_celular">
            <div class="contenedor-menu-celular-header">
                <i class="fa-solid fa-xmark" onClick="cerrar_menu()"></i>
            </div>
            <div class="contenedor-menu-celular-main"></div>
            <div class="contenedor-menu-celular-footer"></div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
    
    </footer>

    <!-- Scripts -->
    <script src="assets/scripts/main.js"></script>
</body>
</html>
"""
    try:
        with open(ruta_index, 'w') as f:
            f.write(contenido_html)
        print(f"Archivo 'index.html' creado en {ruta_raiz}")
    except Exception as e:
        print(f"Error al crear el archivo 'index.html': {e}")

def crear_sitemap_xml(ruta_raiz):
    # Define la ruta completa para sitemap.xml
    ruta_sitemap = os.path.join(ruta_raiz, 'sitemap.xml')
    contenido_sitemap = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>http://example.com/</loc>
        <lastmod>2024-09-05</lastmod>
        <priority>1.00</priority>
    </url>
</urlset>
"""
    try:
        with open(ruta_sitemap, 'w') as f:
            f.write(contenido_sitemap)
        print(f"Archivo 'sitemap.xml' creado en {ruta_raiz}")
    except Exception as e:
        print(f"Error al crear el archivo 'sitemap.xml': {e}")

def crear_sistem_py(ruta_raiz):
    # Contenido de sistem.py
    contenido_sistem = """import os
import xml.etree.ElementTree as ET
from datetime import datetime
from xml.dom import minidom

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

FILES_DIR = os.path.join(BASE_DIR, 'files')

SITEMAP_FILE = os.path.join(BASE_DIR, 'sitemap.xml')

def get_files():
    files = []
    for root, dirs, filenames in os.walk(FILES_DIR):
        for filename in filenames:
            if filename.endswith('.html') or filename.endswith('.php'):
                files.append(os.path.relpath(os.path.join(root, filename), BASE_DIR))
    return files

def update_sitemap():
    files = get_files()

    current_date = datetime.now().strftime('%Y-%m-%d')

    urlset = ET.Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    index_url = ET.SubElement(urlset, 'url')
    loc = ET.SubElement(index_url, 'loc')
    loc.text = 'index.html'
    lastmod = ET.SubElement(index_url, 'lastmod')
    lastmod.text = current_date
    priority = ET.SubElement(index_url, 'priority')
    priority.text = '1.00'

    for file in files:
        url = ET.SubElement(urlset, 'url')
        loc = ET.SubElement(url, 'loc')
        loc.text = f'{file}'
        lastmod = ET.SubElement(url, 'lastmod')
        lastmod.text = current_date
        priority = ET.SubElement(url, 'priority')
        priority.text = '0.80'

    tree = ET.ElementTree(urlset)
    xml_str = ET.tostring(urlset, encoding='utf-8', method='xml').decode()

    xml_str = minidom.parseString(xml_str).toprettyxml(indent="    ")

    with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
        f.write(xml_str)

    print(f'Sitemap actualizado en {SITEMAP_FILE}')

if __name__ == '__main__':
    update_sitemap()
"""
    ruta_sistem = os.path.join(ruta_raiz, 'sistem.py')
    try:
        with open(ruta_sistem, 'w') as f:
            f.write(contenido_sistem)
        print(f"Archivo 'sistem.py' creado en {ruta_raiz}")
    except Exception as e:
        print(f"Error al crear el archivo 'sistem.py': {e}")

if __name__ == "__main__":
    # Obtén la ruta actual de ejecución
    ruta_actual = os.getcwd()

    # Si el usuario proporciona una ruta como argumento, úsala
    if len(sys.argv) > 1:
        ruta_actual = sys.argv[1]

    # Llama a la función para crear las carpetas en la ruta especificada
    crear_carpetas(ruta_actual)