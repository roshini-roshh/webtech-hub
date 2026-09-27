/* =========================================================
   WebTech Hub - JavaScript Unit III
   ========================================================= */

"use strict";

/* Variables and Data Types */
const studentName = "Roshini K S";
let studentMarks = 92;
const isStudent = true;
const subjects = ["HTML5", "CSS3", "JavaScript"];
const student = {
    name: studentName,
    marks: studentMarks,
    course: "CSE"
};

/* Functions */
function calculateGrade(mark) {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    return "D";
}

function showMessage(message) {
    const output = document.getElementById("jsOutput");
    if (output) output.textContent = message;
}

/* DOM Ready */
document.addEventListener("DOMContentLoaded", function () {

    /* DOM Manipulation */
    const heading = document.querySelector("h1");
    if (heading) heading.title = "Changed using JavaScript DOM";

    /* DOM Collections */
    const cards = document.getElementsByClassName("card");
    const links = document.querySelectorAll("nav a");
    const collectionInfo = document.getElementById("collectionInfo");

    if (collectionInfo) {
        collectionInfo.textContent =
            `DOM Collections: ${cards.length} cards and ${links.length} navigation links found.`;
    }

    /* Operators + Control Statements */
    const operatorButton = document.getElementById("operatorBtn");
    if (operatorButton) {
        operatorButton.addEventListener("click", function () {
            const a = 10;
            const b = 3;
            const addition = a + b;
            const multiplication = a * b;
            const remainder = a % b;

            let result;
            if (a > b && addition > 10) {
                result = "if condition is TRUE";
            } else {
                result = "if condition is FALSE";
            }

            let loopText = "";
            for (let i = 1; i <= 3; i++) loopText += i + " ";

            showMessage(
                `Operators: ${a}+${b}=${addition}, ${a}*${b}=${multiplication}, ` +
                `${a}%${b}=${remainder}. ${result}. For loop: ${loopText}`
            );
        });
    }

    /* Functions + Objects + Arrays */
    const functionButton = document.getElementById("functionBtn");
    if (functionButton) {
        functionButton.addEventListener("click", function () {
            const grade = calculateGrade(student.marks);
            showMessage(
                `Function result: ${student.name} scored ${student.marks} (${grade}). ` +
                `Array length: ${subjects.length}. First subject: ${subjects[0]}.`
            );
        });
    }

    /* Built-in Objects: Math, Date, String, Number */
    const builtInButton = document.getElementById("builtInBtn");
    if (builtInButton) {
        builtInButton.addEventListener("click", function () {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            const today = new Date();
            const upper = studentName.toUpperCase();
            const parsed = Number("25");

            showMessage(
                `Built-in Objects → Math.random(): ${randomNumber}, ` +
                `Date: ${today.toLocaleDateString()}, ` +
                `String.toUpperCase(): ${upper}, Number("25"): ${parsed}`
            );
        });
    }

    /* Dynamic Style */
    const styleButton = document.getElementById("styleBtn");
    const styleBox = document.getElementById("styleBox");

    if (styleButton && styleBox) {
        styleButton.addEventListener("click", function () {
            styleBox.style.background = "#6c63ff";
            styleBox.style.color = "white";
            styleBox.style.transform = "scale(1.05)";
            styleBox.style.borderRadius = "20px";
            styleBox.textContent = "Style changed dynamically using JavaScript!";
        });
    }

    /* Timer + Animated Effect */
    const timerButton = document.getElementById("timerBtn");
    const timerBox = document.getElementById("timerBox");
    let timerId = null;
    let position = 0;

    if (timerButton && timerBox) {
        timerButton.addEventListener("click", function () {
            if (timerId !== null) return;

            timerId = setInterval(function () {
                position += 5;
                timerBox.style.marginLeft = position + "px";

                if (position >= 250) {
                    clearInterval(timerId);
                    timerId = null;
                    position = 0;
                }
            }, 100);
        });
    }

    /* Event Bubbling */
    const bubbleParent = document.getElementById("bubbleParent");
    const bubbleChild = document.getElementById("bubbleChild");
    const bubbleOutput = document.getElementById("bubbleOutput");

    if (bubbleParent && bubbleChild && bubbleOutput) {
        bubbleParent.addEventListener("click", function () {
            bubbleOutput.textContent += " Parent event →";
        });

        bubbleChild.addEventListener("click", function () {
            bubbleOutput.textContent = "Child event →";
        });
    }

    /* Form: focus + blur + submit + reset */
    const form = document.querySelector("form");

    if (form) {
        const inputs = form.querySelectorAll("input, textarea, select");

        inputs.forEach(function (input) {
            input.addEventListener("focus", function () {
                this.style.border = "2px solid #6c63ff";
            });

            input.addEventListener("blur", function () {
                this.style.border = "1px solid #ccc";
            });
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");

            if (nameField && emailField) {
                const name = nameField.value.trim();
                const email = emailField.value.trim();

                if (name === "" || email === "") {
                    alert("Please enter your name and email.");
                    return;
                }

                alert(`Form submitted successfully for ${name}!`);
            }
        });

        form.addEventListener("reset", function () {
            setTimeout(function () {
                alert("Form has been reset.");
            }, 0);
        });
    }

    /* Input event */
    const range = document.getElementById("range");
    const rangeValue = document.getElementById("rangeValue");

    if (range && rangeValue) {
        range.addEventListener("input", function () {
            rangeValue.textContent = this.value + "%";
        });
    }

    /* Built-in Date object for footer */
    const currentYear = document.getElementById("currentYear");
    if (currentYear) currentYear.textContent = new Date().getFullYear();
});
