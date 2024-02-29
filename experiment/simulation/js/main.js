/*

Lab name: Experimental Biochemistry
Exp name: Computation of various physical and chemical properties of Proteins and DNA from their primary sequence
File name: main.js
Developer: Prakriti Dhang

*/




function restartexp() {
  location.reload();
}

/** enter amino acid sequence */
function aseqbtn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();

  if (aminoacidSequence == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter only 1-letter code of amino acid.');
  }
  else if (/^[0-9]+$/i.test(aminoacidSequence)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid Amino acid sequence. Please enter only 1-letter code of amino acid.');
  }
  else if ((aminoacidSequence.length < 5) || (aminoacidSequence.length > 20)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter 5-20 amino acids.');
  }

  else {
    document.getElementById("Textarea1").readOnly = true;
    document.getElementById("aseqbtn").disabled = true;
    document.getElementById("mwbtn").disabled = false;
    document.getElementById("mw1btn").disabled = false;
    document.getElementById("mecbtn").disabled = false;
  }
}


/****************************************** Approx molecular weight amino acid ********************************** */

var aminoacidSequence, mw, userinptmw;
function checkmwbtn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();

  mw = aminoacidSequence.length;
  console.log(`Molecular Weight: ${mw} `);
  userinptmw = document.getElementById("inputmwa").value;

  if (userinptmw == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('The input box for  number of amino acid cannot be empty.');
    document.getElementById("inputmwa").style.border = "2px solid blue";
  }
  else if (userinptmw == mw) {
    /*$('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');*/
    var resultmw = mw * 110;
    document.getElementById("inputmwar").value = resultmw;
    document.getElementById("inputmwa").style.border = "2px solid green";

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect number of amino acid is entered.');
    document.getElementById("mwbtnshow").disabled = false;
    document.getElementById("inputmwar").value = "";
    document.getElementById("inputmwa").value = "";
    document.getElementById("inputmwa").style.border = "2px solid red";
  }






}



function showmwbtn() {
  $('#alertModal').modal('show');
  $('.modal-body').text('The total number of amino acid in the above sequence is: ' + mw);
}
/********************************************   Amino acid sequence -actual molecular weight of protein **********************************************************/

var mw1, userinptmw1, amacidlength, totalWeight;
function checkmw1btn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();

  amacidlength = aminoacidSequence.length;

  /*const molecularWeights = {
    'A': 89.09,
    'R': 174.20,
    'N': 132.12,
    'D': 133.10,
    'C': 121.15,
    'E': 147.13,
    'Q': 146.15,
    'G': 75.07,
    'H': 155.16,
    'I': 131.18,
    'L': 131.18,
    'K': 146.19,
    'M': 149.21,
    'F': 165.19,
    'P': 115.13,
    'S': 105.09,
    'T': 119.12,
    'W': 204.23,
    'Y': 181.19,
    'V': 117.15
  };*/
  const molecularWeights = {
    'A': 89.1,
    'R': 174.2,
    'N': 132.1,
    'D': 133.1,
    'C': 121.2,
    'E': 147.1,
    'Q': 146.2,
    'G': 75.1,
    'H': 155.2,
    'I': 131.2,
    'L': 131.2,
    'K': 146.2,
    'M': 149.2,
    'F': 165.2,
    'P': 115.1,
    'S': 105.1,
    'T': 119.1,
    'W': 204.2,
    'Y': 181.2,
    'V': 117.1
  };

  totalWeight = aminoacidSequence.split('').reduce((sum, aminoAcid) => {
    return sum + (molecularWeights[aminoAcid] || 0);
  }, 0);
  var rwater = ((amacidlength - 1) * 18.01);

  mw1 = (totalWeight - rwater).toFixed(2);


  console.log(`Molecular Weight: ${mw1} `);
  userinptmw1 = document.getElementById("inputmwa1").value;

  if (userinptmw1 == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('Input box cannot be empty');
    document.getElementById("inputmwa1").style.border = "2px solid blue";
  }
  else if (parseFloat(userinptmw1).toFixed(2) == mw1) {
    /*$('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');*/
    document.getElementById("inputmwa1").style.border = "2px solid green";
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect answer. Please calculate the molecular weight of amino acid.  Refer to the table above (click on the button Molecular weight table).');
    document.getElementById("mw1btnshow").disabled = false;
    document.getElementById("inputmwa1").value = "";
    document.getElementById("inputmwa1").style.border = "2px solid red";

  }


}

