function countLetters(string)
{
//return all unique characters
// how many instances of each char
// return object
var stringDetails = {};

for (var i = 0;i < string.length;i++)
{
  if (stringDetails[string[i]] === undefined)
    stringDetails[string[i]] = 0;
  stringDetails[string[i]]++;
}
delete stringDetails[' '];
return stringDetails;
}