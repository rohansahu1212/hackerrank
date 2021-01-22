from array import *

#
# Complete the 'rotateLeft' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER d
#  2. INTEGER_ARRAY arr ram is awesome
#

def rotateLeft(d, arr):
    for i in range(d):
        t= arr.pop(0)
        arr.append(t)
        print(t)
    return arr

if __name__ == "__main__":
    vals = array('i',[1,2,3,4,5])  
    print(rotateLeft(2,vals)) 