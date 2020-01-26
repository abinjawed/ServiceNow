<html>
<head>
</head>
<body>
<script>

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function linearSearch(arr, elem) {
  for(let i = 0; i < arr.length; i++) {
     if(arr[i] === elem) {
       return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, 5))

</script>
</body>
</html>
