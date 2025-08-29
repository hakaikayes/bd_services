1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
{ANS}->
getElementById → single element by ID.
getElementsByClassName → live collection of elements.
querySelector → first match.
querySelectorAll → list of all matches.

2. How do you create and insert a new element into the DOM?
{ANS}->
const element = document.createElement("xyz");
element.textContent = "Hello";
document.body.appendChild(element);

3. What is Event Bubbling and how does it work?
{ANS}->
Event goes from target → target parent → up to document.

4. What is Event Delegation in JavaScript? Why is it useful?
{ANS}->
Attach one listener to parent, handle child events via event.target.

5. What is the difference between preventDefault() and stopPropagation() methods?
{ANS}->
preventDefault() → stops browser’s default action.
stopPropagation() → stops event from bubbling to parent elements.