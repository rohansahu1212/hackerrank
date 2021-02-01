"""Write three Python functions as specified below. Paste the text for all three functions together into the submission window. Your function will be called automatically with various inputs and should return values as specified. Do not write commands to read any input or print any output.
You may define additional auxiliary functions as needed.
In all cases you may assume that the value passed to the function is of the expected type, so your function does not have to check for malformed inputs.
For each function, there are normally some public test cases and some (hidden) private test cases.
"Compile and run" will evaluate your submission against the public test cases.
"Submit" will evaluate your submission against the hidden private test cases. There are 15 private test cases, 5 for each function below, with equal weightage. You will get feedback about which private test cases pass or fail, though you cannot see the actual test cases.
Ignore warnings about "Presentation errors".
A positive integer m can be partitioned as primes if it can be written as p + q where p > 0, q > 0 and both p and q are prime numbers.

Write a Python function primepartition(m) that takes an integer m as input and returns True if m can be partitioned as primes and False otherwise. (If m is not positive, your function should return False.)

Here are some examples of how your function should work.

>>> primepartition(7)
True

>>> primepartition(185)
False

>>> primepartition(3432)
True
Write a function matched(s) that takes as input a string s and checks if the brackets "(" and ")" in s are matched: that is, every "(" has a matching ")" after it and every ")" has a matching "(" before it. Your function should ignore all other symbols that appear in s. Your function should return True if s has matched brackets and False if it does not.

Here are some examples to show how your function should work.

 
>>> matched("zb%78")
True

>>> matched("(7)(a")
False

>>> matched("a)*(?")
False

>>> matched("((jkl)78(A)&l(8(dd(FJI:),):)?)")
True
A list rotation consists of taking the first element and moving it to the end. For instance, if we rotate the list [1,2,3,4,5], we get [2,3,4,5,1]. If we rotate it again, we get [3,4,5,1,2].

Write a Python function rotatelist(l,k) that takes a list l and a positive integer k and returns the list l after k rotations. If k is not positive, your function should return l unchanged. Note that your function should not change l itself, and should return the rotated list.

Here are some examples to show how your function should work.

>>> rotatelist([1,2,3,4,5],1)
[2, 3, 4, 5, 1]

>>> rotatelist([1,2,3,4,5],3)
[4, 5, 1, 2, 3]

>>> rotatelist([1,2,3,4,5],12)
[3, 4, 5, 1, 2]"""


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



