function calculateDaysNeeded() {
    const totalPages = 604;
    const inputValue = document.getElementById("number").value;

    const answer = totalPages/inputValue
    document.getElementById("results1").innerHTML = answer;
}

function calculatePagesNeeded() {
    const totalPages = 604
    const inputDays = document.getElementById("days").value

    const answer = totalPages/inputDays
    document.getElementById("results2").innerHTML = answer


}
 