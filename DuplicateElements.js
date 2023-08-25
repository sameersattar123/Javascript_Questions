  // Duplicate Elements
  const arr = [1, 2, 3, 4, 2, 4,5,5,6,6];
  const duplicate = arr.filter(
    (element, index, arr) => arr.indexOf(element) !== index
  );
  console.log(duplicate);