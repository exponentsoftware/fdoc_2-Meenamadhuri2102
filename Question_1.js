/*Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
const countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]  */
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]  
var result = countries.map(country => [country.toLowerCase(), country.substring(0, 3), country.length])
console.log(countries);
console.log(result);