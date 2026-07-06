class BankAccount:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0
    
    def deposit(self, amount):
        if amount <= 0:
            print("Wrong amount")
        else:
            self.balance += amount
            print("Amount added")

    def withdraw(self, amount):
        if amount <= 0:
            print("Wrong amount")
        elif amount > self.balance:
            print("Insufficient funds")
        else:
            self.balance -= amount
            print(f"{amount}֏ was deducted from the balance")

    def transfer(self, other, amount):
        if amount <= 0:
            print("Wrong amount")
        elif amount > self.balance:
            print("Insufficient funds")
        else:
            self.balance -= amount
            other.balance += amount
            print("Amount transferred to other balance")

    # Переименовано в соответствии с ТЗ: show_info
    def show_info(self):
        print(f"Owner: {self.owner} / Balance: {self.balance}֏")

accounts = {}

while True:
    print("""
        1 — Create account
        2 — Deposit money
        3 — Withdraw money
        4 — Transfer money
        5 — Show one account
        6 — Show all accounts
        7 — Delete account
        8 — Show the richest customer
        9 — Statistics
        0 — Exit
""")
    
    try:
        choice = int(input("Choose action: "))
    except ValueError:
        print("Please enter a number!")
        continue

    if choice == 1:
        name = input("Enter owner name: ").strip()
        if not name:
            print("Name cannot be empty!")
        elif name in accounts:
            print(f"Owner {name} already added!")
        else:
            accounts[name] = BankAccount(name)
            print("Account created!")

    elif choice == 2:
        name = input("Enter account name: ")
        if name not in accounts:
            print("Account not found")
        else:
            amount = int(input("Enter amount: "))
            accounts[name].deposit(amount)

    elif choice == 3:
        name = input("Enter account name: ")
        if name in accounts:
            amount = int(input("Enter amount: "))
            accounts[name].withdraw(amount)
        else:
            print("Account not found")

    elif choice == 4:
        sender = input("Enter sender name: ")
        receiver = input("Enter receiver name: ")
        
        # Исправлено условие проверки обоих аккаунтов
        if sender in accounts and receiver in accounts:
            amount = int(input(f"Enter amount to transfer from {sender} to {receiver}: "))
            accounts[sender].transfer(accounts[receiver], amount)
        else:
            print("One or both accounts not found")
        
    elif choice == 5:
        show = input("Enter Account name: ")
        if show in accounts:
            accounts[show].show_info()
        else:
            print("Account not found")
            
    elif choice == 6:
        if len(accounts) == 0:
            print("No accounts added yet!")
        else:
            for account in accounts.values():
                account.show_info()

    elif choice == 7:
        name = input("Enter account name: ")
        if name in accounts:
            del accounts[name]
            print(f"Account {name} deleted")
        else:
            print("Account not found")

    elif choice == 8:
        # Добавлена проверка на наличие аккаунтов, чтобы избежать ValueError
        if not accounts:
            print("No accounts added yet!")
        else:
            richest = max(accounts.values(), key=lambda x: x.balance)
            print(f"Richest owner: {richest.owner} ({richest.balance}֏)")

    elif choice == 9:
        count = len(accounts)
        total_balance = sum(acc.balance for acc in accounts.values())
        
        if count > 0:
            avg = total_balance / count
        else:
            avg = 0

        zero = sum(1 for acc in accounts.values() if acc.balance == 0)
        
        print("Accounts count:", count)
        print("Total balance:", total_balance)
        print("Average balance:", avg)
        print("Accounts with zero balance:", zero)

    elif choice == 0:
        print("Exit")
        break
    else:
        print("Wrong action")