
  function areaRectangulo() {
    var base,altura,area;
    
    base=document.getElementById("cajaBase").value;
    altura=document.getElementById("cajaAltura").value;
    area=base*altura;
    alert('El area es ' + area);
    document.getElementById("cajaSalida").value = area;
  }
 
  function areaCuadrado() {
    var lado,area;
    
    lado=document.getElementById("cajaLado").value;
    area=lado*lado;
    alert('El area es ' + area);
    document.getElementById("cajaSalida3").value = area;
  }
  
  function areatriangulo() {
    var base,altura,area;
    base=document.getElementById("cajaBase2").value;
    altura=document.getElementById("cajaAltura2").value;
    area=base*altura/2;
    alert('El resultado es ' + area);
    document.getElementById("cajaSalida5").value = area;

  }



  function areaCirculo() {
    var radio,area;

    radio=document.getElementById("cajaradio").value;
    area=Math.PI*Math.pow (radio,2);
    alert('El radio es ' + area);
    document.getElementById("cajaSalida6").value = area;
    

    



  }