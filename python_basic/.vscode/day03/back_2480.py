
a, b, c = map(int, input().split())

if a == b == c:
    print(int(a*1000)+10000)
elif (a == b) and (b != c):
    print(int(a*100)+1000)
elif (a != b) and (b == c):
    print(int(b*100)+1000)
elif a>b and a>c:
    print(int(a)*100)
elif b>a and b>c:
    print(int(b)*100)
else:
    print(int(c)*100)

# 3 3 6 = 1300
# 2 2 2 = 12000
# 6 2 5 = 600