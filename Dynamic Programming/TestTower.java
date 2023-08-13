import java.util.Scanner;

class TestTower {
    // Function to calculate max of two numbers.
    public static int max(int a, int b) {
        if (a > b)
            return a;
        return b;
    }

    // Function to calculate minimum number of tests
    // needed in worst case scenario
    static int testTower(int n, int k) {
        if (k == 0 || k == 1)
            return k;

        // Create a memoization table to store results
        int[][] memo = new int[n + 1][k + 1];

        // Initialize base cases
        for (int i = 1; i <= n; i++) {
            memo[i][0] = 0;
            memo[i][1] = 1;
        }

        for (int j = 1; j <= k; j++) {
            memo[1][j] = j;
        }

        // Fill memoization table using recurrence relation
        for (int i = 2; i <= n; i++) {
            for (int j = 2; j <= k; j++) {
                memo[i][j] = Integer.MAX_VALUE;

                for (int x = 1; x <= j; x++) {
                    int res = 1 + max(memo[i - 1][x - 1], memo[i][j - x]);
                    memo[i][j] = Math.min(memo[i][j], res);
                }
            }
        }

        return memo[n][k];
    }

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of phones: ");
        int n = scanner.nextInt();

        System.out.print("Enter the number of layers: ");
        int k = scanner.nextInt();

        scanner.close();

        System.out.println(
                "Minimum number of tests in worst case with " + n + " phones and " + k + " layers is " + testTower(n, k));
    }
}
