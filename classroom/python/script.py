import math
def calculator():
  while True:
    print("Bari galust kalkulator!")
    print("quit anelu hamar greq 'q'.")
    print("greq dzer gorcuxutyuny/xndiry/varjutyuny: ")
    expression = input()
    if expression == "q":
      break
    try:
      result =  eval(expression)
      print("Patasxan :", result)
    except SyntaxError:
      print("sxal ka.")
    except ZeroDivisionError:
      print("Zroin bajanely argelvac e.")
calculator()
