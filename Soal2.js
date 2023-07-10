// Array
const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
// Serch
function searchName(keyword, limit, callback) {
  const filteredNames = names.filter((name) => name.toLowerCase().includes(keyword.toLowerCase()));
  const slicedNames = filteredNames.slice(0, limit);
  callback(slicedNames);
}
// Callback
function callbackFunction(result) {
  console.log(result);
}

searchName('a', 10, callbackFunction);
