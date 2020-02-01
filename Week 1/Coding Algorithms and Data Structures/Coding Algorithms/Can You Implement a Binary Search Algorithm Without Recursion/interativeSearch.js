<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>
let iterativeFunction = function(arr, x) {

  let start = 0, end = arr.length - 1;

while (start <= end){

let mid = Math.floor((start + end)/2);

if (arr[mid] === x) return true;

else if (arr[mid] < x)
  start = mid + 1;
else
end = mid - 1;
}
return false;
}

let arr = [1,3,5,7,8,9];
let x = 5;

if (iterativeFunction(arr, x, 0, arr.length-1))
  document.write("Element found!<br>");
else document.write("Element not found!");

x = 6;
if (iterativeFunction(arr, x, 0, arr.length-1))
  document.write("Element found!");
else document.write("Element not found!");

</script>
</body>
</html>
