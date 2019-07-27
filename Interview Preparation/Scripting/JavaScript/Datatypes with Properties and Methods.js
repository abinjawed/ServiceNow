<!DOCTYPE html>
<!---Datatypes with Properties and Methods--->
<html>
<head>
</head>
<body>

  <p>Click the button to convert the array into a String.</p>
  <button onclick="myFunction()">Try it</button>

  <p id="demo"></p>

  <script>
    function myFunction() {
      var fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.toString();
      document.getElementById("demo").innerHTML = fruits;
    }
  </script>

</body>
</html>

<!---Popping--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>JavaScript Array Methods</h2>


<p>The pop() method removes the last element from an array.</p>

<p>Click the button to remove the last element from the array.</p>
  <button onclick="myFunction()">Try it</button>

<p id="demo"></p>
<p id></p>

<script>
//describe the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

//remove the last element from the array
function myFunction() {
fruits.pop();
document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>

<!---Pushing--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>JavaScript Array Methods</h2>


<p>The push() method adds a new element into an array.</p>

<p>Click the button to add a new element into the array.</p>
  <button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
//describe the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

//add the new element into the array
function myFunction() {
document.getElementById("demo").innerHTML = fruits.push("Kiwi");
document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>

<!---Shift--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p>The shift() method removes the first element of an array (and "shifts" all other elements to the left):</p>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;
</script>
</body>
</html>

<!---Unshift--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p>The unshift() method adds new elements to the beginning of an array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.unshift("Lemon");
  document.getElementById("demo").innerHTML = fruits;
}
</script>
</body>
</html>

<!---Change via index number--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <p>Array elements are accessed using their index number:</p>

  <p id="demo1"></p>
  <p id="demo2"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits[0] = "Kiwi";
document.getElementById("demo2").innerHTML = fruits;
</script>
</body>
</html>

<!---Deleting elements--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <p>Deleting elements leaves undefined holes in an array.</p>

  <p id="demo1"></p>
  <p id="demo2"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "The first fruit is:" + fruits[0];
delete fruits[0];
document.getElementById("demo2").innerHTML = "The first fruit is:" + fruits[0];
</script>
</body>
</html>

<!---Splicing an array--->
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <p>The splice() method adds new elements to an array.</p>

  <button onclick="myFunction()">Try it</button>

  <p id="demo1"></p>
  <p id="demo2"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<>br" + fruits;
function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo2").innerHTML = "New Array:<>br" + fruits;
}
</script>
</body>
</html>

<!---Using splice() to remove elements--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>splice()</h2>

<p>The splice() method adds new elements to an array, and returns an array with the deleted elements (if any).</p>

<button onclick="myFunction()">Try it</button>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br> " + fruits;

function myFunction() {
  var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
  document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;
  document.getElementById("demo3").innerHTML = "Removed Items:<br> " + removed;
}
</script>

</body>
</html>

<!---Concatenating to merge 2 arrays--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>concat()</h2>

<p>The concat() method is used to merge (concatenate) arrays:</p>

<p id="demo"></p>

<script>
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

document.getElementById("demo").innerHTML = myChildren;
</script>

</body>
</html>

<!---Concatenating to merge 3 arrays--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>concat()</h2>

<p>The concat() method is used to merge (concatenate) arrays:</p>

<p id="demo"></p>

<script>
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

document.getElementById("demo").innerHTML = myChildren;
</script>

</body>
</html>

<!---Concatenating to merge an array with values--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>concat()</h2>

<p>The concat() method can also merge values to arrays:</p>

<p id="demo"></p>

<script>
var arr1 = ["Cecilie", "Lone"];
var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
document.getElementById("demo").innerHTML = myChildren;
</script>

</body>
</html>

<!---Slicing an array--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>slice()</h2>

<p>This example slices out a part of an array starting from array element 1 ("Orange"):</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
document.getElementById("demo").innerHTML = fruits + "<br><br>" + citrus;
</script>

</body>
</html>

<!---Automatic toString()--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<h2>toString()</h2>

<p>The toString() method returns an array as a comma separated string:</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
</script>

</body>
</html>

<!---Automatic toString()--->
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2>

<p>JavaScript automatically converts an array to a comma separated string when a simple value is expected:</p>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
</script>

</body>
</html>
