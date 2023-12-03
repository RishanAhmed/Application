let IconToShow = localStorage.getItem("App")

SetImage()

function SetImage(){

    $(".icon").hide()
    
    $("#"+IconToShow).show()

    console.log(IconToShow)
    
    $(".Container").show()
}

function Uninstall_App() {

    var array = JSON.parse(localStorage.getItem("DownloadedApps"))
    
    let index = array.indexOf(IconToShow)

    console.log(index)

    array.splice(index,1)

    console.log(array)

    localStorage.setItem("DownloadedApps",JSON.stringify(array))
}

function Add_App(){
    
    if (localStorage.getItem("DownloadedApps") == null) {

        localStorage.setItem("DownloadedApps",'[]')
    
    }

    var DownloadedAppsName = JSON.parse(localStorage.getItem("DownloadedApps"))


    DownloadedAppsName.push(IconToShow)

    localStorage.setItem("DownloadedApps", JSON.stringify(DownloadedAppsName))
    
    console.log(JSON.parse(localStorage.getItem("DownloadedApps")))

}