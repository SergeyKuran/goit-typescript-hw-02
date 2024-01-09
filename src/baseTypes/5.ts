/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union;
let literal;

if (typeof union === 'string') {
console.log('This is type "string"');
}
console.log('This is type "number"');

if ( literal === 'enable') {
console.log('This is "enable"');
}
console.log('This is "disable"');