function showmw1btn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('Actual molecular weight of the above sequence is: ' + mw1 + ' <br><br>Hint: Total molecular weight of amino acid - ((total length of the sequence -1 ) * molecular weight of water )  <br>' + totalWeight.toFixed(2) + '- ((' + amacidlength + '- 1) * 18.01)');

}

/************************************************************************ Molar extinction coefficient of protein    *******************************************************************************************/
var userinptW, userinptY, userinptC, countW, countY, countC;


function checkmabsbtn() {
  countW = 0;
  countY = 0;
  countC = 0;
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();

  countwyc(aminoacidSequence);
  function countwyc(aminoacidSequence) {
    // Initialize counters



    for (let i = 0; i < aminoacidSequence.length; i++) {
      let wyc = aminoacidSequence[i].toUpperCase(); // Convert to uppercase for case-insensitivity

      // Count each nucleotide
      switch (wyc) {
        case 'W':
          countW++;
          break;
        case 'Y':
          countY++;
          break;
        case 'C':
          countC++;
          break;


      }
    }

    userinptW = document.getElementById("inputmabs1").value;
    userinptY = document.getElementById("inputmabs2").value;
    userinptC = document.getElementById("inputmabs3").value;


    console.log(countW);
    console.log(countY);
    console.log(countC);

    var mwact = (countW * 5500) + (countY * 1490) + (countC * 125);
    var userinptwyc = document.getElementById("inputmabst").value = mwact;



    if (
      (userinptW !== '0' && userinptW == countW) ||
      (userinptY !== '0' && userinptY == countY) ||
      (userinptC !== '0' && userinptC == countC)
    ) {
      /*$('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');*/
      document.getElementById("inputmabs1").style.border = "2px solid green";
      document.getElementById("inputmabs2").style.border = "2px solid green";
      document.getElementById("inputmabs3").style.border = "2px solid green";
      document.getElementById("inputmabst").value = mwact;
    }
    else {
      document.getElementById("inputmabst").value = 0;
      $('#alertModal').modal('show');
      $('.modal-body').text('To calculate the molar extinction coefficient, the peptide sequence must contain Tryptophan, Tyrosine, Cysteine');
    }

    // else {

    if (userinptW != countW) {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of W is entered');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs1").style.border = "2px solid red";
    }
    if (userinptY != countY) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of Y is entered');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs2").style.border = "2px solid red";

    }
    if (userinptC != countC) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of C is entered');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs3").style.border = "2px solid red";

    }

    if (userinptW == "") {

      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for  number of W cannot be empty');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs1").style.border = "2px solid blue";
    }
    if (userinptY == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for number of Y cannot be empty');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs2").style.border = "2px solid blue";

    }
    if (userinptC == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for number of C cannot be empty');
      document.getElementById("inputmabst").value = " ";
      document.getElementById("inputmabs3").style.border = "2px solid blue";

    }
    // document.getElementById("Textarea1").value="";
    document.getElementById("mabsbtnshow").disabled = false;

    // }






    /* else{
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect answer. Please enter number of W,Y,C correctly');
      document.getElementById("mabsbtnshow").disabled = false;
    } */

  }


}


function showmabsbtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('Number of W in the above sequence is : ' + countW + ' <br>Number of Y in the above sequence is: ' + countY + ' <br>Number of C in the above sequence is :  ' + countC);

}


