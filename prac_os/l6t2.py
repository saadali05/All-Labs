import os
import time 

def child_function():
    p_id_array = []
    for i in range(2):
        pid = os.fork()
        if pid == 0: 
            print("I'm the child, my ID is %d" % (os.get))
            time.sleep(2)
            exit(14)
        p_id_array.append(pid)
    return p_id_array
    
childfun = child_function()
for process_id in childfun:
    status = os.wait()
    print("\n\nAll processes have completed.",status)
print("endS")

