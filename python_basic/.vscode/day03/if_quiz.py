
A = int(input('국어: '))
B = int(input('영어: '))
C = int(input('수학: '))
D = round((A+B+C)/3,2)
print(f'당신의 평균점수 : {D}점')

if D > 60:
    print('이번 시험에 통과하셨습니다.')


else:
    print('재수강 대상자 입니다.')

print('열공하세요 !')