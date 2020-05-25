<!DOCTYPE html>
<html>
<body>
<script>
var people = [
{name: 'Ahmad', age: 64},
{name: 'Nadia', age: 51},
{name: 'Awad', age: 32},
{name: 'Omer', age: 31},
{name: 'Awad', age: 22},
{name: 'Abeer', age: 29},
];

//Sort by name
people.sort( (p1, p2) => {
if (p1.name < p2.name) return -1;
if (p1.name > p2.name) return 1;
return 0;
});

console.log(people.map(p => p.name));
//Sort by age
people.sort((p1, p2) =>{
  if (p1.age < p2.age) return -1;
  if (p1.age > p2.age) return 1;
  return 0;
});

console.log(people.map(p => p.name));
</script>
</body>
</html>
