/*

Lab name: Experimental Biochemistry
Exp name: Computation of various physical and chemical properties of Proteins and DNA from their primary sequence
File name: main.js
Developer: Prakriti Dhang

*/

function computebtn() {

  document.getElementById("computebtn").disabled = true;
  document.getElementById("ressetbtn").disabled = false;
}



function resetexpbtn() {
  location.reload();
}

var selectprotein = document.getElementById("step1");
function showsequencebtn(){
  if (selectprotein.options[selectprotein.selectedIndex].value == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("Textarea1").innerHTML = " ";
   // document.getElementById("exampleModal").modal = "show";
    //document.getElementById("exampleModal").classList.add("show");
    $('#exampleModal').modal('show');

  }
  if (selectprotein.options[selectprotein.selectedIndex].value == 1) {
   
    document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }

  if (selectprotein.options[selectprotein.selectedIndex].value > 1) {
    document.getElementById("Textarea1").innerHTML = " ";
   // document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }
}


function computebtn() {

  if (selectprotein.options[selectprotein.selectedIndex].value == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("Textarea1").innerHTML = " ";
   // document.getElementById("exampleModal").modal = "show";
    //document.getElementById("exampleModal").classList.add("show");
    $('#exampleModal').modal('show');

  }
  if (selectprotein.options[selectprotein.selectedIndex].value == 1) {
    document.getElementById("card1").style.display = "block";
   // document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }

  
  if (selectprotein.options[selectprotein.selectedIndex].value > 1) {
    document.getElementById("card1").style.display = "none";
   // document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }
}


function selectaminoname() {
  document.getElementById("exampleModal").style.display = "none";
  document.getElementById("exampleModal").classList.remove("show");
}