/************************************************************************ Peptide ****************************************************************************/
var selectpeptide = document.getElementById('peptidesel');
function pseqbtn() {

  if (selectpeptide.options[selectpeptide.selectedIndex].value == 1) {
    document.getElementById("peptide1").style.display = "block";
    document.getElementById("peptide2").style.display = "none";
    document.getElementById("peptide3").style.display = "none";
    document.getElementById("netchargetable").style.display = "none";
    document.getElementById("peptide5").style.display = "none";
    document.getElementById("peptide4").style.display = "none";
    document.getElementById("steppb1").disabled = false;
    document.getElementById("pibtn").disabled = false;
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "pK<sub>a2</sub>";
    document.getElementById("pk2").innerHTML = "pK<sub>a3</sub>";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";

  }
  else if (selectpeptide.options[selectpeptide.selectedIndex].value == 2) {
    document.getElementById("peptide2").style.display = "block";
    document.getElementById("peptide1").style.display = "none";
    document.getElementById("peptide3").style.display = "none";
    document.getElementById("netchargetable").style.display = "none";
    document.getElementById("peptide5").style.display = "none";
    document.getElementById("peptide4").style.display = "none";
    document.getElementById("steppb1").disabled = false;
    document.getElementById("pibtn").disabled = false;
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "pK<sub>a1</sub>";
    document.getElementById("pk2").innerHTML = "pK<sub>a3</sub>";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";
  }
  else if (selectpeptide.options[selectpeptide.selectedIndex].value == 3) {
    document.getElementById("peptide3").style.display = "block";
    document.getElementById("peptide2").style.display = "none";
    document.getElementById("peptide1").style.display = "none";
    document.getElementById("netchargetable").style.display = "none";
    document.getElementById("peptide5").style.display = "none";
    document.getElementById("peptide4").style.display = "none";
    document.getElementById("steppb1").disabled = false;
    document.getElementById("pibtn").disabled = false;
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "pK<sub>a1</sub>";
    document.getElementById("pk2").innerHTML = "pK<sub>a2</sub>";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";
  }
  else if (selectpeptide.options[selectpeptide.selectedIndex].value == 4) {
    document.getElementById("peptide4").style.display = "block";
    document.getElementById("peptide5").style.display = "none";
    document.getElementById("peptide3").style.display = "none";
    document.getElementById("peptide2").style.display = "none";
    document.getElementById("peptide1").style.display = "none";
    document.getElementById("netchargetable").style.display = "none";
    document.getElementById("steppb1").disabled = false;
    document.getElementById("pibtn").disabled = false;
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "pK<sub>a1</sub>";
    document.getElementById("pk2").innerHTML = "pK<sub>a2</sub>";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";
  }
  else if (selectpeptide.options[selectpeptide.selectedIndex].value == 5) {
    document.getElementById("netchargetable").style.display = "block";
    document.getElementById("peptide5").style.display = "block";
    document.getElementById("peptide4").style.display = "none";
    document.getElementById("peptide3").style.display = "none";
    document.getElementById("peptide2").style.display = "none";
    document.getElementById("peptide1").style.display = "none";
    document.getElementById("steppb1").disabled = false;
    document.getElementById("pibtn").disabled = false;
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "pK<sub>a1</sub>";
    document.getElementById("pk2").innerHTML = "pK<sub>a3</sub>";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";
  }

  else {
    $('#alertModal').modal('show');
    $('.modal-body').html('Please select a peptide or amino acid sequence from the select menu.');
    document.getElementById("steppb1").disabled = true;
    document.getElementById("pibtn").disabled = true;
    document.getElementById("netchargetable").style.display = "none";
    document.getElementById("peptide5").style.display = "none";
    document.getElementById("peptide4").style.display = "none";
    document.getElementById("peptide3").style.display = "none";
    document.getElementById("peptide2").style.display = "none";
    document.getElementById("peptide1").style.display = "none";
    document.getElementById("inputpib1").value = "";
    document.getElementById("inputpib2").value = "";
    document.getElementById("inputpib1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("inputpib2").style.border = "1px solid #D8D8D8";
    document.getElementById("pk1").innerHTML = "";
    document.getElementById("pk2").innerHTML = "";
    document.getElementById("anspi").innerHTML = "";
    document.getElementById("netcharge1").value = "";
    document.getElementById("netcharge2").value = "";
    document.getElementById("netcharge3").value = "";
    document.getElementById("netcharge4").value = "";
    document.getElementById("netcharge5").value = "";
    document.getElementById("netcharge1").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge2").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge3").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge4").style.border = "1px solid #D8D8D8 ";
    document.getElementById("netcharge5").style.border = "1px solid #D8D8D8 ";
  }
  /* var peptideSequence = document.getElementById("Textarea2").value;
 
   if (peptideSequence == "") {
     $('#alertModal').modal('show');
     $('.modal-body').text('Input box cannot be empty');
   }
 
   else if ((peptideSequence.length < 5) || (peptideSequence.length > 15)) {
     $('#alertModal').modal('show');
     $('.modal-body').text('Please enter 5-15 peptides');
 
 
   }
   else if (/^[0-9]+$/i.test(peptideSequence)) {
 
     $('#alertModal').modal('show');
     $('.modal-body').text('Invalid sequence. Numeric value is not allowed.');
   }
   else {
     document.getElementById("Textarea2").readOnly = true;
     document.getElementById("pseqbtn").disabled = true;
     document.getElementById("pibtn").disabled = false;
 
   }*/

}

/****************************************  Net charge *************************************** */

