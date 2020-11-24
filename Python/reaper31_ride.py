"""
ID: reaper31
LANG: PYTHON3
TASK: ride
"""
import os
print(os.getcwd())

fin = open("ride.in", "r")
fout = open("ride.out", "w")

def ride(commet, group):

    commet_converted = []
    group_converted = []
    commet_multiplied = 1
    group_multiplied = 1

    for i in commet:
       current_letter = ord(i) - 64
       commet_multiplied = commet_multiplied * current_letter
       commet_converted.append(current_letter) 

    for i in group:
        current_letter = ord(i) - 64
        group_multiplied = group_multiplied * current_letter
        group_converted.append(current_letter)

    if commet_multiplied % 47 == group_multiplied % 47:
        fout.write("GO\n")
        fout.close()
    else:
        fout.write("STAY\n")
        fout.close()

commet = fin.readline().rstrip()
group = fin.readline().rstrip()
ride(commet, group)


