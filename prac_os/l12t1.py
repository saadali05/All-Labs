from multiprocessing import Process,Value
import random

def child_pro(num):
    num.value = 3*num.value

if __name__ == '__main__':
    ran = random.randint(0,4)
    numb = Value('q',ran)
    for i in range(5):
        p1 = Process(target=child_pro,args=(numb,))
        p1.start()
        p1.join()
        print(numb.value)