// Initialize localStorage data
if (!localStorage.getItem("slots")) localStorage.setItem("slots", 10);
if (!localStorage.getItem("completed")) localStorage.setItem("completed", 0);
if (!localStorage.getItem("leaves")) localStorage.setItem("leaves", 4);
if (!localStorage.getItem("loans")) localStorage.setItem("loans", "[]");

// Login system
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "MiliPradhan" && pass === "Radharani124") {
        localStorage.setItem("currentUser","head");
        showMain();
    } else {
        alert("Invalid login");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

function showMain() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("mainMenu").classList.remove("hidden");
}

// Navigation
function openPage(id){
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
    updateDisplay();
}
function back(){
    document.querySelectorAll(".box").forEach(x => x.classList.add("hidden"));
    document.getElementById("mainMenu").classList.remove("hidden");
    updateDisplay();
}

// Slot booking
function updateDisplay(){
    document.getElementById("slotCount").innerText = "Slots Left: " + localStorage.getItem("slots");
    document.getElementById("doneCount").innerText = "Completed Slots Today: " + localStorage.getItem("completed");
    document.getElementById("leaveCount").innerText = "Leaves Left This Month: " + localStorage.getItem("leaves");
    document.getElementById("loanList").innerText = JSON.parse(localStorage.getItem("loans")).join(", ");
}

function bookSlot(){
    let slots = Number(localStorage.getItem("slots"));
    if (slots <= 0) return alert("No slots left today!");

    localStorage.setItem("slots", slots - 1);
    localStorage.setItem("completed", Number(localStorage.getItem("completed")) + 1);
    updateDisplay();
}

// Leave system
function takeLeave(){
    let l = Number(localStorage.getItem("leaves"));
    if (l <= 0) return alert("No leaves left this month!");
    localStorage.setItem("leaves", l - 1);
    updateDisplay();
}

// Loan system
function addLoan(){
    let amt = document.getElementById("loanInput").value;
    if (amt.trim()==="") return;
    let loans = JSON.parse(localStorage.getItem("loans"));
    loans.push(amt);
    localStorage.setItem("loans", JSON.stringify(loans));
    updateDisplay();
}

// Admin system
function openAdmin(){
    document.getElementById("mainMenu").classList.add("hidden");
    document.getElementById("adminLogin").classList.remove("hidden");
}
function checkAdmin(){
    if (document.getElementById("adminPass").value === "RATAN2653"){
        document.getElementById("adminLogin").classList.add("hidden");
        document.getElementById("adminPanel").classList.remove("hidden");
    } else alert("Wrong password!");
}

function resetSlots(){
    localStorage.setItem("slots", 10);
    localStorage.setItem("completed", 0);
    alert("Slots reset!");
    updateDisplay();
}
function resetLeaves(){
    localStorage.setItem("leaves", 4);
    alert("Leaves reset!");
    updateDisplay();
}