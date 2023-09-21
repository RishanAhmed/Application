function BtnClick(val){
    document.getElementById("Answersbox").value = document.getElementById("Answersbox").value+=val
}
function FindResult(){
    var text = document.getElementById("Answersbox").value
    var result = eval(text)
    document.getElementById("Answersbox").value = result
}
function ClearText(){
    document.getElementById("Answersbox").value = ""
}