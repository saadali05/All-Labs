from multiprocessing import Process ,Value,Array
import random

# def f(a):
#     a.value+=3

# if __name__=='__main__':
#     an=Value('i',5)
#     for i in range(3):
#         p=Process(target=f,args=(an,))
#         p.start()
#         p.join()
#         print(an.value)

def calculate(number,result,start,end):
    for i in range(start,end):
        result[i]=number[i]**2
        
if __name__=='__main__':
    number=[random.randint(0,5) for i in range(5)]
    result=Array('i',[0]*5)
    pr=Process(target=calculate,args=(number,result,0,5))
    pr.start()
    pr.join()
    print("number=",number)
    print("squared=",result[:])
