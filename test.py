def prime(x):

  li=[]
  ch=0
  for i in range(2,x):
    
    if(x%i==0):
      ch+=1
  if(ch==0):
    return(True) 
  else:
    return(False)

print(prime(29))

def primepartion(z):
  li=[]
  for x in range(2,z):
    
    ch=0
    for i in range(2,x):
      
      if(x%i==0):
        ch+=1
    if(ch==0):
      li=li+[x]
  print(li)
  for i in li:
    for j in li:
      print(i+j)

primepartion(27)


