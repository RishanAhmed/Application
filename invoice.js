var Appsscript = "https://script.google.com/macros/s/AKfycbwF6ckQ1Q-coiP45ZCFgzY_Hw-A4bLTv_Td42QyZ5vqTn5W8C1ZamxwbeA9HJsqOR56VQ/";
var ap="https://script.google.com/macros/s/AKfycbwmFlYBrHsbaR2I4R-EIsKvhi0aTLhjAHPMwg5unk9CroeOiCGV1xEBn2LX_GrH-ucK/exec"
var CALCINDEX = 0
let OperatorIsNotClicked=Boolean();
let isthisgreaterthanone = Boolean()

var result = 0;
let IsPercentageCALCULATOR = false
let no1 ="";
let no2 = "";
let operator ="";
let numberindex = 1
var resultno1 = 0;
let from_btn = ""
var index = 0;
var clearone=0;

OperatorIsNotClicked = true;
isthisgreaterthanone = false


function GetPrint()
{
    /*For Print*/
    window.print();
}

function BtnAdd()
{
    /*Add Button*/
    var v = $("#TRow").clone().appendTo("#TBody") ;
    $(v).find("input").val('');
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}

function BtnDel(v)
{
    /*Delete Button*/
       $(v).parent().parent().remove(); 
       GetTotal();

        $("#TBody").find("tr").each(
        function(index)
        {
           $(this).find("th").first().html(index);
        }

       );
}

function Calc(v)
{
    /*Detail Calculation Each Row*/
    var index = $(v).parent().parent().index();
    
    var qty = document.getElementsByName("qty")[index].value;
    var rate = document.getElementsByName("Mrp")[index].value;

    var amt = qty * rate;
    document.getElementsByName("Amt")[index].value = amt;

    GetTotal();
}

function GetTotal()
{

    var sum=0;
    var amts =  document.getElementsByName("Amt");

    for (let index = 0; index < amts.length; index++)
    {
        var amt = amts[index].value;
        sum = +(sum) +  +(amt) ; 
    }

    document.getElementById("TotalAmt").value = sum;

}
 
$(document).ready(function () {
    FillDataList();
    FormValidation();
    customer();
    Inv()
});

function FillDataList()
{
        $.getJSON(ap+"?page=DropDown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $(".item_nm").append(Options);               //04
        });
}

function customer()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbyg0scZrIPtWIJk-CftfKRcgxnGfunyrVF4wyO4kGJirRNxE9TcFmp2Vaphe3gBQP9o/exec?page=dropdown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $(".cust").append(Options);               //04
        });
}
function itemdata(v)
{
  var index = $(v).parent().parent().index()
  
  var item = document.getElementsByName("item_nm")[index].value;
  var RealRs10 = 7.5;
  var RealRs20 = 12;
  var RealMilkShake = 24.50;
  var Bnatural = 84;
  var Itcmilkshake = 28;
  var realmango1ltr = 88.77;
  var realguava1ltr = 92.63;
  var kannandevanred = 253.50;
  var tataenvelope = 184.66;
  var mbsugar = 96;
  var tatasachet = 1.68;
  var Mayuri= 795;
  var BRURATE = 180;
  var boostrs5 = 4.60;
  var brusac2 = 1.80;
  var brusac5 = 4.45;
  var redlabel = 500;
  if(item == "BRU 180"){
    document.getElementsByName("rate")[index].value = BRURATE;
  }
  else if(item == "BOOST Rs 5"){
    document.getElementsByName("rate")[index].value = boostrs5;
  }
  else if(item == "HORLICKS Rs 5"){
    document.getElementsByName("rate")[index].value = boostrs5;
  }
  else if(item == "BRU Rs 2"){
    document.getElementsByName("rate")[index].value = brusac2;
  }
  else if(item == "BRU Rs 5"){
    document.getElementsByName("rate")[index].value = brusac5;
  }
  else if(item == "RED LABEL"){
    document.getElementsByName("rate")[index].value = redlabel;
  }
  else if(item == "Real Rs 10")
  {
    document.getElementsByName("rate")[index].value =  RealRs10;
  }
  else if(item == "Real Rs 20")
  {
    document.getElementsByName("rate")[index].value =  RealRs20;
  }
  else if(item == "Real Milkshake choclate" | item == "Real Milkshake Vanila" | item == "Real Milkshake strawberry" | item == "Real Milkshake mango"){
    document.getElementsByName("rate")[index].value = RealMilkShake;
  }
  else if(item == "B natural 1ltr Cranberry" | item == "B natural 1ltr Mango" | item == "B natural 1ltr Guava" | item == "B natural 1ltr apple"){
    document.getElementsByName("rate")[index].value = Bnatural;
  }
  else if(item == "Itc shake choclate" | item == "Itc shake vanila" | item == "Itc shake strawberry vanila" | item == "Itc shake butterscotch"){
    document.getElementsByName("rate")[index].value = Itcmilkshake;
  }
  else if(item == "Kannan devan red")
  {
    document.getElementsByName("rate")[index].value =  kannandevanred;
  }
  else if(item == "Tetley Envelope")
  {
    document.getElementsByName("rate")[index].value =  tataenvelope;
  }
  else if(item == "Mb sugar")
  {
    document.getElementsByName("rate")[index].value =  mbsugar;
  }
  else if(item == "Tata sachet")
  {
    document.getElementsByName("rate")[index].value =  tatasachet;
  }
  else if(item == "Real 1ltr mango")
  {
    document.getElementsByName("rate")[index].value =  realmango1ltr;
  }
  else if(item == "Real 1ltr Guava")
  {
    document.getElementsByName("rate")[index].value =  realguava1ltr;
  }
  else if(item == "Mayuri 5kg")
  {
    document.getElementsByName("rate")[index].value =  Mayuri;
  }
}
function getrate(v)
{
  var index = $(v).parent().parent().index();
  
  var no = $(v).val();
  console.log(no)
  $.getJSON(ap+"?page=Search&item="+no,
  function(data){
    if(data > 0)
    {
      document.getElementsByName("Mrp")[index].value = data;
      Calc(v)
    }      
  })
}
function FormValidation()
{
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
}
function Inv()
{
  $.getJSON(ap+"?page=InvNoGenerate",
  function(data){
    $("#Inv").val(data)
  })
}
function OpenDForCalc(v){
  CALCINDEX = $(v).index()
  console.log(CALCINDEX)
  $("#staticBackdrop").modal('show')
}
function openc(){
  $("#Cal").modal('show')
  $("#staticBackdrop").modal('hide')
}
function Cl(){
  $("#staticBackdrop").modal('hide')
}
function Done(){
  document.getElementsByName("Mrp")[CALCINDEX].value = result
    Calc(v)
  $("#Cal").modal('hide')
}





