function checkb1() {

  var usrinpnc1 = document.getElementById("netcharge1").value;
  var usrinpnc2 = document.getElementById("netcharge2").value;
  var usrinpnc3 = document.getElementById("netcharge3").value;
  var usrinpnc4 = document.getElementById("netcharge4").value;
  var usrinpnc5 = document.getElementById("netcharge5").value;




  if (selectpeptide.options[selectpeptide.selectedIndex].value == 5) {
    if (usrinpnc1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("netcharge1").style.border = "2px solid blue";
    }
    else if (usrinpnc1 == "+1") {
      document.getElementById("netcharge1").value = "+1";
      document.getElementById("netcharge1").style.border = "2px solid green";

    }

    else {
      document.getElementById("netcharge1").style.border = "2px solid red";
      document.getElementById("showsteppb1").disabled = false;
    }

    if (usrinpnc2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("netcharge2").style.border = "2px solid blue";
    }
    else if (usrinpnc2 == "0") {
      document.getElementById("netcharge2").value = "0";
      document.getElementById("netcharge2").style.border = "2px solid green";
    }

    else {

      document.getElementById("netcharge2").style.border = "2px solid red";
      document.getElementById("showsteppb1").disabled = false;
    }


    if (usrinpnc3 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("netcharge3").style.border = "2px solid blue";
    }
    else if (usrinpnc3 == "-1") {
      document.getElementById("netcharge3").value = "-1";
      document.getElementById("netcharge3").style.border = "2px solid green";
    }

    else {

      document.getElementById("netcharge3").style.border = "2px solid red";
      document.getElementById("showsteppb1").disabled = false;
    }


    if (usrinpnc4 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("netcharge4").style.border = "2px solid blue";
    }
    else if (usrinpnc4 == "-2") {
      document.getElementById("netcharge4").value = "-2";
      document.getElementById("netcharge4").style.border = "2px solid green";
    }

    else {

      document.getElementById("netcharge4").style.border = "2px solid red";
      document.getElementById("showsteppb1").disabled = false;
    }

    if (usrinpnc5 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("netcharge5").style.border = "2px solid blue";
    }
    else if (usrinpnc5 == "-3") {
      document.getElementById("netcharge5").value = "-3";
      document.getElementById("netcharge5").style.border = "2px solid green";
    }

    else {

      document.getElementById("netcharge5").style.border = "2px solid red";
      document.getElementById("showsteppb1").disabled = false;
    }
  }

}

function showansb1() {
  document.getElementById("netcharge1").value = "+1";
  document.getElementById("netcharge2").value = "0";
  document.getElementById("netcharge3").value = "-1";
  document.getElementById("netcharge4").value = "-2";
  document.getElementById("netcharge5").value = "-3";


  document.getElementById("netcharge1").style.border = "2px solid green";
  document.getElementById("netcharge2").style.border = "2px solid green";
  document.getElementById("netcharge3").style.border = "2px solid green";
  document.getElementById("netcharge4").style.border = "2px solid green";
  document.getElementById("netcharge5").style.border = "2px solid green";

}

