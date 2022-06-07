let min: number = 1;
let max: number = 9;
let cant: number = 2;
///
function multiplicarEntreNumeros(
  min: number,
  max: number,
  canNum: number
): number {
  let resultado: number = 1;
  let numeroIngresado: number = 0;
  let i: number = 0;

  while (i < canNum) {
    numeroIngresado = Number(
      prompt(`ingrese un numero entre ${min} y ${max} : `)
    );
    if (numeroIngresado >= min && numeroIngresado <= max) {
      resultado = resultado * numeroIngresado;
    }
    i++;
  }
  return resultado;
}
////

console.log(`resulstado : ${multiplicarEntreNumeros(min, max, cant)}`);
