const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Ruta de la carpeta "components" (ahora relativa a la ubicación del script)
const componentsDir = path.join(__dirname, '../../components'); // Subir dos niveles para llegar a src/components

// Función para inspeccionar las carpetas
function inspeccionarCarpetas() {
  if (!fs.existsSync(componentsDir)) {
    console.log('La carpeta "components" no existe.');
    return;
  }

  fs.readdir(componentsDir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Error al leer la carpeta "components":', err);
      return;
    }

    const carpetas = files.filter(file => file.isDirectory());
    let componentesEncontrados = [];

    carpetas.forEach(carpeta => {
      const carpetaPath = path.join(componentsDir, carpeta.name);

      fs.readdir(carpetaPath, { withFileTypes: true }, (err, archivos) => {
        if (err) {
          console.error('Error al leer la carpeta:', carpeta.name, err);
          return;
        }

        archivos.forEach(archivo => {
          if (archivo.isFile() && archivo.name.endsWith('.html')) {
            componentesEncontrados.push(path.basename(archivo.name, '.html'));
          }
        });

        if (componentesEncontrados.length > 0) {
          fs.writeFile(path.join(componentsDir, 'componentes.txt'), componentesEncontrados.join('\n'), (err) => {
            if (err) {
              console.error('Error al escribir el archivo componentes.txt:', err);
            } else {
              console.log('Archivo componentes.txt creado/actualizado correctamente.');
            }
          });
        }
      });
    });
  });
}

// Monitorear cambios en las carpetas
const watcher = chokidar.watch(path.join(componentsDir, '**/*.html'), {
  persistent: true,
  ignoreInitial: true, // No ejecutar al inicio
});

// Ejecutar inspección cuando haya cambios
watcher.on('add', () => {
  console.log('Archivo HTML añadido o modificado, actualizando componentes.txt...');
  inspeccionarCarpetas();
});

watcher.on('change', () => {
  console.log('Archivo HTML modificado, actualizando componentes.txt...');
  inspeccionarCarpetas();
});

console.log('Observando cambios en archivos HTML...');