/****************************************  pI *************************************** */
function checpibtn() {

  var usrinppi1 = document.getElementById("inputpib1").value;
  var usrinppi2 = document.getElementById("inputpib2").value;

  if (selectpeptide.options[selectpeptide.selectedIndex].value == 1) {
    if (usrinppi1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib1").style.border = "2px solid blue";
    }
    else if ((usrinppi1 == "9.04")) {
      document.getElementById("inputpib1").value = usrinppi1;
      document.getElementById("inputpib1").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib1").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }
    if (usrinppi2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib2").style.border = "2px solid blue";
    }
    else if ((usrinppi2 == "12.48")) {
      document.getElementById("inputpib2").value = usrinppi2;
      document.getElementById("inputpib2").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib2").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }

    if (((usrinppi1 == "9.04") && (usrinppi2 == "12.48"))) {
      document.getElementById("anspi").innerHTML = "10.76";
    }


    else {
      document.getElementById("anspi").innerHTML = "";
    }



  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 2) {

    if (usrinppi1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib1").style.border = "2px solid blue";
    }
    else if ((usrinppi1 == "1.88")) {
      document.getElementById("inputpib1").value = usrinppi1;
      document.getElementById("inputpib1").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib1").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }
    if (usrinppi2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib2").style.border = "2px solid blue";
    }
    else if ((usrinppi2 == "3.65")) {
      document.getElementById("inputpib2").value = usrinppi2;
      document.getElementById("inputpib2").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib2").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }

    if (((usrinppi1 == "1.88") && (usrinppi2 == "3.65"))) {
      document.getElementById("anspi").innerHTML = "2.77";
    }
    else {
      document.getElementById("anspi").innerHTML = "";
    }



  }

  if (selectpeptide.options[selectpeptide.selectedIndex].value == 3) {
    if (usrinppi1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib1").style.border = "2px solid blue";
    }
    else if ((usrinppi1 == "2.34")) {
      document.getElementById("inputpib1").value = usrinppi1;
      document.getElementById("inputpib1").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib1").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }
    if (usrinppi2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib2").style.border = "2px solid blue";
    }
    else if ((usrinppi2 == "9.60")) {
      document.getElementById("inputpib2").value = usrinppi2;
      document.getElementById("inputpib2").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib2").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }

    if (((usrinppi1 == "2.34") && (usrinppi2 == "9.60"))) {
      document.getElementById("anspi").innerHTML = "5.97";
    }
    else {
      document.getElementById("anspi").innerHTML = "";
    }

  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 4) {

    if (usrinppi1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib1").style.border = "2px solid blue";
    }
    else if ((usrinppi1 == "1.83")) {
      document.getElementById("inputpib1").value = usrinppi1;
      document.getElementById("inputpib1").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib1").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }
    if (usrinppi2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib2").style.border = "2px solid blue";
    }
    else if ((usrinppi2 == "9.13")) {
      document.getElementById("inputpib2").value = usrinppi2;
      document.getElementById("inputpib2").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib2").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }

    if (((usrinppi1 == "1.83") && (usrinppi2 == "9.13"))) {
      document.getElementById("anspi").innerHTML = "5.48";
    }
    else {
      document.getElementById("anspi").innerHTML = "";
    }

  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 5) {

    if (usrinppi1 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib1").style.border = "2px solid blue";
    }
    else if ((usrinppi1 == "2.19")) {
      document.getElementById("inputpib1").value = usrinppi1;
      document.getElementById("inputpib1").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib1").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }
    if (usrinppi2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').html('Input box cannot be empty');
      document.getElementById("inputpib2").style.border = "2px solid blue";
    }
    else if ((usrinppi2 == "3.65")) {
      document.getElementById("inputpib2").value = usrinppi2;
      document.getElementById("inputpib2").style.border = "2px solid green";
    }

    else {
      document.getElementById("inputpib2").style.border = "2px solid red";
      document.getElementById("pibtnshow").disabled = false;
    }

    if (((usrinppi1 == "2.19") && (usrinppi2 == "3.65"))) {
      document.getElementById("anspi").innerHTML = "2.92";
    }
    else {
      document.getElementById("anspi").innerHTML = "";
    }
  }

}

function showpibtn() {
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 1) {
    document.getElementById("inputpib1").value = " 9.04";
    document.getElementById("inputpib2").value = "12.48";
    document.getElementById("anspi").innerHTML = "10.76";
    document.getElementById("inputpib1").style.border = "2px solid green";
    document.getElementById("inputpib2").style.border = "2px solid green";
  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 2) {
    document.getElementById("inputpib1").value = "1.88";
    document.getElementById("inputpib2").value = "3.65";
    document.getElementById("anspi").innerHTML = "2.77";
    document.getElementById("inputpib1").style.border = "2px solid green";
    document.getElementById("inputpib2").style.border = "2px solid green";
  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 3) {
    document.getElementById("inputpib1").value = " 2.34";
    document.getElementById("inputpib2").value = "9.60";
    document.getElementById("anspi").innerHTML = "5.97";
    document.getElementById("inputpib1").style.border = "2px solid green";
    document.getElementById("inputpib2").style.border = "2px solid green";
  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 4) {
    document.getElementById("inputpib1").value = " 1.83";
    document.getElementById("inputpib2").value = "9.13";
    document.getElementById("anspi").innerHTML = "5.48";
    document.getElementById("inputpib1").style.border = "2px solid green";
    document.getElementById("inputpib2").style.border = "2px solid green";
  }
  if (selectpeptide.options[selectpeptide.selectedIndex].value == 5) {
    document.getElementById("inputpib1").value = " 2.19";
    document.getElementById("inputpib2").value = "3.65";
    document.getElementById("anspi").innerHTML = "2.92";
    document.getElementById("inputpib1").style.border = "2px solid green";
    document.getElementById("inputpib2").style.border = "2px solid green";
  }
}










/********************************************   DNA sequence  **********************************************************/

function dnaseqbtn() {
  var dnaSequence = document.getElementById("inputdna1").value;
  var userinputdna2 = document.getElementById("inputdna2").value.toUpperCase();

  if (dnaSequence == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('Input box cannot be empty');
  }

  else if ((dnaSequence.length < 5) || (dnaSequence.length > 15)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter 5-15 DNA bases.');


  }
  else if (!/^[ATGC]+$/i.test(dnaSequence)) {

    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid DNA sequence. Please enter only A, T, G, and C letters.');
  }
  else {


    function generateComplementaryStrand(dnaSequence) {
      var complementaryStrand = "";

      for (var i = 0; i < dnaSequence.length; i++) {
        switch (dnaSequence[i].toUpperCase()) {
          case 'A':
            complementaryStrand += 'T';
            break;
          case 'T':
            complementaryStrand += 'A';
            break;
          case 'G':
            complementaryStrand += 'C';
            break;
          case 'C':
            complementaryStrand += 'G';
            break;
          default:
            // Handle other characters if needed
            complementaryStrand += dnaSequence[i];
        }
      }

      return complementaryStrand;
    }


    var complementarySequence = generateComplementaryStrand(dnaSequence);

    //console.log(complementarySequence);

    if (userinputdna2 == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('Input box of DNA complementary cannot be empty');
    }

    else if (userinputdna2 == complementarySequence) {
      document.getElementById("inputdna1").readOnly = true;
      document.getElementById("inputdna2").readOnly = true;
      document.getElementById("dnaseqbtn").disabled = true;


    }
    else {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect complementary DNA sequence');
      document.getElementById("inputdna1").readOnly = true;
      document.getElementById("inputdna2").readOnly = false;
      document.getElementById("dnaseqbtn").disabled = false;
    }

    document.getElementById("mwdnabtn").disabled = false;
    document.getElementById("actdnabtn").disabled = false;
    document.getElementById("tmdnabtn").disabled = false;
  }
}



/****************************************** Approx molecular weight dna ********************************** */
var mwdna, resultmwdna;
function apdnabtn() {
  var dnaSequence = document.getElementById("inputdna1").value;
  mwdna = dnaSequence.length;
  console.log(`Molecular Weight: ${mwdna} `);
  var userinputmwdna = document.getElementById("inputmwdna").value;

  if (userinputmwdna == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('The input box for  number of bases cannot be empty');
    document.getElementById("inputmwdna").style.border = "2px solid blue";
  }
  else if (userinputmwdna == mwdna) {
    /*$('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');*/
    resultmwdna = mwdna * 660;
    document.getElementById("inputmwdnar").value = resultmwdna;
    document.getElementById("inputmwdna").style.border = "2px solid green";
  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect number of bases.');
    document.getElementById("dnaseqbtn").disabled = false;
    document.getElementById("dnamwbtnshow").disabled = false;
    document.getElementById("inputmwdna").value = "";
    document.getElementById("inputmwdna").style.border = "2px solid red";
  }
}


function showmwdnabtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('<p> The total number of bases of the above sequence is: ' + mwdna + '</p>');
}


/****************************************** Actual mw dna ********************************** */
var userinptA, userinptT, userinptdC, userinptG, countA, countT, countdC, countG;
function actdnabtn() {
  countA = 0;
  countT = 0;
  countdC = 0;
  countG = 0;
  var dnaSequence1 = document.getElementById("inputdna1").value;
  var dnaSequence2 = document.getElementById("inputdna2").value;
  var dnaSequence12 = dnaSequence1 + dnaSequence2;
  countatcg(dnaSequence12);
  function countatcg(dnaSequence12) {
    // Initialize counters



    for (let i = 0; i < dnaSequence12.length; i++) {
      let atcg = dnaSequence12[i].toUpperCase(); // Convert to uppercase for case-insensitivity

      // Count each nucleotide
      switch (atcg) {
        case 'A':
          countA++;
          break;
        case 'T':
          countT++;
          break;
        case 'C':
          countdC++;
          break;
        case 'G':
          countG++;
          break;


      }
    }



    userinptA = document.getElementById("inputmw2dnaA").value;
    userinptT = document.getElementById("inputmw2dnaT").value;
    userinptdC = document.getElementById("inputmw2dnaC").value;
    userinptG = document.getElementById("inputmw2dnaG").value;

    console.log(countA);
    console.log(countT);
    console.log(countdC);
    console.log(countG);

    var mwactdna = ((countA * 313.2) + (countT * 304.2) + (countdC * 289.2) + (countG * 329.2)).toFixed(2);


    if (
      (userinptA == countA) ||
      (userinptT == countT) ||
      (userinptdC == countdC) ||
      (userinptG == countG)
    ) {
      /*$('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');*/
      document.getElementById("inputmw2dnaMWtot").value = mwactdna;
      document.getElementById("inputtmdnaA").value = countA;
      document.getElementById("inputtmdnaT").value = countT;
      document.getElementById("inputtmdnaC").value = countdC;
      document.getElementById("inputtmdnaG").value = countG;
      document.getElementById("inputtmdnaA").readOnly = true;
      document.getElementById("inputtmdnaT").readOnly = true;
      document.getElementById("inputtmdnaC").readOnly = true;
      document.getElementById("inputtmdnaG").readOnly = true;
      document.getElementById("inputmw2dnaA").style.border = "2px solid green";
      document.getElementById("inputmw2dnaT").style.border = "2px solid green";
      document.getElementById("inputmw2dnaC").style.border = "2px solid green";
      document.getElementById("inputmw2dnaG").style.border = "2px solid green";



    }
    /* else {
 
       $('#alertModal').modal('show');
       $('.modal-body').text('To calculate the molar extinction coefficient, the peptide sequence must contain Tryptophan, Tyrosine, Cysteine');
     }*/

    // else {

    if (userinptA != countA) {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of A is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaA").style.border = "2px solid red";
    }
    if (userinptT != countT) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of T is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaT").style.border = "2px solid red";

    }
    if (userinptdC != countdC) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of C is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaC").style.border = "2px solid red";

    }

    if (userinptG != countG) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of G is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaG").style.border = "2px solid red";

    }

    if (userinptA == "") {

      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of A cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaA").style.border = "2px solid blue";
    }
    if (userinptT == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of T cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaT").style.border = "2px solid blue";

    }
    if (userinptdC == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of C cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaC").style.border = "2px solid blue";

    }

    if (userinptG == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of G cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
      document.getElementById("inputmw2dnaG").style.border = "2px solid blue";

    }







  }


}


function showmw1dnabtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('Number of A in the above sequence is : ' + countA + '<br>Number of T in the above sequence is: ' + countT + ' <br>Number of C in the above sequence is :  ' + countdC + ' <br>Number of G in the above sequence is :  ' + countG);
}



/****************************************** Tm dna ********************************** */

var totalBases, molarConcentrationA, molarConcentrationT, molarConcentrationG, molarConcentrationC, Tm, dataPointg = [];
var totalcountA, totalcountT, totalcountG, totalcountC;
function tmdnabtn() {

  var dnaSequence1 = document.getElementById("inputdna1").value;
  var dnaSequence2 = document.getElementById("inputdna2").value;
  var dnaSequence12 = dnaSequence1 + dnaSequence2;
  // alert(dnaSequence12);




  countNucleotides(dnaSequence12);

  function countNucleotides(dnaSequence12) {
    // Initialize counters
    let countA = 0;
    let countT = 0;
    let countG = 0;
    let countCtm = 0;

    // Iterate through the DNA sequence
    for (let i = 0; i < dnaSequence12.length; i++) {
      let nucleotide = dnaSequence12[i].toUpperCase(); // Convert to uppercase for case-insensitivity

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
          countCtm++;
          break;
        // You can add handling for other characters if needed
      }
    }

    // Optional: Calculate molar concentrations
    totalBases = (dnaSequence12.length);
    molarConcentrationA = (countA / totalBases);
    molarConcentrationT = (countT / totalBases);
    molarConcentrationG = (countG / totalBases);
    molarConcentrationC = (countCtm / totalBases);

    totalcountA = countA;
    totalcountT = countT;
    totalcountG = countG;
    totalcountC = countCtm;

    //displaying the result
    // document.getElementById("atgc").innerHTML = " <i>Count of A:</i> " + countA + "<br><br> <i>Count of T:</i> " + countT + "<br><br> <i>Count of G:</i> " + countG +
    //   "<br><br> <i>Count of C:</i> " + countC;
    //+ "<br><br><br><i> Molar Concentration of A:</i>  " + molarConcentrationA + "<br><br> <i>Molar Concentration of T:</i>  " + molarConcentrationT +
    //"<br><br> <i>Molar Concentration of G:</i>  " + molarConcentrationG + "<br><br> <i>Molar Concentration of C:</i>  " + molarConcentrationC;

    //Calculate melting temperature
    Tm = (4 * (totalcountG + totalcountC) + 2 * (totalcountA + totalcountT));

    //document.getElementById("inputdnatm").value= Tm; 
    var userinputtm = document.getElementById("inputdnatm").value
    // document.getElementById("tm").innerHTML = "Melting temperature (T<sub>m</sub>): " + Tm + "&deg;C";

    if (userinputtm == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for melting temperature(Tm) cannot be empty');
      document.getElementById("inputdnatm").style.border = "2px solid blue";
    }
    else if ((userinputtm == Tm)) {
      /* $('#alertModal').modal('show');
       $('.modal-body').text('Correct answer');*/
      document.getElementById("tmdnaplotbtn").disabled = false;
      document.getElementById("inputdnatm").value = Tm;
      document.getElementById("inputdnatm").style.border = "2px solid green";
    }
    else {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect melting temperature.');
      document.getElementById("dnatmbtnshow").disabled = false;
      document.getElementById("inputdnatm").value = "";
      document.getElementById("inputdnatm").style.border = "2px solid red";

    }



    dataPointg.push({ x: parseFloat(Tm), y: parseFloat((molarConcentrationG + molarConcentrationC) * 100) })
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
      countCtm,
      molarConcentrationA,
      molarConcentrationT,
      molarConcentrationG,
      molarConcentrationC,
    };
  }






}

function showtmdnabtn() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Melting temperature (Tm) of the above DNA sequence is: ' + Tm);
}


