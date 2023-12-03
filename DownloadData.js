var TotalAmount = 0

let sy = 0
let sm = 0
let sd = 0

let ey = 0
let em = 0
let ed = 0

let StartffDate = 0

let EndingDate = 0

var appsscript = "https://script.google.com/macros/s/AKfycbzL-TDjgiNr9EaoHBkWEAAYXWLsdlwMXbEoPLSTS-AmVybVHDje8ioAbavah_6kimQ/exec"

function Download(){
        var Dtable = document.getElementById('Mytablebody');

        //convert the table to workbook object
        var workbook    =  XLSX.utils.table_to_book(Dtable);

        //generate xlsx file from wokbook
        var excelData = XLSX.write(workbook,{bookType:'xlsx',type:'array'});

        //save the file
        saveAs(new Blob([excelData],{type:'application/octet-stream'}),'users.xlsx');

}

function GetReport(){

    var table = "" , row = "" , column = "" , columnCound = 0,TotalAmount = 0

    column = '<td>Invoie No</td><td>Date</td><td>Party</td><td>Amount</td>'

    row = '<tr>'+column+'</tr>'

    $("#Load").modal('show')

    $.getJSON(appsscript+"?page=DownloadData&startingdate="+StartffDate+"&endingdate="+EndingDate,

    function(data){

        $.each(data , function(key, value){

            column = ""
            columnCound = 0
            
            $.each(value, function(key1, value1){
                
                

                if (columnCound == 1 ){
                    
                    var Date = value1.substring(0,10)
                    column = column +'<td>'+Date+'</td>'

                }
                else{

                    column = column +'<td>'+value1+'</td>'

                }
                
                if (columnCound == 3 ){

                    TotalAmount = TotalAmount + value1

                }

                columnCound = columnCound + 1
            
            })
            
            row = row + '<tr>'+column+'</tr>'
        
        })

        var ttCol = '<td></td><td></td><td>Total Amount</td><td>'+TotalAmount+'</td>'
        var Ttrow = '<tr>'+ttCol+'</tr>'

        row = row + Ttrow
        
        table = row
        
        console.log(table)
        
        $("#Mytablebody").append(row)

        $("#Load").modal('hide')
    
    })

}

function Split_Start_Date() {

    let val = document.getElementById("StartingDate").value
    StartffDate = document.getElementById("StartingDate").value
    
    const StartDate = val.split("-")

    console.log(StartDate)

    sy = StartDate[0]
    sm = StartDate[1]
    sd = StartDate[2]

    console.log("Date"+sd)
    console.log("Month"+sm)
    console.log("Year"+sy)
}

function Split_End_Date() {

    let val = document.getElementById("EndingDate").value
    EndingDate = document.getElementById("EndingDate").value
    
    const StartDate = val.split("-")

    console.log(StartDate)

    ey = StartDate[0]
    em = StartDate[1]
    ed = StartDate[2]

    console.log("Date"+ed)
    console.log("Month"+em)
    console.log("Year"+ey)

    GetReport()
}