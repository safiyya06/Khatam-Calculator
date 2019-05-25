function calculateDaysNeeded() {

    const totalPages = 604;
    const inputValue = document.getElementById("number").value;
    const inputNumber = parseInt(inputValue);

    const answer = totalPages/inputNumber
    document.getElementById("results").innerHTML = answer;

    
}
