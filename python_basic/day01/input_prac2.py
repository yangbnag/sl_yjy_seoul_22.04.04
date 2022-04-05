
# ex)
# '''

# 이름:
# 나이:
# '''
# xxx님은 xxxx년생이시군요!

# '''

user_name = input('이름을 입력하세요:')
age = int(input('나이를 입력하세요:'))
birth_yaer = 2022 - age + 1
print(f'{user_name}님은 {birth_yaer}년생 이시군요!')
