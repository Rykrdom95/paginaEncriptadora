function ejecutar() {
  var texto = document.getElementById("texto").value;
  var opciones = document.getElementById("opciones").value;
  var resultado = "";

  if (opciones === "encriptar") {
    resultado = encriptar(texto);
  } else {
    resultado = desencriptar(texto);
  }

  document.getElementById("resultado").value = resultado;
}

function encriptar(texto) {
  var resultado = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.charAt(i);
    switch (letra) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += letra;
    }
  }
  return resultado;
}

function desencriptar(texto) {
  var resultado = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto.substring(i, i + 5);
    if (letra === "enter") {
      resultado += "e";
    } else if (letra === "imes ") {
      resultado += "i";
    } else if (letra === "ai") {
      resultado += "a";
    } else if (letra === "ober") {
      resultado += "o";
    } else if (letra === "ufat") {
      resultado += "u";
    } else {
      resultado += letra.substring(0, 1);
    }
    i += 4;
  }
  return resultado;
}

function copiar() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("El texto se ha copiado al portapapeles.");
}