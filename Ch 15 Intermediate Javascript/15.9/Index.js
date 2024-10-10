var output = [];
var x = 1;

function fizzBuzz()
{
    while (x <= 100)
    {
            if ((x % 3) === 0 && (x % 5) === 0)
                output.push("FizBuzz");
            else if ((x % 3) === 0)
                output.push("Fizz");
            else if ((x % 5) === 0)
                output.push("Buzz");
            else
                output.push(x);
            x++;
    }
    
     console.log(output);
}