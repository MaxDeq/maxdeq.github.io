const setup = () => {
    let lblcursus = document.getElementById("lblcursus");
    lblcursus.addEventListener("mouseover", change);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const show = () => {
    let txtName = document.getElementById("txtname");
    if (txtName.value !== ""){
        alert("Jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);

        console.log(`jouw naam is $ {txtName.value}`);

    }else{
        alert("gelieve naam in te vullen");
    }
}

const change = () => {
    let lblcursus = document.getElementById("lblcursus");
    lblcursus.className = "cursus";
}
window.addEventListener("load", setup);
