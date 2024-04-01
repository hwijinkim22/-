// numbers [5,10,15,20,25,30]

function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let answer = sum / numbers.length
    return answer
};