
/*
  This is stub connector for yet unimplemented AWS Wiplala service which minifies real-life objects.
*/

module.exports = {
  Wiplala: {
    /**
     * Tinkles an animal back to its baby form
     * @param {object} payload Real-life subject to minify. Required properties: lat, lon, kind, breed, name 
     */
    tinkleMinify(payload) {

      // Fail once in 10 times to test error handling
      if (!Math.ceil(Math.random()*10)%10) {
        throw new Error('Random failure');
      }

      return {
        success: true
      };
    },
    /**
     * Restores a previously tinkled animal to its regular form
     * @param {object} payload Real-life subject to minify. Required properties: lat, lon, kind, breed, name 
     */
    tinkleRestore(payload) {

      // Fail once in 10 times to test error handling
      if (!Math.ceil(Math.random()*10)%10) {
        throw new Error('Random failure');
      }

      return {
        success: true
      };
    }
  },
};
