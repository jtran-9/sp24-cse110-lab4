***Question 1:*** When running the Javascript file, line 12 ends up printing out...
```
3
```
This is because the variable, i, is declared using the var keyword, meaning that the value is still stored in i even after the for-loop terminates.

***Question 2:*** When running the Javascript file, line 13 ends up printing out...
```
150
```
This is because the discountedPrice variable, although declared inside the for-loop, is declared using the var keyword, so it's not bound to the specific code block that is the for-loop. Therefore you're allowed to access the discountedPrice variable.

***Question 3:*** When running the Javascript file, line 14 ends up printing out...
```
150
```
This is because finalPrice is in the same scope as the print line on line 14. You could declare this variable using the let keyword and it would still work.

***Question 4:*** When running the Javascript file, the function ends up returning...
```
[50, 100, 150]
```
This is because the list, discounted, is delcared and is in the same scope as the return line on line 16. Therefore, discounted should be accessible after the for-loop adds all the elements into it.

***Question 5:*** When running the Javascript file, the function ends up returning an error. This is because the variable, i, was declared using the let keyword, meaning that it's bound to the for-loop code block. So when the program tries to access the i variable, it fails to do so.

***Question 6:*** When running the Javascript file, the function ends up returning an error. This is due to a similar reason as the variable, i. discountedPrice was declared using the let keyword inside the for-loop so the variable is now bound within the for-loop. Therefore, when we try to access the variable and try to print its value, we fail to do so since the print line is outside of the for-loop.

***Question 7:*** When running the Javascript file, the function ends up returning...
```
150
```
This is because the finalPrice variable is within the scope of the print line. Since it was declared using the let keyword inside of the main body of the function, it's now bounded to the body of the function. Therefore, since the print line is within the main body of the function, we are successfully able to access and print its value.

***Question 8:*** When running the Javascript file, the function ends up returning...
```
[50, 100, 150]
```
This is because the list, discounted, is within the same scope as the return statement. Since it was declared using the let keyword, it was bounded to the main body of the function. Since the return statement is also in the main body of the function, it's able to return the correct output, the contents of discounted.

***Question 9:*** When running the Javascript file, the function ends up returning an error. This is basically the same reason as the one in Question 5 above. It's because the variable, i, was declared using the let keyword, meaning that it's bound to the for-loop code block. So when the program tries to access the i variable, it fails to do so.

***Question 10:*** When running the Javascript file, the function ends up returning...
```
3
```
We are able to successfully run this program because although length is declared using the const keyword, it's value is not being modified at all. In addition, the print statement is within the same scope as the length variable, the main body of the function.

***Question 11:*** When running the Javascript file, the function ends up returning...
```
[50, 100, 150]
```
Even though the function is pushing items into the list, even when it is declared a const, the function is not reassigning a value at all during its runtime. In other words, it's not assigning discounted to another list, instead, it's just adding values into the list.

***Question 12:*** <br>
A. Accessing the value of the name property in the student object:
```
student.name
```
B. Accessing the value of the Grad Year property in the student object:
```
student["Grad Year"]
```
C. Calling the function for the greeting property in the student object:
```
student.greeting()
```
D. Accessing the name property of the object in the Favorite Teacher property in student:
```
student["Favorite Teacher"].name
```
E. Access index zero in the array of the courseLoad property of the student object:
```
student.courseLoad[0]
```

***Question 13:*** <br>
A. '3' + 2
```
'32'
```
This is because add operation start with a string, so when it reads the 2, it just concatenates the 2 at the end of the string, returning the final string '32'. <br> <br>
B. '3' - 2
```
1
```
Since this is a subtraction operation and you can't subtract strings together, it takes the '3' as an integer and computates 3-2, resulting in 1. <br> <br>
C. 3 + null
```
3
```
Null is seen by Javascript as 0, so this expression can be converted to 3+0, which outputs 3. <br> <br>
D. '3' + null
```
'3null'
```
Since the expression starts with a string, '3', and uses an add operation, it just turns null into a string and returns the concatenated string. Therefore it returns '3null'. <br> <br>
E. true + 3
```
4
```
True becomes 1 in Javascript, so it computes 1 + 3, which results in 4. <br> <br>
F. false + null
```
0
```
Both false and null in Javascript become 0, so it computes 0 + 0, which results in 0. <br> <br>
G. '3' + undefined
```
'3undefined'
```
Since the expression starts with a string and uses the add operation, it turns undefined into a string and concatenates the two to return '3undefined'. <br> <br>
H. '3' - undefined
```
NaN
```
Since expression uses the subtract operation, it tries to turn undefined into an integer, which in Javascript, becomes NaN. Therefore, the final computation would look like 3 - NaN, which results in NaN. <br> <br>

***Question 14:*** <br>
A. '2' > 1
```
true
```
This is because Javascript turns '2' into an integer and since 2 is greater than 1, it returns true. <br> <br>
B. '2' < '12'
```
false
```
When comparing strings, it compares it character by character, so when it compares '2' and '1', it sees that '2' is greater than '1' so it returns false. <br> <br>
C. 2 == '2'
```
true
```
It's performing a regular equality check and since it turns the string into an integer and 2 == 2, it returns true. <br> <br>
D. 2 === '2'
```
false
```
It performs a strict equality operator, therefore it checks without any type conversions. Since one is an integer and the other is a string, it returns false. <br> <br>
E. true == 2
```
false
```
Since in Javascript, true becomes 1 and since 1 is not equal to 2, it returns false. <br> <br>
F. true === Boolean(2)
```
true
```
Since Boolean() is called with a non-zero number, it returns true, and since true and Boolean(2) are the same data type, when it performs a strict equality check, it returns true, since they are both booleans and they both hold the value true. <br> <br>

***Question 15:*** The difference is that the regular equality check, ==, checks for equality after any needed type conversions. The strict equality check, ===, checks for type equality as well. It first checks if they are of the same type and then it checks for value equality.

***Question 16:*** See part2-question16.js

***Question 17:*** It would return the new array...
```
[2,4,6]
```
We enter the modifyArray function and it initializes newArr to an empty list. We then go through the for-loop. For each array index, we call doSomething() with the array value. The function that we passed in as a parameter multiplies the given number by 2 and returns it. Therefore, we can see that this for-loop essentially takes each array value and multiplies it by 2 and then pushes it into the new array. Finally, the function returns the newArr, which contains all the values in the original array but multipled by 2.

***Question 18:*** See part2-question18.js

***Question 19:*** See part2-question16.js
