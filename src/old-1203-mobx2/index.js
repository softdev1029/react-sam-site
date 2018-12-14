import { observable, reaction, computed, autorun } from 'mobx';

const calc = observable({
  a: 1,
  b: 2
});

const sum = computed(() => {
  console.log('calc...');
  return calc.a + calc.b;
})

autorun(() => {console.log(`${calc.a} is changed`)});
autorun(() => sum.get());

//console.log(sum.value);
calc.a = 3;
console.log(sum.value);
