const doorArea = 0.8 * 1.9;
const windowArea = 2.0 * 1.2;

export default function Calculate(wall) {
  let totalArea = 0;
  let cansOf18 = 0;
  let cansOfThreeAndSix = 0;
  let cansOfTwoAndHalf = 0;
  let cansOfHalf = 0;
  for (let i = 1; i < 5; i += 1) {
    if (wall[i] === undefined) {
      alert('Preencha todos os campos');
    }
    const wallArea = Number(wall[i].height.replace(',', '.')) * Number(wall[i].width.replace(',', '.'))
                    - Number(wall[i].windows) * windowArea
                    - Number(wall[i].doors) * doorArea;
    if (wallArea < 1.00) {
      alert(`Area da parede ${i} tem que ser maior que 1 metro quadrado.`);
    } else if (wallArea > 15.00) {
      alert(`Area da parede ${i} tem que ser maior que 15 metros quadrados.`);
    }
    if (wallArea < (Number(wall[i].height.replace(',', '.')) * Number(wall[i].width.replace(',', '.'))) / 2) {
      alert('A area das portas e janelas tem que ser no maximo 50% da area da parede.');
    }
    if (Number(wall[i].height.replace(',', '.')) - 1.9 < 0.30 && Number(wall[i].doors) !== 0) {
      alert('As portas devem ser pelo menos 30 cm mais baixas que as paredes.');
    }
    totalArea += wallArea;
  }
  let paintLittersNeeded = (totalArea / 5);
  console.log(paintLittersNeeded);
  while (paintLittersNeeded > 0) {
    if (paintLittersNeeded >= 18) {
      paintLittersNeeded -= 18;
      cansOf18 += 1;
    }
    if (paintLittersNeeded >= 3.6) {
      paintLittersNeeded -= 3.6;
      cansOfThreeAndSix += 1;
    }
    if (paintLittersNeeded >= 2.5 && paintLittersNeeded < 3.6) {
      paintLittersNeeded -= 2.5;
      cansOfTwoAndHalf += 1;
    }
    if (paintLittersNeeded < 2.5 && paintLittersNeeded > 0) { //
      paintLittersNeeded -= 0.5;
      cansOfHalf += 1;
    }
    console.log(paintLittersNeeded);
  }
  console.log('ok2');
  console.log(`Para Pintar as paredes são necessarias ${cansOf18} latas de 18 litros, ${cansOfThreeAndSix} latas de 3,6 litros, ${cansOfTwoAndHalf} latas de 2,5 litros, ${cansOfHalf} latas de 0,5 litros.`);
}
