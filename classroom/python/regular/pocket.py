print([a for a in range(2, 101) if all(a % b != 0 for b in range(2, int(a**0.5) + 1))])
