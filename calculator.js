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
        result = no1 * no2 / 100;
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