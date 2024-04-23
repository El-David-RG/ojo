import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        
        String documentosDir = "/home/usuario/Documentos";
        String penDriveDir = "/mnt/disk1";
        String programasDir = penDriveDir + "/programas";
        String datosDir = penDriveDir + "/datos";

        try {
            
            File documentos = new File(documentosDir);
            if (!documentos.exists() || !documentos.isDirectory()) {
                System.out.println("El directorio Documentos no existe.");
                return;
            }
            System.out.println("Cambiando al directorio Documentos...");
            System.setProperty("user.dir", documentosDir);

            
            new File(programasDir).mkdirs();
            new File(datosDir).mkdirs();

            
            copiarArchivosPorPrefijo(new File(documentos, "proyecto1/src"), programasDir, "h");
            copiarArchivosPorPrefijo(new File(documentos, "proyecto2/src"), programasDir, "h");

            
            copiarArchivosPorSecuencia(new File(documentos, "proyecto1/data"), datosDir, "2018");
            copiarArchivosPorSecuencia(new File(documentos, "proyecto2/data"), datosDir, "2018");

            
            moverArchivosPorSecuencia(new File(documentos, "proyecto1/doc"), programasDir, "2018");
            moverArchivosPorSecuencia(new File(documentos, "proyecto2/doc"), programasDir, "2018");

            
            borrarArchivosPorSecuencia(new File(documentos, "proyecto1/data"), "2017");
            borrarArchivosPorSecuencia(new File(documentos, "proyecto1/doc"), "2017");
            borrarArchivosPorSecuencia(new File(documentos, "proyecto2/data"), "2017");
            borrarArchivosPorSecuencia(new File(documentos, "proyecto2/doc"), "2017");

            System.out.println("Operaciones completadas.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    
    private static void copiarArchivosPorPrefijo(File sourceDir, String destDir, String prefix) throws IOException {
        for (File file : sourceDir.listFiles()) {
            if (file.getName().startsWith(prefix)) {
                file.renameTo(new File(destDir, file.getName()));
            }
        }
    }

    
    private static void copiarArchivosPorSecuencia(File sourceDir, String destDir, String sequence) throws IOException {
        for (File file : sourceDir.listFiles()) {
            if (file.getName().contains(sequence)) {
                file.renameTo(new File(destDir, file.getName()));
            }
        }
    }

    private static void moverArchivosPorSecuencia(File sourceDir, String destDir, String sequence) throws IOException {
