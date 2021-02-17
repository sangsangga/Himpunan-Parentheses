class Himpunan {
  constructor(val) {
    this.val = val;
  }

  show() {
    // const result = [[]];
    // for (let i = 0; i < this.val.length; i++) {
    //   for (let j = 0; j < this.val.length; j++) {
    //     let temp = [];
    //     if (i > 0) {
    //       temp.push(this.val[i]);
    //     }
    //     temp.push(this.val[j]);
    //     if (temp.length == i + 1) {
    //       result.push(temp);
    //       temp = [];
    //     }

    //     result.push(temp);
    //   }
    // }

    let currVal = 1;
    let isLooping = true;
    let result = [[]];

    let start = 0;
    while (isLooping) {
      let temp = [];
      temp.push(this.val[start]);
      for (let i = start + 1; i < this.val.length; i++) {
        console.log(temp, "<tm");
        if (temp.length === currVal) {
          result.push([...temp]);
          console.log(result, "<<res");
          if (currVal > 1) {
            console.log(currVal, "<<currVal");
            console.log(temp, "<< temp bf");
            console.log(temp.splice(currVal - 1, currVal));
            console.log(temp, "<< temp");
          } else {
            temp = [];
          }
        }
      }
      currVal += 1;
      start += 1;
      if (currVal === this.val.length + 1) {
        isLooping = false;
      }
    }
    //result.push(temp);
    console.log(result);
    return result;
  }
}

module.exports = Himpunan;
