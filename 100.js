function simulateGarbageCollector(roots, heap) {
  const marked = new Set();
  
  function mark(obj) {
    if (!obj || marked.has(obj)) return;
    marked.add(obj);
    if (obj.references) {
      obj.references.forEach(ref => mark(heap[ref]));
    }
  }

  // 1. Mark Phase: রুট থেকে রিচেবল (Reachable) অবজেক্ট চিহ্নিতকরণ
  roots.forEach(root => mark(heap[root]));

  // 2. Sweep Phase: আন-রিচেবল অবজেক্ট রিমুভ করা
  const uncollected = {};
  for (let id in heap) {
    if (marked.has(heap[id])) {
      uncollected[id] = heap[id];
    }
  }
  return uncollected;
}

const heap = {
  obj1: { id: 'obj1', references: ['obj2'] },
  obj2: { id: 'obj2', references: [] },
  obj3: { id: 'obj3', references: [] } // মেমোরি লিক নির্দেশক (গাছ থেকে বিছিন্ন)
};

console.log(simulateGarbageCollector(['obj1'], heap));
// { obj1: ..., obj2: ... } (obj3 মেমোরি থেকে মুছে ফেলে দেয়া হয়েছে)
