const fib = num => {
  if (num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

fib(6);

//                  fib(5)                    +                       fib(4)
//        fib(3)      +        fib(2)                        fib(3)    +     fib(2)
//    fib(2) + fib(1) -- fib(1) + fib(0)                fib(2) + fib(1) -- fib(1) fib(0)
//      1    +   1    +    1    +   1         +           1    +   1    +    1  +   1  
// = 8