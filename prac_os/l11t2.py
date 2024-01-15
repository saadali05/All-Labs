from multiprocessing import Pipe,Process

def child_p(conn,num): 
    num_arr = []
    for i in num:
        num_arr.append(i**2)
    out = ( num_arr )
    conn.send(out)
    conn.close()
    
if __name__ == '__main__':
    parent_conn,child_conn = Pipe()
    num = []
    for i in range (1,6):
        num.append(i)
    p = Process(target=child_p,args=(child_conn,num))
    p.start()
    num_sq = parent_conn.recv()
    print(num)
    print(num_sq)
    p.join()