function cancelmsg() {

  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");

}


function plottm() {

  //document.getElementById("carddnapartc").style.display = "block";
  document.getElementById("carddnapartc3").style.display = "block";
  window.scrollBy(0, 700);
  const chart = new CanvasJS.Chart("chartContainertm", {
    //animationEnabled: true,
    title: {
      text: "Melting Temperature Vs Molar Concentraction of G and C ",
      fontSize: 30
    },
    axisY: {
      title: "Molar Concentraction of G and C",
      gridThickness: 0,
      minimum: 0,
      maximum: 50,
      interval: 5,
        /* stripLines: [{
         value: (molarConcentrationG + molarConcentrationC) * 100,
         lineDashType: "dash", // set to "dash" for dashed line
         color: "blue",
         thickness: 2,
 
       }]  */
   },
    axisX: {
      title: "Melting Temperature",
      minimum: 0,
      maximum: 95,
      interval: 10,
      /* stripLines: [{
        value: Tm,
        lineDashType: "dash", // set to "dash" for dashed line
        color: "blue",
        thickness: 2,


      } 

      ]*/

    },

    data: [{
      type: "line",
      indexLabel: "Tm",
      indexLabelFontColor: "red",

      dataPoints: dataPointg,

    },


    {
      type: "line",
      lineDashType: "dash", 
      color:"purple",
      dataPoints: [
        {
          x:0,
          y:parseFloat((molarConcentrationG + molarConcentrationC) * 100) , markerType: "none"
        },
        {
          x: parseFloat(Tm),
          y: parseFloat((molarConcentrationG + molarConcentrationC) * 100),
          indexLabel: "Tm",
          indexLabelFontColor: "green",
          indexLabelPlacement: "inside",
          indexLabelTextAlign: "right"
        },
        {
          x:parseFloat(Tm),
          y:0, markerType: "none"
        }
        
    ], //, indexLabel: "Tm", indexLabelFontColor: "green", indexLabelPlacement: "outside"  

    },
    ],

  });

  chart.render();
  /* document.getElementById("exportChart").addEventListener("click",function(){
      chart.exportChart({format: "jpg"});
    }); */
}

