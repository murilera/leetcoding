const groupAnagrams = (strs) => {
  let cache = {};
  for (const str of strs) {
    let sortedKey = str.split("").sort().join("");
    !cache[sortedKey] ? (cache[sortedKey] = [str]) : cache[sortedKey].push(str);
  }

  return Object.values(cache);
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
