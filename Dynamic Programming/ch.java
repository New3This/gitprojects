import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numOdds = sc.nextInt();
        int S = sc.nextInt();

        List<Integer> oddArray = getOddArray(S);
        List<List<Integer>> permutations = new ArrayList<>();

        generatePermutations(oddArray, numOdds, new ArrayList<>(), permutations);

        int count = 0;
        for (List<Integer> permutation : permutations) {
            if (sumList(permutation) == S) {
                count++;
            }
        }

        System.out.println(count);
    }

    private static List<Integer> getOddArray(int S) {
        List<Integer> oddArray = new ArrayList<>();
        for (int num = 1; num <= S; num += 2) {
            oddArray.add(num);
        }
        return oddArray;
    }

    private static void generatePermutations(List<Integer> oddArray, int numOdds, List<Integer> current, List<List<Integer>> permutations) {
        if (current.size() == numOdds) {
            permutations.add(new ArrayList<>(current));
            return;
        }

        for (int num : oddArray) {
            current.add(num);
            generatePermutations(oddArray, numOdds, current, permutations);
            current.remove(current.size() - 1);
        }
    }

    private static int sumList(List<Integer> list) {
        int sum = 0;
        for (int num : list) {
            sum += num;
        }
        return sum;
    }
}
