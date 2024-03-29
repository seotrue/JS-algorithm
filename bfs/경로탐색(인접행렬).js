/* 인접 행렬 케이스
1번 정점에서 n번 정점으로 가는 모든 경로의 가지수
* */

// 도착 정점에 왓을때 카운팅
// 백할때 방문했다는 표시 풀어주기

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0))
    let check = Array.from({length: n+1}, ()=>0)
    //console.log(graph, check)

    for (let [a,b] of arr){
        // 방향 그래프!
        graph[a][b] =1
        console.log(a,b)
    }
    console.log(graph, check)
    function dfs(v){
        if (v ===n) answer++
        else {
            for (let i =1; i<=n; i++){
                if (graph[v][i] === 1 && check[i] ===0){
                    check[i] = 1
                    dfs(i)
                    check[i] =0;
                }
            }
        }
    }

    // 1번 부터 진행하니깐!
    check[1] =1
    dfs(1)
    return answer
}
// 간선 정보
let arr = [[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]
// 5는 도착 정점
console.log(solution(5,arr))