function switchTab(tabId, element) {
    // Hide all content sections
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove("active");
    });

    // Remove active state from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove("active");
    });

    // Show the selected content & highlight the clicked button
    document.getElementById(tabId).classList.add("active");
    element.classList.add("active");
}
function openpage() {
  window.location.href="page.html";
  // Tab to edit
}
function imageopen(){
  window.location.href="image.html";
  // Tab to edit
}
function opendocument(){
  window.location.href="cer.html";
  // Tab to edit
}
function digital() {
  window.location.assign("digital.html");
  // Tab to edit
}
function func() {
  window.location.href="its.html";
  // Tab to edit
}
function gen() {
  window.location.href="digi.html";
  // Tab to edit
}
function tel(){
  window.location.href="tel.html";
  }
  
function digi() {
  window.location.href="digi.html";
  // Tab to edit
}



