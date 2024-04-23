import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String colorHex = "#FFA500";
        int[] rgbValues = hexToRgb(colorHex);
        System.out.println("Valores RGB: " + Arrays.toString(rgbValues));
    }

    public static int[] hexToRgb(String hex) {
       
        if (hex.startsWith("#")) {
            hex = hex.substring(1);
        }

        
        int red = Integer.parseInt(hex.substring(0, 2), 16);
        int green = Integer.parseInt(hex.substring(2, 4), 16);
        int blue = Integer.parseInt(hex.substring(4), 16);

        return new int[]{red, green, blue};
    }
}
