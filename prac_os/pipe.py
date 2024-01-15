from multiprocessing import Process,Pipe

# 2nd question:
import random
def ch_pr(conn,a):
    res=[]
    for i in a:
        res.append(i**2)
    conn.send(res)
    conn.close()      
        
    
if __name__=='__main__':
    num=[random.randint(0,5) for i in range(5)]
    parent_conn,child_conn=Pipe()
    p=Process(target=ch_pr,args=(child_conn,num))
    p.start()
    print("numbers=",num)
    rec=parent_conn.recv()
    print("squared",rec)
    p.join()
    
import sys
# def child_process(conn,name):
#     rn="007"
#     dep="se"
#     mess=(f"{name} and roll no {rn} in {dep}")
#     conn.send(mess) 
#     conn.close()
# if __name__ == '__main__':

#     name=input("enter your name")
#     parent_conn,child_conn=Pipe()
#     pr=Process(target=child_process,args=(child_conn,name))
#     pr.start()
#     messagerec=parent_conn.recv()
#     print(messagerec)
#     pr.join()