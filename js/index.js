var umur = document.getElementById("umur");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var cowok = document.getElementById("m");
var cewek = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");



function calculate(){
 
  if(umur.value=='' || tinggi.value=='' || berat.value=='' || (cowok.checked==false && cewek.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }

}


function countBmi(){
  var p = [umur.value, tinggi.value, berat.value];
  if(cowok.checked){
    p.push("cowok");
  }else if(cewek.checked){
    p.push("cewek");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Kekurangan berat badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal(Ideal)';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan berat badan';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Kegemukan (Obesitas)';
     }else if(35<=bmi){
    result = 'Sangat kegemukan (Obesitas Ekstrim) ';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Hasil tersebut menunjukan bahwa anda <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
