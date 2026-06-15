a = int(input('apranqneri qanaky: (maksimum 8 hat):   '))

if a > 8:
    print('8 hatic avel chi kareli')
else:
    b = [0] * a

    for i in range(a):
        b[i] = int(input('apranqi giny: '))

    c = 0

    for i in b:
        c = c + i

    print('full giny: ', c)