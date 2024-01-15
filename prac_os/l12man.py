from multiprocessing import Process, Value
def f(n):
    n.value = 3.1415927

if __name__ == '__main__':
    num = Value('d', 0.0)
    p = Process(target=f, args=(num,))
    p.start()
    p.join()
    print(num.value)

from multiprocessing import Process, Array

def f(a):
    for i in range(len(a)):
        a[i] = -a[i]

if __name__ == '__main__':
    arr = Array('i', range(10))
    p = Process(target=f, args=(arr))
    p.start()
    p.join()
    print(arr[:])