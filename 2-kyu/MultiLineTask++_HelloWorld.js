/* REFERENCES:
    https://github.com/aemkei/jsfuck/blob/master/jsfuck.js
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


[Explanation] - We want to call .bind() in some String method. In order to do that, we can use the backlash (`\`) character
  to ignore/remove the `\n` characters at the end of the line. With that in mind, we can use that alongside with double brackets
  ([]) to bind our function in a method:

  The code below is the same of doing

    f=''['trim']['bind']`HELLOOOO`

f=
'' // some empty string to run .bind()
[
'\  // we will bind our function into `trim` just because it is the shortest method in `String.prototype`
t\
r\
i\
m'
][
'\  // binding `Hello, world` as `this`
b\
i\
n\
d'
]` 
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!`
*/

f=
''
[
'\
t\
r\
i\
m'
][
'\
b\
i\
n\
d'
]`
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!`

console.log(f())
