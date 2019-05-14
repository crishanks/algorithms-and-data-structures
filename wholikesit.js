function likes(names) {
  console.log('names', names)
  if (names.length < 1) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return formatTwoNames(names);
  } else if (names.length === 3) {
    return formatThreeNames(names);
  } else {
    return formatManyNames(names);
  }
}

function formatTwoNames(names) {
  return `${names[0]} and ${names[1]} like this`
}

function formatThreeNames(names) {
  for (let i = 0; i < names.length; i++) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
}

function formatManyNames(names) {
  for (let i = 0; i < names.length; i++) {
    return `${names[i]}, ${names[i + 1]} and ${names.length - i} others like this`
  }
}

likes(['Alex', 'Jacob', 'Mark', 'Dave'])
//'Alex, Jacob and 2 others like this'