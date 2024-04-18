function solution(money) {
    let coffee = 5500
    
    let jan = parseInt(money / coffee);
    let changes = (money % coffee);
    
    let result = [jan, changes];
    return result;
}