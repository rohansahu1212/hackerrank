def h(n):
    s = 0
    for i in range(1,n+1):
        if n%i > 0:
           s = s+1
    return(s)

def g(m,n):
    res = 0
    while m >= n:
        res = res+1
        m = m-n
    return(res)    
def f(x):
    d=0
    y=1
    while y <= x:
        d=d+1
        y=y*3
    return(d)
if __name__ == "__main__":
    ro = h(40)
    print(ro)
    print("rohan was babes here")
    print(g(57,8))
    print(f(846))