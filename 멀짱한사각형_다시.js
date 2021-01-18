/*
    가로 길이가 Wcm, 세로 길이가 Hcm인 직사각형 종이가 있습니다. 종이에는 가로, 
    세로 방향과 평행하게 격자 형태로 선이 그어져 있으며, 모든 격자칸은 1cm x 1cm 크기입니다. 
    이 종이를 격자 선을 따라 1cm × 1cm의 정사각형으로 잘라 사용할 예정이었는데, 
    누군가가 이 종이를 대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다. 
    그러므로 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태입니다. 
    새로운 종이를 구할 수 없는 상태이기 때문에, 이 종이에서 원래 종이의 가로, 세로 방향과 
    평행하게 1cm × 1cm로 잘라 사용할 수 있는 만큼만 사용하기로 하였습니다.
    가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

    참고
    https://nisne.tistory.com/54
*/

/* 너무 쉽게 갈려고 햇따...
function solution(w, h) {
    let not = w*2
    let all = w*h
    let answer = all-not

    console.log(not,all)

    return answer;
}

console.log(solution(8,12))

*/

// 최대 공약수를 구해서 풀이해야함

/*
 대각선을 지나는 사각형 갯수를 구하는 공식 : 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로 최대공약수)
 W + H - (W, H의 최대 공약수)

 최대공약수를 구할때는 유클리드 호제법
*/

// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const mod = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (mod === 0) {
        return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}

// 유클리드 호제법을 이용한 최대 공약수 구하기
function gcd(w, h) {    // 처음 W와 H를 받습니다.

    // W와 H의 나머지를 구합니다.
    const mod = w % h;

    // 만약 나머지가 0일 경우 H를 반환합니다.
    if (mod === 0) {
        return h;
    }

    // 만약 0이 아닐경우 W에 H를 넣고 H에 나머지인 mod를 넣어 해당 함수를 다시 호출해 줍니다.
    return gcd(h, mod);
}


function solution(w, h) {
    // 최대 공약수를 구해줍니다.
    const gcdVal = gcd(w, h);

    // 공식에 맞춰 사용
    return w * h - (w + h - gcdVal);
}

console.log(solution(8, 12))

/*
    공식이 부족하다!
    이해도를 높이자!
*/
