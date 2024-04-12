function solution(array) {
    array.sort((a,b) => a-b);
const half = Math.floor(array.length / 2) ;
    return array[half];
};