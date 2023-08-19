// Giriş fonksiyonu
function login() {
    // Input => Değişken
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // kullanıcı adı ve pass doğru mu 
    if (username === "boran" && password === "1234") {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("bankingSystem").style.display = "block";
      document.getElementById("balance").innerHTML = "Toplam bakiye: $0";
    } 
    
    else if(username == 'boran' && password != '1234'){
        alert("Yanlış şifre girdiniz.")
    }
    
    else if(username != "boran" && password == "1234"){
        alert("Yanlış kullanıcı adı girdiniz.")
    }

    else if(username != "boran" && password != "1234"){
        alert("Kullanıcı adı da, şifre de yanlış")
    }
  }

  // Para yatırma
  function deposit() {
    var amount = parseFloat(document.getElementById("depositAmount").value);
    var balance = parseFloat(document.getElementById("balance").innerHTML.replace("Toplam bakiye: $", ""));
    
    if (isNaN(amount) || amount <= 0) { // Sayı değilse veya negatif sayıysa hata veriyor
      alert("Lütfen pozitif bir sayı giriniz.");
    } else {  // problem yoksa yatır
      balance += amount;
      document.getElementById("balance").innerHTML = "Toplam bakiye: $" + balance.toFixed(2);
    }
  }

  // Para çekme
  function withdraw() {
    var amount = parseFloat(document.getElementById("withdrawAmount").value);
    var balance = parseFloat(document.getElementById("balance").innerHTML.replace("Toplam bakiye: $", ""));
    
    if (isNaN(amount) || amount <= 0) {
      alert("Lütfen pozitif bir sayı giriniz.");
    } else if (amount > balance) {
      alert("Yetersiz bakiye.");
    } else {
      balance -= amount;
      document.getElementById("balance").innerHTML = "Toplam bakiye: $" + balance.toFixed(2);
    }
  }
  function resetBalance(){
    document.getElementById('balance').innerHTML = "Toplam bakiye:  $0";
  }  
// eagleFF
