function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        
        if( year % 4 === 0 )
        {
            if ( (year/400) % 1 === 0 )
                return "Leap year.";
            if ( (year/100) % 1 === 0 )
                return "Not leap year.";
            else
                return "Leap year.";
        }
        else
            return "Not leap year.";
    
        
    
    /**************Don't change the code below****************/    
    
    }