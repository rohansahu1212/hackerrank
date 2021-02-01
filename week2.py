def primepartition(z):
  li=[]
  for x in range(2,z):
    
    ch=0
    for i in range(2,x):
      
      if(x%i==0):
        ch+=1
    if(ch==0):
      li=li+[x]
  for i in li:
    for j in li:
      if(i+j==z):
        return True
  else:
    return False
def rotatelist(l,k):
  m=l[:]
  for i in range(k):
    t=m.pop(0)
    m.append(t)
    
  return((m))


def matched(s):
  c=0
  for i in s:
    if i == "(":
      c+=1
    elif i==")":
      if c==0:
        return False
      c-=1	      
  if(c==0):
    return True
  else:
    return False
