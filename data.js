function n(arr) {
  const obj = {};
  const dupl = [];

  for (const a of arr) {
    obj[a] = (obj[a] || 0) + 1;
  }
  for (const a of arr) {
    if (obj[a] === 1) {
      const temp = [];
      obj[a] = obj[a + 1];
      obj[a + 1] = temp;
    }
  }
  arr.length > 0 && dupl.push(obj);
}
const a = [1, 3, 7, 4, 5, 5, 2];
const ans = n(a);
console.log(ans);


select * MAX(salary) from emp  ;








