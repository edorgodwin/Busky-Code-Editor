
// Function to execute the run() method when input into the editor/textarea are received by the user
function run() {
    // Variable declaration to get element by Id
    let htmlCode = document.getElementById("html-code").value; 
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

// Display the result from the three languages panel to the output window
    output.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode +"</style>";
    output.contentWindow.eval(jsCode);
}