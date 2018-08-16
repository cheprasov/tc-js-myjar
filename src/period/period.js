class Period {
  /**
   * @param {Date} startDate
   * @param {Date} endDate
   */
  constructor(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
  }

  /**
   * @return {number}
   */
  getStartTime() {
    return this.startDate.getTime();
  }

  /**
   * @return {number}
   */
  getEndTime() {
    return this.endDate.getTime();
  }

  /**
   * @param {Period} coveredPeriod
   * @return {boolean}
   */
  isCoverPeriod(coveredPeriod) {
    return coveredPeriod.getStartTime() >= this.getStartTime()
      && coveredPeriod.getEndTime() <= this.getEndTime();
  }

  /**
   * @return {string}
   */
  getSting() {
    const startH = String(this.startDate.getUTCHours()).padStart(2, '0');
    const startM = String(this.startDate.getUTCMinutes()).padStart(2, '0');
    const endH = String(this.endDate.getUTCHours()).padStart(2, '0');
    const endM = String(this.endDate.getUTCMinutes()).padStart(2, '0');
    return `${startH}:${startM}-${endH}:${endM}`;
  }
}

module.exports = Period;
