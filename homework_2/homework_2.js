var score = 0;
var isCorrect1 = false;
var isCorrect2 = false;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if (!isCorrect1) {
            score++;
            isCorrect1 = true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        }
    } else {
        result.textContent = "ไม่ใช่! ไปคิดมาใหม่";
        result.style.color = 'red';
        if (isCorrect1) {
            score--;
            isCorrect1 = false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        }
    }

}
function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'b') {

        result2.textContent = "ใช่แล้ว PMO ย่อมาจาก Project Management Office";
        result2.style.color = 'green';
        if (!isCorrect2) {
            score++;
            isCorrect2 = true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        }
    } else if (answer == 'd') {
        result2.textContent = "มันต้องมีข้อถูกสิ!";
        result2.style.color = 'blue';
        if (isCorrect2) {
            score--;
            isCorrect2 = false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        }
    }
    else {
        result2.textContent = "ไม่ใช่! ไปคิดมาใหม่";
        result2.style.color = 'red';
        if (isCorrect2) {
            score--;
            isCorrect2 = false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด " + score + " ข้อ";
        }
    }
}