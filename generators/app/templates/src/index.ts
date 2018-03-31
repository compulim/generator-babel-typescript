import summation from './summation';

export default function main(...v: number[]) {
  console.log(`Hello, World! ` + summation(...v));
}

main(123, 456);
