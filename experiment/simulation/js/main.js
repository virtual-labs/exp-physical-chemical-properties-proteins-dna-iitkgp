/*

Lab name: Experimental Biochemistry
Exp name: Computation of various physical and chemical properties of Proteins and DNA from their primary sequence
File name: main.js
Developer: Prakriti Dhang

*/

/*function computebtn() {

  document.getElementById("computebtn").disabled = true;
  document.getElementById("ressetbtn").disabled = false;

  
}*/



function resetexpbtn() {
  location.reload();
}


/********************************************   Protein Sequence  **********************************************************/

var selectprotein = document.getElementById("step1");
function showsequencebtn() {
  if (selectprotein.options[selectprotein.selectedIndex].value == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("Textarea1").innerHTML = " ";
    // document.getElementById("exampleModal").modal = "show";
    //document.getElementById("exampleModal").classList.add("show");
    $('#exampleModal').modal('show');

  }
  if (selectprotein.options[selectprotein.selectedIndex].value == 1) {

    var txtseqa= document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS";
    const inputString = txtseqa;

    const characters = inputString.split('');
    const groupsOf10 = [];
    let cumulativeCount = 0;
    for (let i = 0; i < characters.length; i += 10) {
      //groupsOf10.push(characters.slice(i, i + 10).join(''));
      const group = characters.slice(i, i + 10).join('');
      const numberOfCharacters = i + 10 <= characters.length ? 10 : characters.length % 10;
      cumulativeCount += numberOfCharacters;
      groupsOf10.push(`  ${cumulativeCount}\n ${group}`);

    }

    const grpTextarea = document.getElementById('grpTextarea');
    grpTextarea.value = groupsOf10.join('\n');
  }

  if (selectprotein.options[selectprotein.selectedIndex].value == 4) {

    document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }

  if (selectprotein.options[selectprotein.selectedIndex].value > 5) {
    document.getElementById("Textarea1").innerHTML = " ";
    // document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }
}

/********************************************   Compute parameters  **********************************************************/
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

  if (selectprotein.options[selectprotein.selectedIndex].value == 4) {
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


/********************************************   Onchange function-  select from dropdown **********************************************************/
function selectname() {
  var selectprotein = document.getElementById("step1");
  if (selectprotein.options[selectprotein.selectedIndex].value > 0) {
    document.getElementById("Textarea1").innerHTML = " ";
    document.getElementById("grpTextarea").innerHTML = " ";
    document.getElementById("card1").style.display = "none";
    document.getElementById("card11").style.display = "none";
    document.getElementById("card12").style.display = "none";
   
    // document.getElementById("Textarea1").innerHTML = "MMTGTIETTGNISAEKGGSIILQCHLSSTTAQVTQVNWEQQDQLLAICNADLGWHISPSFKDRVAPGPGLGLTLQSLTVNDTGEYFCIYHTYPDGTYTGRIFLEVLESSVAEHGARFQIPLLGAMAATLVVICTAVIVVVALTRKKKALRIHSVEGDLRRKSAGQEEWS ";

  }
}

/********************************************   Show chemical properties  **********************************************************/

function chemstructbtn(){
  if (selectprotein.options[selectprotein.selectedIndex].value == 0) {
    document.getElementById("card1").style.display = "none";
    document.getElementById("Textarea1").innerHTML = " ";
    // document.getElementById("exampleModal").modal = "show";
    //document.getElementById("exampleModal").classList.add("show");
    $('#exampleModal').modal('show');

  }
  if (selectprotein.options[selectprotein.selectedIndex].value == 1) {
    document.getElementById("card11").style.display = "block";
   

  }

}




/********************************************   DNA  **********************************************************/

function dnabtn(){
 var dnaSequence = document.getElementById("Textarea2").value;
 
     countNucleotides(dnaSequence);
  
    function countNucleotides(dnaSequence) {
      // Initialize counters
      let countA = 0;
      let countT = 0;
      let countG = 0;
      let countC = 0;
    
      // Iterate through the DNA sequence
      for (let i = 0; i < dnaSequence.length; i++) {
        let nucleotide = dnaSequence[i].toUpperCase(); // Convert to uppercase for case-insensitivity
    
        // Count each nucleotide
        switch (nucleotide) {
          case 'A':
            countA++;
            break;
          case 'T':
            countT++;
            break;
          case 'G':
            countG++;
            break;
          case 'C':
            countC++;
            break;
          // You can add handling for other characters if needed
        }
      }
    
      // Optional: Calculate molar concentrations
      const totalBases = dnaSequence.length;
      const molarConcentrationA = countA / totalBases;
      const molarConcentrationT = countT / totalBases;
      const molarConcentrationG = countG / totalBases;
      const molarConcentrationC = countC / totalBases;

//displaying the result
document.getElementById("atgc").innerHTML=" <i>Count of A:</i> " +countA+  "<br> <i>Count of T:</i> " +countT+ "<br> <i>Count of G:</i> " +countG+  
"<br> <i>Count of C:</i> " +countC+ "<br><br><i> Molar Concentration of A:</i>  " +molarConcentrationA+ "<br> <i>Molar Concentration of T:</i>  " +molarConcentrationT+
 "<br> <i>Molar Concentration of G:</i>  " +molarConcentrationG+ "<br> <i>Molar Concentration of C:</i>  " +molarConcentrationC ;

//Calculate melting temperature
 Tm=4 *  (molarConcentrationG + molarConcentrationC)+2 *(molarConcentrationA + molarConcentrationT)


 document.getElementById("tm").innerHTML="Melting temperature (T<sub>m</sub>): " +Tm;
 

     // console.log('Count of A:', countA);
 // console.log('Count of T:', countT);
 // console.log('Count of G:', countG);
 // console.log('Count of C:', countC);
  //console.log('Molar Concentration of A:', molarConcentrationA);
  //console.log('Molar Concentration of T:', molarConcentrationT);
  //console.log('Molar Concentration of G:', molarConcentrationG);
  //console.log('Molar Concentration of C:', molarConcentrationC);
    
      // Return the results
      return {
        countA,
        countT,
        countG,
        countC,
        molarConcentrationA,
        molarConcentrationT,
        molarConcentrationG,
        molarConcentrationC,
      };
    }
    
    
   
    

  }
  
  