//for calculator

function BtnClick(val){

    if(val == '+'){
        OperatorIsNotClicked = false
        index ++;
    }
    else if(val == '-'){
        OperatorIsNotClicked = false
        index ++;
    }
    else if(val == '/'){
        OperatorIsNotClicked = false
        index ++;
    }
    else if(val == '*'){
        OperatorIsNotClicked = false
        index ++;
    }
    from_btn = val
    SetNumber()
    document.getElementById("Answersbox").value = document.getElementById("Answersbox").value+=val
    
}
function FindResult(){
    if(IsPercentageCALCULATOR){
        result = no1 - no1 * no2 / 100 ;
        document.getElementById("Answersbox").value = result
        no1 ="";
        no2 = "";
        operator ="";
        from_btn = ""
        index = 0;
        numberindex = 1
        clearone=0;
        OperatorIsNotClicked = true
        IsPercentageCALCULATOR = false
    }
    else if (isthisgreaterthanone){
        no1 = resultno1
        var text = result+operator+no2
        result = eval(text)
        document.getElementById("Answersbox").value = result
        console.log(result)
    }
    else{
        var text = no1+operator+no2
        result = eval(text)
        resultno1 = result
        OperatorIsNotClicked = false
        document.getElementById("Answersbox").value = result
        isthisgreaterthanone = true
        console.log(result)
    }
    no2 = "";
    operator ="";
    from_btn = ""
    index = 0;
    clearone=0;
}
function ClearText(){
    isthisgreaterthanone = false
    document.getElementById("Answersbox").value = ""
    no1 ="";
    no2 = "";
    numberindex = 1
    operator ="";
    from_btn = ""
    resultno1 = 0;
    index = 0;
    clearone=0;
    OperatorIsNotClicked = true
}
function SetNumber(){
    if(isthisgreaterthanone){
        if(index == 0){
            document.getElementById("Answersbox").value = ""
            no1 = 0 
            isthisgreaterthanone = false
            no2 = 0
            operator = 0
            OperatorIsNotClicked = true
        }
    }

    if(OperatorIsNotClicked){

        no1 = no1+=from_btn

    }

    else if(index == 1){

        numberindex ++

        operator = from_btn

        index ++

        document.getElementById("Answersbox").value = ""

        clearone ++
    }

    else{
        if(clearone == 1){
            document.getElementById("Answersbox").value = ""
            clearone ++
        }

        if(index > 1){

            no2 =  no2 +=from_btn

        }

    }
    from_btn = ""
}
function p(){
    document.getElementById("Answersbox").value += "%"
    IsPercentageCALCULATOR = true
}
function GetNegative(){
    if(numberindex == 1){
        var notonega1 =  no1 * 2
        no1 = no1 - notonega1
        document.getElementById("Answersbox").value = no1
    }
    else if (numberindex = 2) {
        var notonega1 =  no2 * 2
        no2 = no2 - notonega1
        document.getElementById("Answersbox").value = no2
    }
}
