#include <iostream>
#include<conio.h>
#include<cstring>
using namespace std;

int main()
{   int arr[100]={};
    int i=0, j=1,l,sum;
    for(l=2;l<=10;l++)
    {sum=i+j;
        cout<<sum<<"\n";
        arr[l-2]=sum;
     
     i=j;
     j=sum;
    }
    for(l=0;l<10;l++)
    cout<<arr[l]<<" ";
}
