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
  if (/^[0-9]+$/i.test(aminoacidSequence)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid Amino acid sequence. Please enter only 1-letter code of amino acid.');
  }
  if(aminoacidSequence.length >20){
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter 15-20 amino acids.');
  }

  else {
    document.getElementById("Textarea1").readOnly = true;
    document.getElementById("aseqbtn").disabled = true;
  }
}


/****************************************** Approx molecular weight amino acid ********************************** */

var aminoacidSequence, mw, userinptmw;
function checkmwbtn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();
  /* if (/^[0-9]+$/i.test(aminoacidSequence)) {
     $('#alertModal').modal('show');
     $('.modal-body').text('Invalid Amino acid sequence. Please enter only 1-letter code of amino acid.');
   }
 
   else {*/
  mw = aminoacidSequence.length;
  console.log(`Molecular Weight: ${mw} `);
  userinptmw = document.getElementById("inputmwa").value;

  if (userinptmw == mw) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');
    var resultmw = mw * 110;
    document.getElementById("inputmwar").value = resultmw;

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect answer. Please number of amino acid.');
    document.getElementById("mwbtnshow").disabled = false;
    document.getElementById("inputmwar").value = "";
  }





  //}
}

/********************************************   Amino acid sequence -actual molecular weight of protein **********************************************************/

var mw1, userinptmw1;
function checkmw1btn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();
  /*if (/^[0-9]+$/i.test(aminoacidSequence)) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid Amino acid sequence. Please enter only 1-letter code of amino acid.');
  }

  else {*/

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
    'I': 131.17,
    'L': 131.17,
    'K': 146.19,
    'M': 149.21,
    'F': 165.19,
    'P': 115.13,
    'S': 105.09,
    'T': 119.12,
    'W': 204.23,
    'Y': 181.19,
    'V': 117.15
  };
  const totalWeight = aminoacidSequence.split('').reduce((sum, aminoAcid) => {
    return sum + (molecularWeights[aminoAcid] || 0);
  }, 0);

  mw1 = totalWeight.toFixed(2);
  console.log(`Molecular Weight: ${mw1} `);
  userinptmw1 = document.getElementById("inputmwa1").value;

  if (userinptmw1 == mw1) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect answer. Please calculate the molecular weight of amino acid. Refer to the table above (click on the button Molecular weight table).');
    document.getElementById("mw1btnshow").disabled = false;
  }
  // }

}

function showmw1btn() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Molecular weight of the above sequence is: ' + mw1);
}

/************************************************************************ Molar extinction coefficient of protein    *******************************************************************************************/
var userinptW, userinptY, userinptC;


function checkmabsbtn() {
  let countW = 0;
  let countY = 0;
  let countC = 0;
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();
  /* if (/^[0-9]+$/i.test(aminoacidSequence)) {
     $('#alertModal').modal('show');
     $('.modal-body').text('Invalid Amino acid sequence. Please enter only 1-letter code of amino acid.');
   }
 
   else {*/
  // document.getElementById("sequence").value=aminoacidSequence;
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
   
    /*  if ((userinptW === null || userinptW === '') &&
        (userinptY === null || userinptY === '') &&
        (userinptC === null || userinptC === '')) {
        $('#alertModal').modal('show');
        $('.modal-body').text('Enter number of W, Y, C');
      }*/
    if ((userinptW == countW) && (userinptY == countY) && (userinptC == countC)) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');
      
      document.getElementById("inputmabst").value = mwact;
    }

    // else {

    if (userinptW != countW) {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect answer. Please enter number of W correctly');
      document.getElementById("inputmabst").value = " ";
    }
    if (userinptY != countY) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect answer. Please enter number of Y correctly');
      document.getElementById("inputmabst").value = " ";

    }
    if (userinptC != countC) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect answer. Please enter number of C correctly');
      document.getElementById("inputmabst").value = " ";

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

  // }
}


function showmabsbtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('<p>Number of W in the above sequence is : ' + countW + ' </p> <p>Number of Y in the above sequence is: ' + countY + ' </p><p>Number of C in the above sequence is :  ' + countC + ' </p>');

}


/********************************************   DNA sequence  **********************************************************/

