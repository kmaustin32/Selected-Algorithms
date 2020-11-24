"""
ID: reaper31
LANG: PYTHON3
TASK: gift1
"""
import os
import re
print(os.getcwd())

fin = open("gift1.in", "r")
fout = open("gift1.out", "w")

raw_list = []

for line in fin:
    raw_list.append(line.rstrip())

num_people = int(raw_list[0])
people = []
money = [0] * num_people
transactions = []
person_paying = ''
total_pay = 0
per_person = 0
num_recerivers = 0
remainder = 0
people_paid_to = []

for i in range(1, num_people + 1):
    people.append(raw_list[i])

for i in range(num_people + 1, len(raw_list)):
    transactions.append(raw_list[i])

i = 0
while i < len(transactions):
    print(f"Debug: i: {i}, transaction length: {len(transactions)}")
    person_paying = transactions[i]
    
    temp = transactions[i + 1].split(' ')
    total_pay = int(temp[0])
    num_people = int(temp[1])
    print(f">>DEBUG temp: {temp}, total_pay: {total_pay}, num_people: {num_people}")
    if num_people == 0:
        i += 2
    else:
        remainder = total_pay % num_people
        total_pay = total_pay - remainder
        money[people.index(person_paying)] = money[people.index(person_paying)] - total_pay
        per_person = total_pay / num_people
        print(f">>>DEBUG: remainder: {remainder}, total_pay: {total_pay}, per_person: {per_person}")
        print(f">>>>DEBUG: money list: {money}")

        for item in range(i + 2, i + 2 + num_people):
            people_paid_to.append(transactions[item])
            print(f">>>>>DEBUG: people_paid_to: {people_paid_to}")

        for j in range(0, len(people_paid_to)):
            money[people.index(people_paid_to[j])] = money[people.index(people_paid_to[j])] + per_person
            print(f">>>>>>DEBUG: person: {people}, money: {money}.")

        i = i + (num_people + 2)
        people_paid_to = []    

# This is printing the end answer
for item in range(0, len(people)):
    fout.write("{} {}\n".format(people[item], int(money[item])))
print(people, money, transactions)
fout.close()