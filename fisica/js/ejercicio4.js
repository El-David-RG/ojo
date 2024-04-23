const fs = require('fs');
const path = require('path');


const documentosDir = '/home/usuario/Documentos';
const penDriveDir = '/mnt/disk1';
const programasDir = path.join(penDriveDir, 'programas');
const datosDir = path.join(penDriveDir, 'datos');

try {

    process.chdir(documentosDir);


    fs.mkdirSync(programasDir, { recursive: true });
    fs.mkdirSync(datosDir, { recursive: true });


    copiarArchivosPorPrefijo(path.join(documentosDir, 'proyecto1/src'), programasDir, 'h');
    copiarArchivosPorPrefijo(path.join(documentosDir, 'proyecto2/src'), programasDir, 'h');


    copiarArchivosPorSecuencia(path.join(documentosDir, 'proyecto1/data'), datosDir, '2018');
    copiarArchivosPorSecuencia(path.join(documentosDir, 'proyecto2/data'), datosDir, '2018');


    moverArchivosPorSecuencia(path.join(documentosDir, 'proyecto1/doc'), programasDir, '2018');
    moverArchivosPorSecuencia(path.join(documentosDir, 'proyecto2/doc'), programasDir, '2018');


    borrarArchivosPorSecuencia(path.join(documentosDir, 'proyecto1/data'), '2017');
    borrarArchivosPorSecuencia(path.join(documentosDir, 'proyecto1/doc'), '2017');
    borrarArchivosPorSecuencia(path.join(documentosDir, 'proyecto2/data'), '2017');
    borrarArchivosPorSecuencia(path.join(documentosDir, 'proyecto2/doc'), '2017');

    console.log('Operaciones completadas.');
} catch (err) {
    console.error(err);
}


function copiarArchivosPorPrefijo(sourceDir, destDir, prefix) {
    fs.readdirSync(sourceDir).forEach(file => {
        if (file.startsWith(prefix)) {
            fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, file));
        }
    });
}


function copiarArchivosPorSecuencia(sourceDir, destDir, sequence) {
    fs.readdirSync(sourceDir).forEach(file => {
        if (file.includes(sequence)) {
            fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, file));
        }
    });
}


function moverArchivosPorSecuencia(sourceDir, destDir, sequence) {
    fs.readdirSync(sourceDir).forEach(file => {
        if (file.includes(sequence)) {
            fs.renameSync(path.join(sourceDir, file), path.join(destDir, file));
        }
    });
}


function borrarArchivosPorSecuencia(dir, sequence) {
    fs.readdirSync(dir).forEach(file => {
        if (file.includes(sequence)) {
            fs.unlinkSync(path.join(dir, file));
        }
    });
}
