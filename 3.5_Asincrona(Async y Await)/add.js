function sumar(n1, n2) {
  return new Promise((res) => {
    res(
      {
        valor1: n1,
        valor2: n2,
        resultado: n1 + n2
      }
    )
  })
}


async function asyncawait() {
  let obj = await sumar(50, 200);
  console.log(obj)
  obj = await sumar(400, 500)
  console.log(obj)
}

asyncawait()