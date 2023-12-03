var array = JSON.parse(localStorage.getItem("DownloadedApps"))

function Try(val){

    window.location.assign(val)

}

if (localStorage.getItem("DownloadedApps") == null) {
    
    localStorage.setItem("DownloadedApps",JSON.stringify([]))

}

for (let i = 0; i < array.length; i++) {

    console.log(array[i])

    $('.'+array[i]).show()

}