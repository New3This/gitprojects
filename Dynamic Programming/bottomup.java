import java.util.Scanner;

public class bottomup {
    public static long[] bottomUp = new long[10000];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int term = sc.nextInt();

        // initialiseBottomUp(bottomUp);
        System.out.println(fib(term));
    }

    // public static void initialiseBottomUp(long[] array) {
    //     for (int i = 0; i < array.length; i++) {
            
    //     }
    // }
    public static long fib(int term) {
        bottomUp[1] = 1;
        bottomUp[2] = 1;
        if (term <= 2) {
            return 1;
        }
        for (int i = 3; i < term+1; i++) {
            bottomUp[i] = bottomUp[i-1] + bottomUp[i-2];
        }
        return bottomUp[term];
    }
}
