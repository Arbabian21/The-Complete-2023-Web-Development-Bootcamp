function bmiCalculator(weight, height) 
{
    var BMI = weight/(Math.pow(height, 2));
	return Math.round(BMI);
}
