const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

const findLevel = oxygenLevels1.find(element => element > "19.5%" && element < "23.5%");

console.log(findLevel);

const filterLevel = oxygenLevels2.filter(element => element > "19.5%" && element < "23.5%");

console.log(filterLevel);
