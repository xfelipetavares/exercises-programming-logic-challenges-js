const data = require("./data");

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
 */
 const getBandsInformation = () => {
    const [banda1, banda2] = data.bands;
    const bandsInformation = [banda1, banda2];
  
    return bandsInformation;
  }

module.exports = getBandsInformation;
