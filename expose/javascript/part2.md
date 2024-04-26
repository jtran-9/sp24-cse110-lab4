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
B. '3' - 2
```
1
```
C. 3 + null
```
3
```
D. '3' + null
```
'3null'
```
E. true + 3
```
4
```
F. false + null
```
0
```
G. '3' + undefined
```
'3undefined'
```
H. '3' - undefined
```
NaN
```

***Question 14:*** <br>
A. '2' > 1
```
true
```
B. '2' < '12'
```
false
```
C. 2 == '2'
```
true
```
D. 2 === '2'
```
false
```
E. true == 2
```
false
```
F. true === Boolean(2)
```
true
```

***Question 15:*** The difference is that 
