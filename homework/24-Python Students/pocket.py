students = {}


def stanal_mijin(gnahatakanner):
    if len(gnahatakanner) == 0:
        return None
    return sum(gnahatakanner) / len(gnahatakanner)


def avelacnel_usanogh():
    anun = input("Mutqagreq usanoghi anuny: ")

    if anun in students:
        print(anun, "arden ka")
    else:
        students[anun] = []
        print("Nor usanogh", anun, "avelacvec")


def avelacnel_gnahatakan():
    anun = input("Mutqagreq usanoghi anuny: ")

    if anun not in students:
        print("Usanoghy chi gtnvel")
        return

    gnahatakan = int(input("Mutqagreq gnahatakany (0-100): "))

    if gnahatakan < 0 or gnahatakan > 100:
        print("Gnahatakany petq e lini 0-100")
        return

    students[anun].append(gnahatakan)

    print(anun, "stinacav gnahatakan", gnahatakan)


def cuyc_tal_usanoghner():
    if not students:
        print("Canky datark e")
        return

    for anun, gnahatakanner in students.items():

        mijin = stanal_mijin(gnahatakanner)

        if mijin is None:
            mijin_text = "N/A"
        else:
            mijin_text = round(mijin, 1)

        print(f"{anun} -> {gnahatakanner} -> Mijin: {mijin_text}")


def vijakagrutyun():

    yndhanur_usanoghner = len(students)

    mijinner = []
    gerazancikner = 0
    aranc_gnahatakani = 0

    for gnahatakanner in students.values():

        mijin = stanal_mijin(gnahatakanner)

        if mijin is None:
            aranc_gnahatakani += 1
        else:
            mijinner.append(mijin)

            if mijin > 90:
                gerazancikner += 1

    if len(mijinner) > 0:
        xmbi_mijin = sum(mijinner) / len(mijinner)
    else:
        xmbi_mijin = 0

    print("Yndhanur usanoghner:", yndhanur_usanoghner)
    print("Xmbi mijiny:", round(xmbi_mijin, 1))
    print("Gerazancikner:", gerazancikner)
    print("Aranc gnahatakani:", aranc_gnahatakani)


def lavaguyn_usanogh():

    lavaguyn_mijin = -1
    lavaguyn_usanoghner = []

    for anun, gnahatakanner in students.items():

        mijin = stanal_mijin(gnahatakanner)

        if mijin is None:
            continue

        if mijin > lavaguyn_mijin:
            lavaguyn_mijin = mijin
            lavaguyn_usanoghner = [anun]

        elif mijin == lavaguyn_mijin:
            lavaguyn_usanoghner.append(anun)

    if lavaguyn_mijin == -1:
        print("Gnahatakan chka")
    else:
        print("Lavaguyn usanogh(ner):")

        for anun in lavaguyn_usanoghner:
            print(f"{anun} -> Mijin: {round(lavaguyn_mijin, 1)}")


def jnjel_usanogh():

    anun = input("Mutqagreq usanoghi anuny: ")

    if anun in students:
        del students[anun]
        print(anun, "jnjvec")
    else:
        print("Usanoghy chi gtnvel")


def jnjel_gnahatakan():

    anun = input("Mutqagreq usanoghi anuny: ")

    if anun not in students:
        print("Usanoghy chi gtnvel")
        return

    gnahatakanner = students[anun]

    if len(gnahatakanner) == 0:
        print("Ays usanoghy gnahatakanner chuni")
        return

    print("Gnahatakanner:")

    for i, gnahatakan in enumerate(gnahatakanner):
        print(i, "->", gnahatakan)

    hamar = int(input("Mutqagreq jnjveliq gnahatakani hamary: "))

    if 0 <= hamar < len(gnahatakanner):

        jnjvac_gnahatakan = gnahatakanner.pop(hamar)

        print("Jnjvec gnahatakan", jnjvac_gnahatakan)

    else:
        print("Sxal")


def sortavorel_est_mijini():

    sortavorvac_usanoghner = sorted(
        students.items(),
        key=lambda item:
        stanal_mijin(item[1])
        if stanal_mijin(item[1]) is not None
        else -1,
        reverse=True
    )

    for i, (anun, gnahatakanner) in enumerate(
            sortavorvac_usanoghner, start=1):

        mijin = stanal_mijin(gnahatakanner)

        if mijin is None:
            mijin_text = "N/A"
        else:
            mijin_text = round(mijin, 1)

        print(f"{i}. {anun} -> Mijin: {mijin_text}")


def gtnel_catcr_mijin():

    sahman = float(input("Mutqagreq sahmany: "))

    print(f"\nUsanoghner mijin < {sahman}")

    for anun, gnahatakanner in students.items():

        mijin = stanal_mijin(gnahatakanner)

        if mijin is None or mijin < sahman:

            if mijin is None:
                mijin_text = "N/A"
            else:
                mijin_text = round(mijin, 1)

            print(f"- {anun} -> Mijin: {mijin_text}")


menu = """
1 - Avelacnel usanogh
2 - Avelacnel gnahatakan
3 - Cuyc tal bolor usanoghnerin
4 - Vijakagrutyun
5 - Lavaguyn usanogh
6 - Jnjel usanogh
7 - Jnjel gnahatakan
8 - Sortavorel est mijini
9 - Gtnel catcr mijin unecogh usanoghner
0 - Elq
"""

while True:

    yntrutyun = input(menu + "\nYntreq: ")

    if yntrutyun == "1":
        avelacnel_usanogh()

    elif yntrutyun == "2":
        avelacnel_gnahatakan()

    elif yntrutyun == "3":
        cuyc_tal_usanoghner()

    elif yntrutyun == "4":
        vijakagrutyun()

    elif yntrutyun == "5":
        lavaguyn_usanogh()

    elif yntrutyun == "6":
        jnjel_usanogh()

    elif yntrutyun == "7":
        jnjel_gnahatakan()

    elif yntrutyun == "8":
        sortavorel_est_mijini()

    elif yntrutyun == "9":
        gtnel_catcr_mijin()

    elif yntrutyun == "0":
        print("Ctesutyun")
        break

    else:
        print("Sxal")