#include <stdio.h>
// void main()
// {
//   static int number; //prints 0
//   printf("%d", number);
// }

void print()
{
  static int number = 1;
  printf("%d\n", number);
  number++;
}

void main()
{
  print();
  print();
  print();
}
