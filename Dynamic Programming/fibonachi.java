import java.util.Scanner;

public class fibonachi {
    public static long[] memo;
    public static long result;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        memo = new long[1001];
        initialiseArray(memo);
        System.out.println(fib(N));
    }
//1,1,2,3,5,8,13

    public static void initialiseArray(long[] memo) {
        for (int i = 0; i < memo.length; i++) {
            memo[i] = -1;
        }
    }
    
    public static long fib(int n) {
        if (memo[n] != -1) {//can't use null, so use number that won't be used
            return memo[n];
        }

        if (n <= 2) {
            result = 1;
        }

        else {
            result = fib(n-1) + fib(n-2);
        }

        memo[n] = result;
        return result;
    }
    
}
