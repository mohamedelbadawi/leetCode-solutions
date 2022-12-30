/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let end = graph.length - 1
    let res = []
    function dfs(graph, path, node) {

        if (node >= graph.length - 1) {

            res.push(Array.from(path));
            return;
        }

        for (let n of graph[node]) {

            path.push(n);

            dfs(graph, path, n);

            path.pop();
        }
    }

    dfs(graph, [0], 0)
    return res

};
