
document.getElementById("feeForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let studentClass = document.getElementById("class").value;

    let admission = Number(document.getElementById("admission").value);
    let tuition = Number(document.getElementById("tuition").value);
    let computer = Number(document.getElementById("computer").value);
    let library = Number(document.getElementById("library").value);
    let bus = Number(document.getElementById("bus").value);
    let discount = Number(document.getElementById("discount").value);

    let total = admission + tuition + computer + library + bus;
    let finalFee = total - discount;

    if (discount > total) {
        alert("Discount cannot be greater than total fee!");
        return;
    }

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML = `
        <h3>Student Fee Receipt</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Roll Number:</b> ${roll}</p>
        <p><b>Class:</b> ${studentClass}</p>
        <hr><br>
        <p>Admission Fee: Rs. ${admission}</p>
        <p>Tuition Fee: Rs. ${tuition}</p>
        <p>Computer Fee: Rs. ${computer}</p>
        <p>Library Fee: Rs. ${library}</p>
        <p>Transportation Fee: Rs. ${bus}</p>
        <p>Total Fee: Rs. ${total}</p>
        <p>Discount: Rs. ${discount}</p>
        <h3>Final Fee: Rs. ${finalFee}</h3>
    `;

});
