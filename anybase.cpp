#include <stdio.h>
#include<iostream>
#include<conio.h>
#include<cstring>
#include<math.h>

using namespace std;


int main()
{   int count =0;
    char arr[100][2]={"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J"};
    char name[20];
    int base,blen;
    cout<<"enter the base you wanna convert to decimal ";
    cin>> name;
    cout<<"enter the base";
    cin>>base;
    blen = strlen(name);
    cout<<"\n lenfth of string"<<strlen(name);
    for(int i=0;i<blen;i++)
    {
     for(int j=0;j<base;j++)
     {
         if(name[i]==arr[j][0])
         { cout<<"he  "<<"  ";
             count=count+((j+1)*pow(base,(blen-1-i)));
            cout<<"   "<<count<<" "<<j+1<<"\n"; 
         }
     }
    }
    cout<<count;

    return 0;
}
