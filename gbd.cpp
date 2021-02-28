#include<iostream>
#include<cstring>
 using namespace std;
 
int main()
{
    char name[30];
    int count=0;
    cin>>name;
    char temp;
    count=strlen(name);
    temp=name[count-1];
    for(int j=count-1;j>=1;j--)
        {
            
            name[j]=name[j-1];
            
        }
    name[0]=temp;
cout<<name;
return 0;
}