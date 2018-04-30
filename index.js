

const intSort = (a, b) => a - b;

class PuppiesPeakTime {
  constructor(enter, exit) {
    // TODO check if is array & length > 0 & length equal & members are int & enter time is <= to exit time
    enter.sort(intSort); // remove the intSort for "string order by" and get funny results
    exit.sort(intSort);

    this.enter = enter;
    this.exit = exit;

    this.puppiesInNow = 1;
    this.maxPuppies = 1;
    this.time = enter[0];
  }

  registerNewPeak(i) {
    if (this.puppiesInNow > this.maxPuppies) {
      this.maxPuppies = this.puppiesInNow;
      this.time = this.enter[i];
    }
  }

  findPeakTime() {
    let i = 1;
    let j = 0;

    const noOfIterations = this.enter.length;

    while (i < noOfIterations && j < noOfIterations) {
      if (this.enter[i] <= this.exit[j]) {
        this.puppiesInNow++;
        this.registerNewPeak(i++);
      } else {
        this.puppiesInNow--;
        // if this.puppiesInNow = 0 save that time as nonpeak aka 0 empty playground
        j++;
      }
    }
    return {
      maxPuppies: this.maxPuppies,
      time: this.time,
    };
  }
}

const enter = [1, 9, 2, 7];
const exit = [4, 12, 5, 11];

// const enter = [1, 2,  9, 5,  8,  1, 12]
// const exit =  [4, 5, 12, 9, 12, 11, 14]

const peak = new PuppiesPeakTime(enter, exit);
const result = peak.findPeakTime();

console.log('Max no of puppies ' + result.maxPuppies + ' at time ' + result.time);
// TODO  how long is peak period? what is the end time? what about multiple peak times? top three peak times?
