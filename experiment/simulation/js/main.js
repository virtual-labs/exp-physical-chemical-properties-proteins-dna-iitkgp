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
  }
  else if (userinptmw == mw) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');
    var resultmw = mw * 110;
    document.getElementById("inputmwar").value = resultmw;

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect number of amino acid is entered.');
    document.getElementById("mwbtnshow").disabled = false;
    document.getElementById("inputmwar").value = "";
    document.getElementById("inputmwa").value = "";
  }






}



function showmwbtn() {
  $('#alertModal').modal('show');
  $('.modal-body').text('The total number of amino acid in the above sequence is: ' + mw);
}
/********************************************   Amino acid sequence -actual molecular weight of protein **********************************************************/

var mw1, userinptmw1;
function checkmw1btn() {
  aminoacidSequence = document.getElementById("Textarea1").value.toUpperCase();

  var amacidlength = aminoacidSequence.length;

  const molecularWeights = {
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
  };
  const totalWeight = aminoacidSequence.split('').reduce((sum, aminoAcid) => {
    return sum + (molecularWeights[aminoAcid] || 0);
  }, 0);
  var rwater = ((amacidlength - 1) * 18.01528);

  mw1 = (totalWeight - rwater).toFixed(2);


  console.log(`Molecular Weight: ${mw1} `);
  userinptmw1 = document.getElementById("inputmwa1").value;

  if (userinptmw1 == "") {
    $('#alertModal').modal('show');
    $('.modal-body').text('Input box cannot be empty');
  }
  else if (parseFloat(userinptmw1).toFixed(2) == mw1) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect answer. Please calculate the molecular weight of amino acid. Refer to the table above (click on the button Molecular weight table).');
    document.getElementById("mw1btnshow").disabled = false;
    document.getElementById("inputmwa1").value = "";
  }


}

function showmw1btn() {
  $('#alertModal').modal('show');
  $('.modal-body').text('Actual molecular weight of the above sequence is: ' + mw1);
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
      $('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');
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
    }
    if (userinptY != countY) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of Y is entered');
      document.getElementById("inputmabst").value = " ";

    }
    if (userinptC != countC) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of C is entered');
      document.getElementById("inputmabst").value = " ";

    }

    if (userinptW == "") {

      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for  number of W cannot be empty');
      document.getElementById("inputmabst").value = " ";
    }
    if (userinptY == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for number of Y cannot be empty');
      document.getElementById("inputmabst").value = " ";

    }
    if (userinptC == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('Input box for number of C cannot be empty');
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


}


function showmabsbtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('<p>Number of W in the above sequence is : ' + countW + ' </p> <p>Number of Y in the above sequence is: ' + countY + ' </p><p>Number of C in the above sequence is :  ' + countC + ' </p>');

}


