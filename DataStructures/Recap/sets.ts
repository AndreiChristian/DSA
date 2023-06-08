// insertion is not memorized

// element access and extraction via method

// iterable

// duplicate values are not permitted

// dyanimc height

// deletion and finding elements is trivial

const set = new Set<any>([1, 2, 3, 4]);

set.add(3);

for (const el of set) {
  console.log(el);
}

console.log(set.has(5));

console.log(set.size);

console.log(set.values());
