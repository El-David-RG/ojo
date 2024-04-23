import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] nombres = {"Juan", "María", "Luis", "Ana", "Pedro", "Elena"};
        String[][] mitades = dividirLista(nombres);
        
        System.out.println("Primera mitad: " + Arrays.toString(mitades[0]));
        System.out.println("Segunda mitad: " + Arrays.toString(mitades[1]));
    }

    public static String[][] dividirLista(String[] lista) {
        
        int mitad = lista.length / 2;

        
        String[] primeraMitad = Arrays.copyOfRange(lista, 0, mitad);
        String[] segundaMitad = Arrays.copyOfRange(lista, mitad, lista.length);

        return new String[][] {primeraMitad, segundaMitad};
    }
}
