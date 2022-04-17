function getData() {


    let temtuj = document.getElementById("tlib").value;
    let asber = document.getElementById("asal").value;
    let tangber = document.getElementById("tberangkat").value;
    let tujpul = document.getElementById("tujuan").value;
    let tangpul = document.getElementById("tpulang").value;

    let sec = document.getElementById("hasil");
    sec.style.display = "";

    document.getElementById("temtuj").innerHTML = temtuj;
    document.getElementById("asber").innerHTML = asber;
    document.getElementById("tengber").innerHTML = tangber;
    document.getElementById("tempul").innerHTML = tujpul;
    document.getElementById("tangpul").innerHTML = tangpul;


}


function saveData() {


    let name = document.getElementById("nama").value;
    localStorage.setItem("username", name);

    let emails = document.getElementById("email").value;
    localStorage.setItem("email", emails);

    let pw = document.getElementById("pass").value;
    localStorage.setItem("password", pw);


    alert("Pendaftaran Berhasil");

}