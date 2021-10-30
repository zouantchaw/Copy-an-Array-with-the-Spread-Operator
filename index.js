// copyMachine should use spread operator so that
// it returns a new array made up of 'num' copies of arr

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    console.log('inside while loop')
    newArr.push([...arr])
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));