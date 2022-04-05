
dog = '멍멍이'
cat = '야옹이'

print(dog, cat, '짹짹이',sep=',') # sep = 공백 출력에 영향을 줌 / 한줄 프린터 기본값은 공백

fruit = '딸기'
food = '짜장면'

# print(fruit)
# print(food) # 한줄에 print 두개를 사용하려면 ; 사용 -> print(a) ; print(b)
#엔터명령이 숨어있다. (\n)

print(fruit) # 엔터 한번만 치라고 명령했지만 숨어있는 기능으로 출력시 엔터가 2번 적용되어 출력
print(food + '\n')

print(fruit, end='메롱!\n')
print(food + '\n')

pritn(fruit, end='') # end는 숨겨져 있는 엔터기능을 없앰.
print(food)