/*window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Tm Vs Percentage of single stranded DNA",
      fontSize: 32
    },
    axisX: {
      title: "Tm",
      minimum: 0,
      maximum: 95,


    },
    axisY: {
      title: "Percentage of single stranded DNA",
      minimum: 0,
      maximum: 100,
      gridThickness: 0

    },
    data: [{
      type: "line",
      dataPoints: [

      ]

    }]

  });

  chart.render();
}*/


/*function plotnetcharge() {

  document.getElementById("plotnetchargedata").style.display = "block";
  var dataPoints = [];

  // Read values from input fields
  var pHValues = ["1", "3", "4", "5", "10"];
  var netChargeValues = [];
  for (var i = 1; i <= pHValues.length; i++) {
    var netCharge = parseFloat(document.getElementById("netcharge" + i).value);
    netChargeValues.push(netCharge);
  }

  // Create data points
  for (var i = 0; i < pHValues.length; i++) {
    dataPoints.push({ x: parseFloat(pHValues[i]), y: netChargeValues[i] });
  }

  // Create CanvasJS chart
  var chart = new CanvasJS.Chart("chartContainerpi", {
    title: {
      text: "Net Charge vs pH"
    },
    axisX: {
      title: "pH",
      minimum: 0,
      maximum: 14,
      interval: 1,
      
    },
    axisY: {
      title: "Net Charge",
      minimum: -7,
      maximum: 7,
      interval: 1,
      gridThickness: 0.3,
    },
    data: [{
      type: "spline",
      dataPoints: dataPoints
    }]
  });

  // Render chart
  chart.render();


}*/