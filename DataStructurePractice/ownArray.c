#include <stdio.h>
#include <stdlib.h>

struct anArray
{
    int max_size;
    int used_size;
    int *ptr;
};

void setSize(struct anArray* array, int maxSize, int usedSize)
{
    array->max_size = maxSize;
    array->used_size = usedSize;
    array->ptr = (int *)malloc(maxSize*sizeof(int));
};

void setValues(struct anArray* array)
{
    for (int i = 0; i < array->used_size; i++)
    {
        int n;
        printf("Enter the values of %d\t",i);
        scanf("%d", &n);
        array->ptr[i] = n;
    }
};

void showValues(struct anArray* array)
{
    for (int i = 0; i < array->used_size; i++)
    {
        printf("%d\n", array->ptr[i]);
    } 
};

void main()
{
    struct anArray* array;
    printf("Your array is setted");
    setSize(&array, 3, 5);
    printf("Enter values of array\n");
    setValues(&array);
    printf("Here values of arrays, you had entered");
    showValues(&array);
};
