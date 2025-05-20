const students = [
    { id: 1, name: "Emma", grade: "A", subject: "Math" },
    { id: 2, name: "James", grade: "B", subject: "Science" },
    { id: 3, name: "Sofia", grade: "A", subject: "History" },
    { id: 4, name: "Lucas", grade: "C", subject: "English" }
    ];

    function findStudent() {
        const searchId = Number(document.getElementById('studentId').value);
        const foundStudent = students.find(student => student.id === searchId);
        const resultDiv = document.getElementById('result');

        if (foundStudent) {
            resultDiv.innerHTML = `
            <h3>Student Found!</h3>
            <p>Name: ${foundStudent.name}</p>
            <p>Grade: ${foundStudent.grade}</p>
            <p>Subject: ${foundStudent.subject}</p>
            `;
            } else {
            resultDiv.innerHTML = "<p>No student found with that ID.</p>";
            }
        }