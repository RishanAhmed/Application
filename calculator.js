let OperatorIsNotClicked=Boolean();

let no1 ="";
let no2 = "";
let operator ="";
let from_btn = ""
var index = 0;
var clearone=0;

OperatorIsNotClicked = true;

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
    var text = no1+operator+no2
    console.log(text)
    var result = eval(text)
    document.getElementById("Answersbox").value = result
    no1 ="";
    no2 = "";
    operator ="";
    from_btn = ""
    index = 0;
    clearone=0;
    OperatorIsNotClicked = true
}
function ClearText(){
    document.getElementById("Answersbox").value = ""
    no1 ="";
    no2 = "";
    operator ="";
    from_btn = ""
    index = 0;
    clearone=0;
    OperatorIsNotClicked = true
}
function SetNumber(){

    if(OperatorIsNotClicked){

        no1 = no1+=from_btn

        console.log(no1)

    }

    else if(index == 1){

        operator = from_btn

        index ++

        console.log(operator)

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

            console.log(no2)

        }

    }
    from_btn = ""
}