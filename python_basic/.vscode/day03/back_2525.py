
h, m = map(int, input().split())
w = int(input())

h1, m1 = ((m+w)//60), ((m+w)%60)

if (h+h1>=24) and ((m+w)>=60):
    print(((h+h1)-24), m1)
elif (h+h1<=23) and ((m+w)<=60):
    print((h+h1), (m+w))
else:
    print((h+h1), m1)