<!---FOR LOOP of numbers--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  for (var i = 0; i <= 100; i += 1) {
    console.log(i);
    }

</script>
</body>
</html>

<!---FOR LOOP of an array--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  var fruits = ["mango", "banana", "apple", "cherry", "asd", "cucumber"];

  for (var i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
  }

</script>
</body>
</html>


<!---FOR LOOP of an array to only get the property--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  var data = {
    name: "john",
    age: 28,
    maritalStatus: true
  }

for (var elem in data) {
  console.log(elem);
}

</script>
</body>
</html>


<!---FOR LOOP of an array to get the property and value--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  var data = {
    name: "john",
    age: 28,
    maritalStatus: true
  }

for (var elem in data) {
  console.log(elem, data[elem]);
}

</script>
</body>
</html>


<!---WHILE LOOP for numbers--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  var num = 0;

  while (num < 11) {
    console.log(num);
    num++;
  }

</script>
</body>
</html>

<!---WHILE LOOP for incremental addition of numbers--->
<!DOCTYPE html>
<html>
<head>
<title>Loops</title>
</head>
<body>
<script>
  var sum = 0;

  var num = 0;

  while (num < 10) {
    sum += num;
    num++;
  }

  console.log(sum);

</script>
</body>
</html>
