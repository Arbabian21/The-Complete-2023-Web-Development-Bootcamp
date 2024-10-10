function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        var fibonacci = [];
        
        for(var i = 0; i < n; i++)
        {
            if(i === 0)
                fibonacci.push(0);
            else if(i === 1)
                fibonacci.push(1);
            else
                fibonacci.push((fibonacci[i-1] + fibonacci[i-2]))
        }
        
        return fibonacci;
    //Do NOT change any of the code below 👇
    }
    
    