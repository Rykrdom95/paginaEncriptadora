function execute() {
    const input = document.getElementById("input").value.toLowerCase();
    const option = document.getElementById("option").value;
    let output = "";
    if (option === "encrypt") {
      output = encrypt(input);
    } else {
      output = decrypt(input);
    }
    document.getElementById("output").value = output;
  }
  
  function encrypt(word) {
    word = word.replace(/e/g, "enter");
    word = word.replace(/i/g, "imes");
    word = word.replace(/a/g, "ai");
    word = word.replace(/o/g, "ober");
    word = word.replace(/u/g, "ufat");
    return word;
  }
  
  function decrypt(word) {
    word = word.replace(/enter/g, "e");
    word = word.replace(/imes/g, "i");
    word = word.replace(/ai/g, "a");
    word = word.replace(/ober/g, "o");
    word = word.replace(/ufat/g, "u");
    return word;
  }
  
  function copy() {
    const output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  