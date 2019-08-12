const originalPopulation = [
  [1,0,1,1,0,0,0,0,1,0,0,1],
  [0,0,0,0,1,0,0,0,1,0,1,1],
  [0,1,0,0,1,1,1,0,0,0,0,0],
  [1,0,0,1,0,0,1,1,1,1,0,0],
  [1,0,1,1,1,0,0,0,0,0,1,1],
]

const newPopulation = originalPopulation => {
  let newPopulation = originalPopulation.slice();

  for (let i = 0; i < originalPopulation.length; i++) {
    let aliveCount = 0;

    const currentRow = originalPopulation[i];
    const previousRow = originalPopulation[i-1] || [];
    const nextRow = originalPopulation[i+1] || [];

    for (let j = 0; j < currentRow.length; j++) {
      const currentPerson = currentRow[j];

      const topPerson = previousRow[j] || 0;
      const nextPerson = currentRow[j+1] || 0;
      const bottomPerson = nextRow[j] || 0;
      const previousPerson = currentRow[j-1] || 0;
      const topRightPerson = previousRow[j+1] || 0;
      const bottomRightPerson = nextRow[j+1] || 0;
      const bottomLeftPerson = nextRow[j-1] || 0;
      const topLeftPerson = previousRow[j-1] || 0;

      aliveCount = (
        topPerson
        + nextPerson
        + bottomPerson
        + previousPerson
        + topRightPerson
        + bottomRightPerson
        + bottomLeftPerson
        + topLeftPerson
      );
      
      if (aliveCount < 2 || aliveCount > 3) {
        newPopulation[i][j] = 0;
      } else {
        newPopulation[i][j] = 1;
      }
    }
  }
  return newPopulation;
}

newPopulation(originalPopulation);