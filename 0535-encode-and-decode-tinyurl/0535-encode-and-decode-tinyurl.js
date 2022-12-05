/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const mp={}
var encode = function(longUrl) {
return  mp[longUrl]=(Math.random() + 1).toString(36).substring(2);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    val= Object.keys(mp).find(key => mp[key] === shortUrl);
    return val
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */