function solveTasks(numTasks, prerequisites) {
  const adj = Array.from({ length: numTasks }, () => []);
  const inDegree = new Array(numTasks).fill(0);
  for (let [task, dep] of prerequisites) {
    adj[dep].push(task);
    inDegree[task]++;
  }
  const queue = [];
  for (let i = 0; i < numTasks; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }
  const order = [];
  while (queue.length) {
    const curr = queue.shift();
    order.push(curr);
    for (let next of adj[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }
  return order.length === numTasks ? order : [];
}

console.log(solveTasks(2, [[1, 0]])); // [0, 1]