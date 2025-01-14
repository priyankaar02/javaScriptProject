# Javascript study material

**Javascript engines**
A JavaScript engine is a software component that executes JavaScript code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance.

JavaScript engines are typically developed by web browser vendors, and every major browser has one. In a browser, the JavaScript engine runs in concert with the rendering engine via the Document Object Model and Web IDL bindings. However, the use of JavaScript engines is not limited to browsers; for example, the V8 engine is a core component of the Node.js runtime system.

**V8:** V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.
Link: https://v8.dev/

**NodeJS:** Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.
Link: https://nodejs.org/en

**How Javascript works behind the scene**

JavaScript is a single-threaded interpreted language. Every browser has its own JavaScript engine. Google Chrome has the V8 engine, Mozilla Firefox has SpiderMonkey, and so on. They all are used for the same goal, because the browsers cannot directly understand JavaScript code.
Some reference links
1. https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
2. https://medium.com/@obrm770/javascript-under-the-hood-8cec84bbfd64

**Javascript Variables:**
In JavaScript, we use var, let, and const to create variables. These keywords might seem similar at first, but they control how and where your variables work in your code.

**Var**
Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand var more before we discuss those issues.
**Scope of var**
Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.
The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.
**Hoisting of var**
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
So var variables are hoisted to the top of their scope and initialized with a value of undefined.

**Let**
let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.
**let is block scoped**
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
So a variable declared in a block with let is only available for use within that block.
let can be updated but not re-declared.
Just like var, a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. 
However, if the same variable is defined in different scopes, there will be no error.
Why is there no error? This is because both instances are treated as different variables since they have different scopes.
This fact makes let a better choice than var. When using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope.
Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.
**Hoisting of let**
Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

**Const**
Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.
const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. 
Every const declaration, therefore, must be initialized at the time of declaration.
This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated.
**Hoisting of const**
Just like let, const declarations are hoisted to the top but are not initialized.

**So just in case you missed the differences, here they are:**

1. var declarations are globally scoped or function scoped while let and const are block scoped.
2. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
3. They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
4. While var and let can be declared without being initialized, const must be initialized during declaration.

Reference Link: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
