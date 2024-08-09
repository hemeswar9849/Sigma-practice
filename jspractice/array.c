#include <stdio.h>

void main(){
    void* arr[3];
    int aIntValue = 10;
    float aFloatValue = 10.1;
    char aCharValue = 'c';
    arr[0] = &aIntValue;
    arr[1] = &aFloatValue;
    arr[2] = &aCharValue;
    printf("%d\n",*(int*)arr[0]);
    printf("%f\n",*(float*)arr[1]);
    printf("%c\n",*(char*)arr[2]);
}