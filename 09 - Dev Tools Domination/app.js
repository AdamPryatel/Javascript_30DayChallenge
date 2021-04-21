const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string', 'p');
// console.log(`hello I am a ${var}`)

// Styled
console.log('%c I am some great text', 'font-size:50px;')

// warning!
console.warn('Oh No');

// Error :|
console.error('error');

// Info
console.info('some info here');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`)
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Adam');
console.count('Adam');
console.count('Adam');
console.count('Mike');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data')
  console.log(data);
})