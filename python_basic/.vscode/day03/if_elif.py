

age = int(input('나이: '))

if age >=20: # 제일먼저 실행. 참일 경우 화면 출력 후 프로그램 종료.
    print('성인입니다.')
elif age >=17:
    print('고등학생입니다.')
elif age >=14:
    print('중학생입니다.')
elif age >=8:
    print('초등학생입니다.')

else:
    print('미취학 아동 입니다.')

# elif에 if를 사용하면 프로그램 종료 없이 계속 실행.
# 처음 실행 조건이 밑에 조건을 포함해 버리면 처음 실행후 프로그램이 종료됨.
# ex) if age >=12: