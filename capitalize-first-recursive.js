function capitalize(word) {
  const first = word[0].toUpperCase();
  const rest = word.slice(1).toLowerCase();
  return first + rest;
}

function capitalizeArray(arr, i) {
  if (i === arr.length) return arr;
  arr[i] = capitalize(arr[i]);
  return capitalizeArray(arr, i + 1)
}

capitalizeArray(['baNANAa', 'caR', 'sleep'], 0);
//[ 'Bananaa', 'Car', 'Sleep' ];