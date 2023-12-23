const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const dnsMap = new Map();
  for(let domain of domains) {
    const domainParts = domain.split('.').reverse();
    if ( domainParts.length) {
      let domainPartWithDot = ``;
      for (let i = 0; i < domainParts.length; i += 1) {
        domainPartWithDot += `.${domainParts[i]}`;
          console.log(domainPartWithDot);
        if (dnsMap.has(domainPartWithDot)) {
          let counter = dnsMap.get(domainPartWithDot) + 1;
          dnsMap.set(domainPartWithDot, counter);
        }else {
          dnsMap.set(domainPartWithDot, 1);
        }
      }
    }
  }
  return Object.fromEntries(dnsMap);
  // remove line with error and write your code here
}


module.exports = {
  getDNSStats
};
