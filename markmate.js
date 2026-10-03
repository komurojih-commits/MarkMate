function calculateMarks() {

    let subject1 = Number(document.getElementById("subject1").value);
    let subject2 = Number(document.getElementById("subject2").value);
    let subject3 = Number(document.getElementById("subject3").value);

    if (
        subject1 < 0 || subject1 > 100 ||
        subject2 < 0 || subject2 > 100 ||
        subject3 < 0 || subject3 > 100
    ) {
        document.getElementById("result").innerHTML =
            "Please enter marks between 0 and 100.";

        return;
    }

    let total = subject1 + subject2 + subject3;

    let average = total / 3;

    let percentage = (total / 300) * 100;

    document.getElementById("result").innerHTML =
        "📊 Total Marks: " + total + " / 300" +
        "<br>📈 Average: " + average.toFixed(2) +
        "<br>🎯 Percentage: " + percentage.toFixed(2) + "%";
}