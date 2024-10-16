#include <stdio.h>
void main()
{
  int a,b,c;
  a = 10;
  b = a++;
  c = ++a;
  printf("%d %d %d",a, b, c);
}