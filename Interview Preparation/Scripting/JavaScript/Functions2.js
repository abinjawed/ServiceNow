<!---Calling a Function--->
<!DOCTYPE html>
<html>
  <head>
    <script>
    function sayHello() {
    document.write("Hello!");
    }
    </script>
  </head>

  <body>

    <p>Click on the button to call the function</p>

    <form>
      <input type="button" onClick="sayHello()" value="Say Hello">
    </form>

  </body>
</html>

<!---Calling a Function with Parameters--->
<!DOCTYPE html>
<html>
  <head>
    <script>
      function sayHello(name, age) {
        document.write(name + " is " + age + " years old.");
      }
    </script>
  </head>

  <body>

    <p>Click the following button to call the function</p>

    <form>
      <input type="button" onClick="sayHello('Zara', 7)" value="say Hello">
    </form>

  </body>
</html>

<!---Calling a Function with the Return Statement--->
<!DOCTYPE html>
<html>
  <head>
    <script>
      function concatenate(first, last) {
        var full;
        full = first + last;
        return full;
      }
      function secondFunction() {
        var result;
        result = concatenate('Zara', 'Ali');
        document.write(result);
      }
    </script>
  </head>

  <body>

    <p>Click the following button to call the function</p>

    <form>
      <input type="button" onClick="secondFunction()" value="Call Function">
    </form>
  </body>
  </html>
