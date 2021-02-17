class Himpunan {
  constructor(val) {
    this.val = val;
  }

  show() {
    let currVal = 1;
    let isLooping = true;
    let result = [[]];

    while (isLooping) {
      let temp = [];

      for (let i = 0; i < this.val.length; i++) {
        temp.push(this.val[i]);
        if (temp.length === currVal) {
          result.push([...temp]);
          if (currVal > 1) {
            temp.splice(currVal - 1, currVal);
          } else {
            temp = [];
          }
        }
      }
      currVal += 1;
      if (currVal === this.val.length + 1) {
        isLooping = false;
      }
    }
    return result;
  }
}

module.exports = Himpunan;