/************************************************************************ Peptide ****************************************************************************/
function pseqbtn() {
  var peptideSequence = document.getElementById("Textarea2").value;

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
      $('.modal-body').text('Input box for compliment sequence of the above sequence cannot be empty');
    }

    else if (userinputdna2 == complementarySequence) {
      document.getElementById("inputdna1").readOnly = true;
      document.getElementById("inputdna2").readOnly = true;
      document.getElementById("dnaseqbtn").disabled = true;


    }
    else {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect compliment sequence of the above sequence');
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
  }
  else if (userinputmwdna == mwdna) {
    $('#alertModal').modal('show');
    $('.modal-body').text('Correct answer');
    resultmwdna = mwdna * 660;
    document.getElementById("inputmwdnar").value = resultmwdna;

  }
  else {
    $('#alertModal').modal('show');
    $('.modal-body').text('Incorrect number of bases.');
    document.getElementById("dnaseqbtn").disabled = false;
    document.getElementById("dnamwbtnshow").disabled = false;
    document.getElementById("inputmwdna").value = "";
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
      (userinptA == countA) &&
      (userinptT == countT) &&
      (userinptdC == countdC) &&
      (userinptG == countG)
    ) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');
      document.getElementById("inputmw2dnaMWtot").value = mwactdna;
      document.getElementById("inputtmdnaA").value = countA;
      document.getElementById("inputtmdnaT").value = countT;
      document.getElementById("inputtmdnaC").value = countdC;
      document.getElementById("inputtmdnaG").value = countG;
      document.getElementById("inputtmdnaA").readOnly = true;
      document.getElementById("inputtmdnaT").readOnly = true;
      document.getElementById("inputtmdnaC").readOnly = true;
      document.getElementById("inputtmdnaG").readOnly = true;



    }
    else {

      $('#alertModal').modal('show');
      $('.modal-body').text('To calculate the molar extinction coefficient, the peptide sequence must contain Tryptophan, Tyrosine, Cysteine');
    }

    // else {

    if (userinptA != countA) {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of A is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
    }
    if (userinptT != countT) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of T is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }
    if (userinptdC != countdC) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of C is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }

    if (userinptG != countG) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect number of G is entered');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }

    if (userinptA == "") {

      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of A cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;
    }
    if (userinptT == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of T cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }
    if (userinptdC == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of C cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }

    if (userinptG == "") {
      $('#alertModal').modal('show');
      $('.modal-body').text('The input box for number of G cannot be empty');
      document.getElementById("inputmw2dnaMWtot").value = " ";
      document.getElementById("dnamw1btnshow").disabled = false;

    }







  }


}


function showmw1dnabtn() {
  $('#alertModal').modal('show');
  $('.modal-body').html('<p>Number of A in the above sequence is : ' + countA + ' </p> <p>Number of T in the above sequence is: ' + countT + ' </p><p>Number of C in the above sequence is :  ' + countdC + ' </p> <p>Number of G in the above sequence is :  ' + countG + '</p>');
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
    }
    else if ((userinputtm == Tm)) {
      $('#alertModal').modal('show');
      $('.modal-body').text('Correct answer');
      document.getElementById("tmdnaplotbtn").disabled = false;
      document.getElementById("inputdnatm").value = Tm;
    }
    else {

      $('#alertModal').modal('show');
      $('.modal-body').text('Incorrect melting temperature.');
      document.getElementById("dnatmbtnshow").disabled = false;
      document.getElementById("inputdnatm").value = "";

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

  document.getElementById("card32").style.display = "block";
  window.scrollBy(0, 700);
  const chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Tm Vs Percentage of single stranded DNA "
    },
    axisY: {
      title: "Percentage of single stranded DNA",


      gridThickness: 0

    },
    axisX: {
      title: "Tm",
      minimum: 0,
      maximum: 95,
      interval: 10,


    },

    data: [{
      type: "line",
      dataPoints: dataPointg,
    },


    {
      type: "line",
      color: "purple",
      dataPoints: [{ x: 0, y: 0 },
      { x: parseFloat(Tm), y: parseFloat((molarConcentrationG + molarConcentrationC) * 100), indexLabel: "Tm", indexLabelFontColor: "green", indexLabelPlacement: "outside" }], //,indexLabel: "Tm", indexLabelFontColor: "green", indexLabelPlacement: "outside", indexLabelWrap: true, indexLabelBackgroundColor: "black" 

    },
    ],
    axisY2: {
      title: "Y2 Axis",
      stripLines: [{
        value: 40,
        lineDashType: "dash", // set to "dash" for dashed line
        color: "red"
      }]
    },
    axisX2: {
      title: "X2 Axis",
      stripLines: [{
        value: 56,
        lineDashType: "dash", // set to "dash" for dashed line
        color: "blue"
      }]
    }


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

/* window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Line Chart with Stroke Marks"
    },
    axisX: {
      title: "X Axis"
    },
    axisY: {
      title: "Y Axis"
    },
    data: [{
      type: "line",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 95 }
      ]
    }],
    axisY2: {
      title: "Y2 Axis",
      stripLines: [{
        value: 50,
        color: "red"
      }]
    },
    axisX2: {
      title: "X2 Axis",
      stripLines: [{
        value: 30,
        color: "blue"
      }]
    }
  });

  chart.render();
} */
