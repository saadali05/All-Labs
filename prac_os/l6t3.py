import os 
import time

def child_func(arr):
    arr.sort()
    print(arr)

def parent_func():
    time.sleep(2)
    arr_num_arr = []
    for i in range(6):
        arr_num = int(input("enter number: "))
        
        arr_num_arr.append(arr_num)
    
    child_func(arr_num_arr)
    time.sleep(5)
    os.wait()

parent_func()