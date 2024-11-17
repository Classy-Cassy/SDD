#include <iostream>

double getMean(double array[],int size){
    double mean = 0;
    for(int i =0 ; i < size ; ++i){
        mean = mean + array[i];
    }
    return mean/size;
}

int main(){
    // int x = 69;
    // double deciArray[5] = {4.5,8.6,2.2,5.5,9.9};
    // for(int i = 0; i < 5 ; ++i){
    //     std::cout << deciArray[i] << std::endl;
    // }
    // std::cout << x << std::endl;
    double arr[6] = {1,2,3,4,5,10};
    std::cout << getMean(arr,6) << std::endl;
}
