//peak is 0, currentHeight is 0;
//a valley occurs when currentHeight < 0 && you are at the peak
//loop through the arr, check currentHeight and if you're at the peak
//if currentHeight is 0 and you are not at the peak, atPeak = true.
//if currentHeight < 0 && you are at the peak, vallies++
//return vallies

function countingVallies(arr) {
  let currentHeight = 0;
  let vallies = 0;
  let atPeak = true;

  for (step of arr) {
    step === 'U' ? currentHeight++ : currentHeight--;
    if (currentHeight < 0 && atPeak) {
      vallies++;
      atPeak = false;
    } else if (currentHeight === 0 && !atPeak) {
      atPeak = true;
    }
  }
  return vallies;
}


countingVallies(['D','D','U','U','D','U','D','U','U','U','D']); //3