document.getElementById("calculate-button").addEventListener("click", function () {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) return;
  
    const date = new Date(birthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Meses em JS começam do zero
  
    const sign = getZodiacSign(day, month);
  
    document.getElementById("sign").textContent = sign;
    document.getElementById("result").classList.remove("hidden");
  });
  
  function getZodiacSign(day, month) {
    let sign = "";
  
    switch (month) {
      case 1:
        sign = day >= 20 ? "Aquário" : "Capricórnio";
        break;
      case 2:
        sign = day >= 19 ? "Peixes" : "Aquário";
        break;
      case 3:
        sign = day >= 21 ? "Áries" : "Peixes";
        break;
      case 4:
        sign = day >= 20 ? "Touro" : "Áries";
        break;
      case 5:
        sign = day >= 21 ? "Gêmeos" : "Touro";
        break;
      case 6:
        sign = day >= 21 ? "Câncer" : "Gêmeos";
        break;
      case 7:
        sign = day >= 23 ? "Leão" : "Câncer";
        break;
      case 8:
        sign = day >= 23 ? "Virgem" : "Leão";
        break;
      case 9:
        sign = day >= 23 ? "Libra" : "Virgem";
        break;
      case 10:
        sign = day >= 23 ? "Escorpião" : "Libra";
        break;
      case 11:
        sign = day >= 22 ? "Sagitário" : "Escorpião";
        break;
      case 12:
        sign = day >= 22 ? "Capricórnio" : "Sagitário";
        break;
      default:
        sign = "Data inválida";
    }
  
    return sign;
  }
  
  