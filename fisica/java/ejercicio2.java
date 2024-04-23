import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        int consumo = 5; 
        double pagoTotal = calcularPagoAgua(consumo);
        System.out.println("El pago total a realizar es: " + pagoTotal + "€");
    }

    public static double calcularPagoAgua(int consumo_m3) {
        
        double[] tarifasAbastecimiento = {11.35, 0.1445, 0.1858, 0.8256, 1.1869, 1.2901};
        double[] tarifasAlcantarillado = {5.68, 0.0723, 0.0929, 0.4129, 0.5935, 0.6450};

         
        double cuotaFijaAbastecimiento = 11.52;
        double cuotaFijaAlcantarillado = 5.77;

        
        double tarifaAbastecimiento = tarifasAbastecimiento[tarifasAbastecimiento.length - 1];
        double tarifaAlcantarillado = tarifasAlcantarillado[tarifasAlcantarillado.length - 1];

        for (int i = 0; i < tarifasAbastecimiento.length; i++) {
            if (consumo_m3 <= (i + 1) * 15) {
                tarifaAbastecimiento = tarifasAbastecimiento[i];
                break;
            }
        }

        for (int i = 0; i < tarifasAlcantarillado.length; i++) {
            if (consumo_m3 <= (i + 1) * 15) {
                tarifaAlcantarillado = tarifasAlcantarillado[i];
                break;
            }
        }

        
        double costoTotalSinIVA = cuotaFijaAbastecimiento + (tarifaAbastecimiento * consumo_m3) +
                cuotaFijaAlcantarillado + (tarifaAlcantarillado * consumo_m3);

        
        double costoTotalConIVA = costoTotalSinIVA * 1.10;

        return costoTotalConIVA;
    }
}
