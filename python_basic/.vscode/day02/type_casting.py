
#n1 = 10
#n2 = '34'

#print(n1 + n2) # 에러발생 / 지원하지 않는 피연산자의 타입입니다.

n1 = 10
n2 = '34'

print(str(n1) + n2)
print(n1 + int(n2))

# 문자열 내부에 순수한 정수가 아닌 경우 변환불가
s1 = 'hello'
# print(int(s1))

s2 = '3.14'
print(float(s2))

f1 = 5.7
print(int(f1)) # 실수를 int 함수를 통해 정수로 변환할 경우 소수점 버림이 된다.

# 반올림 round()

print(round(f1))

f2 = 3.14159265
print(round(f2,2)) # 소수점 둘째 짜리까지 출력

f3 = str(100)
print(f3)

f4 = bool('') # 빈공간도 False, 0 빼고 모두다 True
print(f4)