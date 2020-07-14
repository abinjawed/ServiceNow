const isSubstring = (s1, s2) => {
  if (!s1 || !s2) {
    return false;
  }
  if (s1.length !== s2.length) {
    return false;
  }

  return (s1 + s1).includes(s2);
}

var a = 'waterbottle';
var b = 'bottlewater';
var c = 'buttlewater';
console.log(isSubstring(a,b));
console.log(isSubstring(a,c));
