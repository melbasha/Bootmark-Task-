var siteName = document.getElementById('SiteName');
var siteURL = document.getElementById('SiteURL');

var AllsiteContainer = [];


if (localStorage.getItem('allsitesuser') !== null) {
    AllsiteContainer = JSON.parse(localStorage.getItem('allsitesuser'));
    display()
} else {
    AllsiteContainer = [];
}



//add Data user Enter
function AddSite() {
    var Allsite = {
        sitename: siteName.value,
        siteurl: siteURL.value,
    }
    AllsiteContainer.push(Allsite);
    localStorage.setItem('allsitesuser', JSON.stringify(AllsiteContainer));
    display();
    reset()
}




//Dispaly Data user Enter
function display() {
    var cartona = "";
    for (var i = 0; i < AllsiteContainer.length; i++) {
        cartona +=
            `
                <tr>
                    <th>${i+1}</th>
                    <td>${AllsiteContainer[i].sitename}</td>
                    <td><button  class="btn btn-success"><a class="fw-bold text-white" target="_blank" href="${AllsiteContainer[i].siteurl}"><i class="fa-regular fa-eye"></i> Visit</a></button></td>
                    <td><button class="btn btn-danger" onclick="Delete(${i})"><a class="fw-bold text-white"><i class="fa-solid fa-trash"></i> Delete</a></button></td>
                </tr>       
        `
    }
    document.getElementById('forminputuser').innerHTML = cartona;
}




//Reset Form
function reset() {
    siteName.value = null;
    siteURL.value = null;
}


//Delete Form
function Delete(index){
    AllsiteContainer.splice(index,1);
    display()
    localStorage.setItem('allsitesuser',JSON.stringify(AllsiteContainer))
}