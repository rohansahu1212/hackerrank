a={}
b={}
np=int(input("enter the number of monster"))
exp=int(input("enter the basic experience"))
kill=0
n=100

for i in range(np):
    r=int(input("enter monster power"))
    a.update({r:100})
for k in a:
    pw=int(input("enter power"))
    a[k]=pw    
while n >0:
    n-=1
    for j in a:
        if exp >= int(j):
            if a[j]!=100000:
                 print(j)
                 print(a.values())
                 exp+=a[j]
                 a.update({j:100000})
                 kill+=1
print(a)
print(kill)
print(exp)