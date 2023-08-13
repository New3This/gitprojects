import java.util.Scanner;
import java.util.Arrays;

public class challenge {
    public static long[] bottomUp = new long[500];
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");
        int term = Integer.parseInt(input[0]);
        int sum = Integer.parseInt(input[1]);
        // System.out.println("Term: " + term + " Sum: " + sum);
        // System.out.println(Arrays.toString(initialiseArray(sum)));
    }

    public static long[] initialiseArray(int sum) {
        int count = 0;
        for (int i = 0; i < sum; i++) {
            if (i%2 != 0) {
                bottomUp[count] = i;
                count++;
            }
        }
        return bottomUp;
    }
}
