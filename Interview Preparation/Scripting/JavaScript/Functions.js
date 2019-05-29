//function definition:

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<script>

function catGreeter() {
  console.log("Hey Cat! You're a fine animal!")
  console.log("Meow!!!")
}

catGreeter()

</script>

</body>
</html>

//another example:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>

  function specialGreeter(name) {
    console.log("Hey" + name + "! You have a cool attitude.")
  }

specialGreeter("Joe")

</script>
</body>
</html>

//another example:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>

  function adder(a, b, c, d) {
    console.log(a + b + c + d);
  }

adder(2, 2, 2, 2)

</script>
</body>
</html>

//an example of how return doesn't print out the answer 6:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>

  function adder(num1, num2) {
    return num1 + num2;
  }

  adder(2, 4)

</script>
</body>
</html>

//an example of console.log() and result combining to print out the answer 6:

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<script>

function adder(num1, num2) {
  return num1 + num2;
}

adder(2, 4)

var result = adder(2, 4);

console.log(result)

</script>

</body>
</html>

//an example of a function with an array to see if 8 is in the array:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>
  function doesExist(nums, num) {
    for (var i=0; i<nums.length; i++) {
      if (nums[i] === num) {
        return true;
      }
    }

    return false;

  }

doesExist([2, 2, 5, 7], 8) //false

</script>
</body>
</html>

//an example of a function with an array to see if 2 is in the array:

<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>
  function doesExist(nums, num) {
    for (var i=0; i<nums.length; i++) {
      if (nums[i] === num) {
        return true;
      }
    }

    return false;

  }

doesExist([2, 2, 5, 7], 2) //true

</script>
</body>
</html>
