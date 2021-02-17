class Himpunan {
  constructor(val) {
    this.val = val;
  }

  show() {
    const result = [[]];
    for (let i = 0; i < this.val.length; i++) {
      for (let j = 0; j < this.val.length; j++) {
        let temp = [];
        for (let k = j + 1; k < this.val.length; k++) {
          temp.push(this.val[j]);
          temp.push(this.val[k]);
        }
      }
    }
    //result.push(temp);

    // if (i > 0) {
    //   temp.push(this.val[i]);
    // }
    // temp.push(this.val[j]);
    // if (temp.length == i + 1) {
    //   result.push(temp);
    //   temp = [];
    // }
    let isLoop = true;
    let j = 0;
    console.log(result);
  }
}

module.exports = Himpunan;
