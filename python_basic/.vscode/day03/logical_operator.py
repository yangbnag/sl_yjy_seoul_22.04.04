
#논리 연산자 : true와 false를 연산
#ex) 놀이기구를 탈수 있는 조건을 만든다고 할때 조건 : 키140cm 이상, 나이 8세 이상만 탈수 있음.

#true = ture
#ture = false
#false = ture
#false = false

# and 연산 -> true의 경우는 피연산자가 모두 true일 경우 한가지 경우만 있음.

#true and ture -> 로그인의 경우 아이디, 비밀번호가 일치할경우 true
#ture and false -> 아이디 맞고, 비밀번호 틀릴경우 false
#false and ture -> 아이디 틀리고, 비밀번호 틀릴경우 false
#false and false -> 아이디,비밀번호 모두 틀릴경우 false

# or연산 -> 둘중에 하나만 맞으면 ture
#true or ture = true
#ture or false = ture
#false or ture = ture
#false or false =false


T = True
F = False

print(T and T)
print(T and F)
print(F and T)
print(F and F,'\n')

print(T or T)
print(T or F)
print(F or T)
print(F or F,'\n')

a = 5
if (a>1) and (a<10):
    print('a는 1과 10 사이의 정수입니다.!')
else:
    print('a는 범위 안의 정수가 아닙니다.')

print('=========================================')

b = 3
if (b==2) or (b==4):
    print('b는 2 또는 4입니다.')
else:
    print('b는 2 또는 4가 아닙니다.')