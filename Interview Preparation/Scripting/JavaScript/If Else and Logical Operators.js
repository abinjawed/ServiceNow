<!---If Statement with equality operator and assignment operator--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var num = 20;

  if (num > 0) {
    console.log("The number is a positive.")
  }

  if (num < 0) {
    console.log("The number is a negative.")
  }
</script>
</body>
</html>

<!---If, Else If Statement with equality operator and assignment operator--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var num = -4;

  if (num > 0) {
    console.log("The number is a positive.")
  } else {
    console.log("The number is a negative.")
  }
</script>
</body>
</html>

<!---If, Else If, Else Statement with equality operator and assignment operator--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var num = 0;

  if (num > 0) {
    console.log("The number is a positive.")
  } else if (num < 0){
    console.log("The number is a negative.")
  } else {
    console.log("The number is a zero.")
  }
</script>
</body>
</html>

<!---Replacing the console.log() method with the alert() method--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var num = 9;

  if (num > 0) {
    alert("The number is a positive.")
  } else if (num < 0){
    alert("The number is a negative.")
  } else {
    alert("The number is a zero.")
  }
</script>
</body>
</html>

<!---Using the prompt() method to avoid hard-coding the numbers--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var num = prompt("Enter a number!!!");

  if (num > 0) {
    alert("The number is a positive.")
  } else if (num < 0){
    alert("The number is a negative.")
  } else {
    alert("The number is a zero.")
  }
</script>
</body>
</html>

<!---Another example--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var isRaining = prompt("Is it raining?");

  if (isRaining === "yes") {
    alert("Go take an umbrella!")
  } else {
    alert("It's ok. You don't need anything.")
  }
</script>
</body>
</html>

<!---Logical operators--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var name = "lexi";
  var age = 18;
  var highSchool = true;

  //JOB AT APPLE
  //job requirements : over 18 and high school degree

  if (age >= 18 && highSchool === true) {
    alert("You are eligible to apply for this job.")
  }

</script>
</body>
</html>

<!---Another example--->
<!DOCTYPE html>
<html>
<head>
<title>If Else Statements</title>
</head>
<body>
<script>
  var name = "john";
  var age = 28;
  var highSchool = false;

  //JOB AT APPLE
  //job requirements : over 18 and high school degree

  if (age >= 18 || highSchool === true) {
    alert("You are eligible to apply for this job.")
  }

</script>
</body>
</html>
