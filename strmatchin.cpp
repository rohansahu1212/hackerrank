#include<iostream>
#include<cstring>

using namespace std;
int main(){
  
    string strs[16] = {"break", "case", "continue", "default", "defer", "else","for", 
    "func", "goto", "if", "map", "range", "return", "structjoijoijkxzkjkjzj", "type", "var"};    
    char input[20];    
    cin>>input;
    if(strs[2]==input)
    {
        strs[2]="rohan";
    }
    cout<<strs[2];
    return 0;
}
