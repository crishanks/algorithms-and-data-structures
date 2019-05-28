const cat = {};

cat.feed = (n) => {
  while (n > 0) {
    console.log('the cat is still hungry');
    n--;
  }
  return 'the cat is full';
}

cat.feedRecursively = (n) => {
  if (n > 0) {
    console.log('the cat is still hungry');
    cat.feedRecursively(n - 1);
  }
  return 'the cat is full';
}

module.exports = cat;