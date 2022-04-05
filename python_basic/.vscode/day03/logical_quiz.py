# 키 140 , 나이 8세 이상 두 조건이 모두 충족되어야 놀이기구에 탑승할수 있다.

high = float(input('키: '))
age = int(input('나이: '))

if (high > 140) and (age > 8):
    print('놀이기구에 탑승할수 있습니다.')

else:
    print('놀이기구에 탑승할 수 없습니다.')

print('오늘 하루 즐거운 시간되세요!')