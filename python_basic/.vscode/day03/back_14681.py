
X = int(input())
Y = int(input())

if (X > 0) and (Y > 0):
    print('1')
elif (X < 0) and (Y > 0):
    print('2')
elif (X > 0) and (Y < 0):
    print('4')
else:
    print('3') 

print('==================')

# 해답

if X >=0:
    if Y >= 0:
        print(1)
    else:
        print(4)
else:
    if Y >= 0:
        print(2)
    else:
        print(3)