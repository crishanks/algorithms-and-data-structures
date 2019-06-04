function areThereDuplicates(item1, item2, item3, item4) {
  for (let key in arguments) {
    if (arguments[key] > 1) return true;
  }
  return false;
}

areThereDuplicates(1,2,3,2); //true;