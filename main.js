const check = document.getElementById("check") ;

check.addEventListener("click", function() {
    let year = document.getElementById("year").value ;
    if (year%4 == 0 && year%100 !== 0 || year%400 == 0) {
      document.getElementById("result").innerHTML = "C'est une année bissextile";
    }
    else {
      document.getElementById("result").innerHTML = "Ce n'est pas une année bissextile";
    }
});
