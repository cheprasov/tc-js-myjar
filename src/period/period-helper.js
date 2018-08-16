const Period = require('./period');

const periodHelper = {
  /**
   * @param {number|string} time
   * @return {Date}
   */
  createDate(time) {
    const date = new Date();
    if (typeof time === 'number') {
      date.setTime(time);
      return date;
    }
    if (/^\d{2}:\d{2}$/.test(time)) {
      const parts = time.split(':');
      date.setUTCHours(+parts[0], +parts[1], 0);
      return date;
    }
    throw Error(`Wrong time: ${time}`);
  },

  /**
   * @param {string|number} start
   * @param {string|number|null} end
   */
  createPeriod(start, end) {
    return new Period(this.createDate(start), this.createDate(end));
  },

  /**
   * @param {string} str
   */
  createPeriodByString(str) {
    if (!/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(str)) {
      throw new Error('Wrong period');
    }
    const parts = str.split('-');
    return this.createPeriod(parts[0], parts[1]);
  },

  /**
   * @param {Period[]} periods
   * @return {Period[]}
   */
  getSimplePeriods(periods) {
    const pointsHash = {};
    periods.forEach((period) => {
      pointsHash[period.getStartTime()] = true;
      pointsHash[period.getEndTime()] = true;
    });

    const points = Object.keys(pointsHash).map(Number).sort();

    const simplePeriods = [];
    for (let i = 0; i < points.length - 1; i += 1) {
      simplePeriods.push(periodHelper.createPeriod(points[i], points[i + 1]));
    }

    return simplePeriods;
  },

  /**
   * @param {string[]} visits
   * @return {{max:number, periods:string[]}}
   */
  getIntersectPeriods(visits) {
    const periods = visits.map(visit => this.createPeriodByString(visit));
    const simplePeriods = this.getSimplePeriods(periods);

    const intersectHash = {};

    periods.forEach((period) => {
      for (let i = 0; i < simplePeriods.length; i += 1) {
        if (period.isCoverPeriod(simplePeriods[i])) {
          if (!(i in intersectHash)) {
            intersectHash[i] = 1;
          } else {
            intersectHash[i] += 1;
          }
        }
      }
    });

    const intersectPeriods = {
      max: 0,
      counts: null,
      periods: {},
    };

    Object.entries(intersectHash).forEach((intersect) => {
      const intersectPeriod = simplePeriods[intersect[0]];
      const intersectCount = intersect[1];

      if (intersectCount > intersectPeriods.max) {
        intersectPeriods.max = intersectCount;
      }

      intersectPeriods.periods[intersectCount] = intersectPeriods.periods[intersectCount] || [];
      intersectPeriods.periods[intersectCount].push(intersectPeriod.getSting());
    });

    return intersectPeriods;
  },
};

module.exports = periodHelper;
