import os 
import time 

val = os.fork()
if val == 0:
    p_id = os.getpid()
    print("this is child process",p_id)
else:
    p_id = os.getpid()
    time.sleep(11)
    print("this is child process",p_id)