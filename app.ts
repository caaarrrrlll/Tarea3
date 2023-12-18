//tarea3
function calcularAreaTrianguloRectangulo(base: number, altura: number): number {
    
    const area: number = (base * altura) / 2;
    return area;
  }
  
  const base: number = 10;
  const altura: number = 5;
  const areaTriangulo: number = calcularAreaTrianguloRectangulo(base, altura);
  console.log(`El área del triángulo rectángulo con base ${base} y altura ${altura} es ${areaTriangulo}`);
  