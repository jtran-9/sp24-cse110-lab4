1. What was the bug? <br>
When the printSum() function grabs the value of "num1" and "num2" it stores their values as strings. Therefore, when calculateSum uses the + operator on num1 and num2, since they're both strings, they are concatenated instead of being added together as integers. Therefore the output will always just concatenate both numbers and output the concatenation. <br>
2. How would you fix it? <br>
In order to fix this, all you have to do is parse the strings, num1 and num2, to get their integer values. When you use parseInt when you are getting their value from the html element, you store integers in the variables num1 and num2. Since both variables are now integers, the + operation would work as intended and the website will therefore, print out the correct sum. 
