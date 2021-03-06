# dev-tools

JavaScript Challenge 9 of 30

A quick run through of 13 different console tricks.

1. <ins>Regular</ins> = console.log('Hello World')

2. <ins>Interpolation</ins> = console.log('string of %s words' , 'nice')

   Essentially obsolete with introduction of es6 template literals.

3. <ins>Styled</ins> = console.log('%c String to be styled', 'font-size: 50px')

   Adds styling to string value within the console.

4. <ins>Warning</ins> = console.warn('Oh no')

5. <ins>Error</ins> = console.error('Display error text string')

6. <ins>Info</ins> = console.info('Fun fact string')

7. <ins>Testing</ins> = console.assert(1 === 1, 'Wrong')

   Tests if the first argument is true. If false, the second argument will fire.

8. <ins>Clearing</ins> = console.clear()
   Literally just clears the console.

9. <ins>Viewing DOM Elements</ins> = console.dir(variable)

   Displays massive list of properties, methods, classes etc associated with the argument passed to console.dir().

10. <ins>Group</ins> = console.group('group name')
    console.log('string text')
    console.log('string text')
    console.groupEnd('group name')

    Groups a series of console logs orderly.

11. <ins>Count</ins> = console.count('string')

    Counts how many times the argument passed is used.

12. <ins>Timing</ins> = console.time('time name')
    const someFunction = (){}
    console.timeEnd('time name')

    Measures the time for an action to complete.

13. <ins>Table</ins> = console.table(array)
    Displays an orderly table in the console of an array.
