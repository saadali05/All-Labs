from multiprocessing import Process,Pipe

def child(conn,name):
    dpt = "SE"
    roll = "066"
    sentence = ("My name " + name +" and my roll no is " + roll + " and department is " + dpt + ".")
    conn.send((sentence))
    conn.close()

if __name__ == '__main__':  
    name = input("Enter Name: ")
    parent_conn, child_conn = Pipe()  
    p = Process(target=child, args=(child_conn,name))
    p.start()
    print(parent_conn.recv())
    p.join()
