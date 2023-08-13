import itertools

def getOddArray(S):
    OddArray = []
    for num in range(0, (S + 1)):
        if (num % 2 != 0):
            OddArray.append(num)
    return OddArray


numOdds, S = map(int, input().split())

oddArray = (getOddArray(S))

permutations = list(itertools.combinations_with_replacement(oddArray, numOdds))

count = 0

for permutation in permutations:
    if (sum(permutation)) == S:
        count += 1

print(count)