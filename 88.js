function findItinerary(tickets) {
  const map = {};
  for (let [from, to] of tickets) {
    if (!map[from]) map[from] = [];
    map[from].push(to);
  }
  for (let from in map) map[from].sort();
  
  const res = [];
  function dfs(node) {
    const dests = map[node];
    while (dests && dests.length) {
      dfs(dests.shift());
    }
    res.unshift(node);
  }
  dfs("JFK");
  return res;
}

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
// ["JFK", "MUC", "LHR", "SFO", "SJC"]