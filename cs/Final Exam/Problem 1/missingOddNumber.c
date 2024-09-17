#include <stdio.h>

int main(){
    int length;
    printf("Enter the number of integers: ");
    scanf("%d",&length);

    int integers[length];

    printf("Enter the integers:\n");
    for(int i=0;i<length;i++){
        scanf("%d", &integers[i]);
    }
printf("Missing odd nmbers in the given  integer range:\n");
for(int i=1;i<length;i++){
    int start = integers[i-1];
    int end = integers[i];

    for(int j = start+1;j<end;j++){
        if(j%2!=0){
            
            printf("%d ", j );
        }
    }
}
return 0;
}
