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

