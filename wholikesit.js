function likes(names) {
  if (names.length < 1) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return formatManyNames(names);
  }
}

function formatManyNames(names) {
  let result = '';
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    if (i < 1) {
      result += `${currentName}, `;
    } else if (i === 1) {
      result += currentName;
    } else {
      return result += ` and ${names.length - i} others like this`
    }
  }
}

likes(['Alex', 'Jacob', 'Mark', 'Dave', 'Scott'])
//'Alex, Jacob and 3 others like this'
