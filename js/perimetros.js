 
  function perimetroRectangulo() {
    var base,altura,perimetro;

    base=document.getElementById("cajaBase").value;
    altura=document.getElementById("cajaAltura").value;
    perimetro=base*2+altura*2;
    alert('El perimetro es ' + perimetro);
    document.getElementById("cajaSalida2").value = perimetro;
    
  }
 
  function perimetroCuadrado() {
    var lado,perimetro;
    
    lado=document.getElementById("cajaLado").value;
    perimetro=lado*4;
    alert('El perimetro es ' + perimetro)
    document.getElementById("cajaSalida4").value = perimetro;
  }
  
  function perimetrotriangulo() {
    var base,lado1,lado2,perimetro;
    
    base=document.getElementById("cajaBase2").value;
    lado1=document.getElementById("cajalado1").value;
    lado2=document.getElementById("cajalado2").value;
    perimetro=lado1*1+lado2*1+base*1;
    alert('El perimetro del triangulo es '   + perimetro);
    document.getElementById("cajaSalida5").value = perimetro;

  }

  

  function perimetroCirculo() {
    var radio,perimetro;
    radio=document.getElementById("cajaradio").value;
    perimetro=2*Math.PI*radio;
    alert(' El perimetro del circulo es ' + perimetro)
    document.getElementById("cajaSalida7").value = perimetro;
    

    



  }

  function perimetroCirculo() {
    var radio,perimetro;

    radio=document.getElementById("cajaradio").value;
    perimetro=2*Math.PI*radio;
    alert(' El perimetro del circulo es' + perimetro)
    document.getElementById("cajaSalida7").value = perimetro;
    

    



  }