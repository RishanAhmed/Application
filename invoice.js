var Appsscript = "https://script.google.com/macros/s/AKfycbwF6ckQ1Q-coiP45ZCFgzY_Hw-A4bLTv_Td42QyZ5vqTn5W8C1ZamxwbeA9HJsqOR56VQ/";
var Address_From_Appsscript = "https://script.google.com/macros/s/AKfycbygBasdHUIeE02uKRgnDhMzw551Sj_k_67MNT1G9JJRu-k7wOTmbTwaP_PJNTputD5f/exec"
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
var tttindex = 0

OperatorIsNotClicked = true;
isthisgreaterthanone = false


$(document).ready(function () {

  FillDataList();

  FormValidation();

  customer();

  Inv()

});

function GetPrint()
{

  /*For Print*/

  let dt = document.getElementById("Date").value

  let nm = document.getElementById("Party").value

  /*document.getElementById("shopnm").innerText = nm*/

  sessionStorage.setItem("Shop", nm)

  sessionStorage.setItem("dt",dt)


  /*$(".NoPrint").hide()

  $(".btn").hide()

  $(".ToPrint").show()

  ch()*/

  if(Addresss){
    
    window.location.assign("Print.html")
  
  }

}

function Get_ADD_PHNO(){

  let party = $("#Party").val()

  $.getJSON(Address_From_Appsscript+"?page=getaddress&party="+party,
  
  function(data){

    var record = data

    let ind = 1

    $.each(record, function(key, value){

      $.each(value, function(key1 , value1){

        if(ind == 1){

          sessionStorage.setItem("mob", value1)
          ind ++

        }
        else if(ind == 2){

          sessionStorage.setItem("add", value1)
          ind ++

        }

      })

    })

  })

  Addresss = true

}

function Get_QTY(v){

  let index = $(v).parent().parent().index()

  index = index + 1

  let QTY = $(v).val()

  sessionStorage.setItem("QTY"+index, QTY)

  sessionStorage.setItem("Total_Row",index)

}

function Get_Item(v){

  let index = $(v).parent().parent().index()

  index = index + 1

  let item = $(v).val()
  
  sessionStorage.setItem("Item"+index, item)

}

function Get_Rate(){

  sessionStorage.setItem("Rate"+Ind, Ratee)

}

function BtnAdd()
{

  /*Add Button*/

  var v = $("#TRow").clone().appendTo("#TBody") ;

  $(v).find("input").val('');

  $(v).removeClass("d-none");

  $(v).find("th").first().html($('#TBody tr').length - 1);

  tttindex ++

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

  tttindex --

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

  sum = Math.round(sum)

  document.getElementById("TotalAmt").value = sum;

}
 
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

function getrate(v)
{

  var index = $(v).parent().parent().index();
  
  Ind = $(v).parent().parent().index() + 1;

  var no = $(v).val();

  $.getJSON(ap+"?page=Search&item="+no,

  function(data){

    if(data > 0)

    {

      document.getElementsByName("Mrp")[index].value = data;

      Calc(v)

      Ratee = data
      
      Get_Rate()

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
function Ask_DO_YOU_WANT_PRINT(){

  $("#Ask_Print").modal("show")

}
function No_Print(){

  $("#Ask_Print").modal("hide")

}
function Inv()
{

  $.getJSON(ap+"?page=InvNoGenerate",

  function(data){

    $("#Inv").val(data)

  })
}
function OpenDForCalc(v){

  CALCINDEX = $(v).parent().parent().index()
  
  console.log(tttindex)
  
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

  document.getElementsByName("Mrp")[tttindex].value = result
  
  $("#Cal").modal('hide')
  
  var qty = document.getElementsByName("qty")[tttindex].value;
  
  var rate = document.getElementsByName("Mrp")[tttindex].value;

  var amt = qty * rate;

  document.getElementsByName("Amt")[tttindex].value = amt;

  Ratee = result

  Get_Rate()

  GetTotal();
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
