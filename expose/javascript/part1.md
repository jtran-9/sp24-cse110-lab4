***Question 1***: The output of the code on line 9 prints...
```
values added: 20
```

***Question 2***: The output of the code on line 13 prints...
```
final result:  20
```

***Question 3***: The output of the code on line 9 prints...
```
values added: 20
```

***Question 4***: The output of the code on line 13 prints an error. This is because we declared the result variable using the keyword "let". Because of this, the variable, result, is only visible within the if code block. When we try to obtain result's value in line 13, we are unable to since it is out of scope.

***Question 5***: The output of the code on line 9 prints an error because the const keyword prevents the variable from being changed after it's first initialization. Since it was initialized at 0 on line 5, since it was declared a const, you can no longer change its value, so when the function tries to change the value in line 7, it produces an error.

***Question 6***: The output of the code on line 13 prints an error because the "result" variable is out of scope. The const keyword works similarly with the let keyword, which means that the variable can only be seen in the if code block. When the function tries to obtain result's value, it throws an error since the variable cannot be seen from that point in the code.
