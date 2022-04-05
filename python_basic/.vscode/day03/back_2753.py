
year = int(input())
A = year%4
B = year%100
C = year%400

if (A == 0) and (B!=0) or (C==0):
    print('1')
else:
    print('0')