function dnaseqbtn() {
  var dnaSequence = document.getElementById("Textarea2").value.toUpperCase();

  if (dnaSequence == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter only 1-letter code of amino acid.');
  }

  if(dnaSequence.length >15){
    $('#alertModal').modal('show');
    $('.modal-body').text('Please enter 10-15 DNA bases.');
  }
  if (!/^[ATGC]+$/i.test(dnaSequence)) {

    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid DNA sequence. Please enter only A, T, G, and C letters.');
  }
  else {
    document.getElementById("Textarea2").readOnly = true;
    document.getElementById("dnaseqbtn").disabled = true;
  }
}



/****************************************** Approx molecular weight dna ********************************** */

function apdnabtn(){
  var dnaSequence = document.getElementById("Textarea2").value;
  var mwdna = dnaSequence.length;
  console.log(`Molecular Weight: ${mwdna} `);
  var userinputmwdna = document.getElementById("inputmwdna").value;

  if (userinputmwdna == mwdna) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');
    var resultmwdna = mwdna * 330;
    document.getElementById("inputmwdnar").value = resultmwdna;

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect number of bases.');
    //document.getElementById("mwbtnshow").disabled = false;
    //document.getElementById("inputmwar").value = "";
  }
}

/****************************************** Tm dna ********************************** */

var totalBases, molarConcentrationA, molarConcentrationT, molarConcentrationG, molarConcentrationC, Tm, dataPointg = [];
var totalcountA, totalcountT, totalcountG, totalcountC;
function tmdnabtn() {
  document.getElementById("card31").style.display = "block";
  var dnaSequence = document.getElementById("Textarea2").value;

  /*if (!/^[ATGC]+$/i.test(dnaSequence)) {

    $('#alertModal').modal('show');
    $('.modal-body').text('Invalid DNA sequence. Please enter only A, T, G, and C letters.');
  }

  else {*/


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
      /*totalBases = (dnaSequence.length);
      molarConcentrationA = (countA / totalBases);
      molarConcentrationT = (countT / totalBases);
      molarConcentrationG = (countG / totalBases);
      molarConcentrationC = (countC / totalBases);*/

      totalcountA = countA;
      totalcountT = countT;
      totalcountG = countG;
      totalcountC = countC;

      //displaying the result
      document.getElementById("atgc").innerHTML = " <i>Count of A:</i> " + countA + "<br><br> <i>Count of T:</i> " + countT + "<br><br> <i>Count of G:</i> " + countG +
        "<br><br> <i>Count of C:</i> " + countC;
      //+ "<br><br><br><i> Molar Concentration of A:</i>  " + molarConcentrationA + "<br><br> <i>Molar Concentration of T:</i>  " + molarConcentrationT +
      //"<br><br> <i>Molar Concentration of G:</i>  " + molarConcentrationG + "<br><br> <i>Molar Concentration of C:</i>  " + molarConcentrationC;

      //Calculate melting temperature
      Tm = (4 * (totalcountG + totalcountC) + 2 * (totalcountA + totalcountT));

      document.getElementById("inputdnatm").value= Tm; 
      document.getElementById("tm").innerHTML = "Melting temperature (T<sub>m</sub>): " + Tm + "&deg;C";

      dataPointg.push({ x: parseFloat(Tm), y: parseFloat(molarConcentrationG + molarConcentrationC) })
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





 // }
}


function cancelmsg() {

  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
  document.getElementById("Textarea2").value = "";
}


function dnatmgraph() {
  document.getElementById("card32").style.display = "block";
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Tm and GC Concentration "
    },
    axisY: {
      title: "GC concentration",

      gridThickness: 0

    },
    axisX: {
      title: "Tm",
      minimum: 0

    },

    data: [{
      type: "line",
      dataPoints: dataPointg,
    },


    {
      type: "line",
      color: "purple",

      dataPoints: [{ x: 0, y: 0 },
      { x: parseFloat(Tm), y: parseFloat(molarConcentrationG + molarConcentrationC), indexLabel: "Tm", indexLabelFontColor: "green", indexLabelPlacement: "outside" }], //,indexLabel: "Tm", indexLabelFontColor: "green", indexLabelPlacement: "outside", indexLabelWrap: true, indexLabelBackgroundColor: "black" 

    },



    ],
    /* annotations:  [
      {
        type: "rectangle",
        x: parseFloat(Tm)-50, // Adjust the position as needed  
        y: parseFloat(molarConcentrationG + molarConcentrationC)-50 ,
        width: 40, // Adjust the width as needed
        height: 20, // Adjust the height as needed
        
      }
    ] */
  });

  chart.render();
  /* document.getElementById("exportChart").addEventListener("click",function(){
      chart.exportChart({format: "jpg"});
    }); */
}