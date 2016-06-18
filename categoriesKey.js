//Page to store the different categories of personalities that we have created
var jockGirl = {
  count: 0,
  index:1,
  keywords: ["sport", "sports", "club", "clubs","friends", "team","baseball", "football", "basketball", "beer", "pub", "bar" ]
};
var NPRnerd = {
  count: 0,
  index:2,
  keywords: [""]
};
var Foodie ={
  count: 0,
  index:3,
  keywords: [""]
};
var STEMnerd= {
  count: 0,
  index:4,
  keywords: [""]
};
var BigNerd= {
  count: 0,
  index:5,
  keywords: [""]
};

//check if input matches any personality type, return that index
function checkPersonalityType (keyword) {

}

function addKeytoPersonalityPool(keyword,poolId) {
    switch (poolId) {
      case 1: jockGirl.keywords.push(keyword);  break;
      case 2: NPRnerd.push(keyword); break;
      case 3: Foodie.push(keyword); break;
      case 4: STEMnerd.push(keyword); break;
      case 5: BigNerd.push(keyword); break;
      default:
    }
}
