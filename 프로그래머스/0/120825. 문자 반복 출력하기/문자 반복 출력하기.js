function solution(my_string, n) {
    var answer = [...my_string].map(e=>e.repeat(n)).join("");
    console.log(answer);
    return answer;
}
