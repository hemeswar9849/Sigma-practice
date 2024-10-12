int number = 10; //global or extern variable

#include <stdio.h>

void hems()
{
  printf("%d\n", number);
}

void main()
{
  printf("%d\n", number);
  hems();
}