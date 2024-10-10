var output = [];

function fizzBuzz()
{
    for (var x = 1; x <= 100; x++)
    {
            if ((x % 3) === 0 && (x % 5) === 0)
                output.push("FizBuzz");
            else if ((x % 3) === 0)
                output.push("Fizz");
            else if ((x % 5) === 0)
                output.push("Buzz");
            else
                output.push(x);
    }
    
     console.log(output);
}