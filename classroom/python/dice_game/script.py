import json
import random



results = {}

for i in range(100):
    zar1 = random.randint(1, 6)
    zar2 = random.randint(1, 6)

    if zar1 > zar2:
        combo = str(zar2) + '//' + str(zar1)
    else:
        combo = str(zar1) + '//' + str(zar2)

    if combo in results:
        results[combo] = results[combo] + 1
    else:
        results[combo] = 1

with open('dice_results.json', 'w') as file:
    json.dump(results, file, indent=9)





print('patrsat e, stugeq json fayly')