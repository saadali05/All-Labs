from multiprocessing import Process,Array
import random

def child_pro(num,st,en):
    sq_num = []
    for i in range(st,en):
        result = num[i]**2
        sq_num.append(result)
    print("Squared Numbers: " , sq_num)

if __name__ == '__main__':
    number = []
    for i in range(11):
        num = random.randint(0,10)
        number.append(num)
    p1 = Process(target=child_pro, args=(number,0,11))
    print("Numbers: " , number)
    p1.start()
    p1.join()

