//1.Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened);


//2.YOUR OWN LOOP
function loop(value, testFn, updateFn, bodyFn) {
    while (testFn(value)) {
      bodyFn(value);
      value = updateFn(value);
    }
  }
  


//3.EVERYTHING
function every1(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }





//4. DOMINANT WRITING TASK
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({ name, count: 1 });
      } else {
        known.count++;
      }
    }
    return counts;
  }
  
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : null;
    }).filter(({ name }) => name != null);
  
    if (scripts.length === 0) return "ltr";
  
    return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
  }
  