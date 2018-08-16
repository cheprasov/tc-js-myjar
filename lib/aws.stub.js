/*
  This is stub connector for yet unimplemented AWS Wiplala service
  which minifies real-life objects.
*/

function isGoodAnswer() {
  // Fail once in 10% times
  return Math.random() > 0.1;
}

const Wiplala = {
  /**
   * Tinkles an dog back to its baby form
   * @param {object} payload Real-life subject to minify.
   * Required properties: lat, lon, kind, breed, name
   * @return {Promise}
   */
  puppify({ lat, lon, kind, breed, name }) {
    return new Promise((resolve, reject) => {
      if (!isGoodAnswer()) {
        return reject(new Error('Some puppify error'));
      }

      if (kind !== 'dog') {
        return reject(new Error('Wrong kind for puppify'));
      }

      const puppyName = `puppy ${name}`;

      return resolve({ kind: 'puppy', lat, lon, breed, name: puppyName });
    });
  },

  /**
   * Restores a previously tinkled dog to its regular form
   * @param {object} payload Real-life subject to minify.
   * Required properties: lat, lon, kind, breed, name
   * @return {Promise}
   */
  unpuppify({ lat, lon, kind, breed, name }) {
    return new Promise((resolve, reject) => {
      if (!isGoodAnswer()) {
        return reject(new Error('Some unpuppify error'));
      }

      if (kind !== 'puppy') {
        return reject(new Error('Wrong kind for unpuppify'));
      }

      const unpuppyName = name.replace(/^puppy /, '');

      return resolve({ kind: 'dog', lat, lon, breed, name: unpuppyName });
    });
  },
};

module.exports = Wiplala;
