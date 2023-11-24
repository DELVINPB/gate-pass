function checkPermission() {
    const studentId = document.getElementById('studentId').value;

    // Simulating a request to the server to check permission
    // Replace this with your actual logic (e.g., fetching data from Firebase)
    const hasPermission = simulatePermissionCheck(studentId);

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // Clear previous results

    const resultText = document.createElement('p');
    const approveButton = document.createElement('button');

    if (hasPermission) {
        resultText.textContent = `Student ${studentId} has permission to leave the college.`;
        approveButton.textContent = 'Approve Leave';
        approveButton.onclick = () => sendLeaveApproval(studentId);
        resultContainer.appendChild(resultText);
        resultContainer.appendChild(approveButton);
        resultContainer.classList.add('success'); // Add success class for styling
    } else {
        resultText.textContent = `Student ${studentId} does not have permission to leave the college.`;
        resultContainer.appendChild(resultText);
        resultContainer.classList.add('error'); // Add error class for styling
    }
}

function simulatePermissionCheck(studentId) {
    // Simulate a server request or database query to check permission
    // Replace this with your actual logic (e.g., fetching data from Firebase)
    const permittedStudents = ['123456', '789012', '345678'];
    return permittedStudents.includes(studentId);
}

function sendLeaveApproval(studentId) {
    // Simulate sending leave approval to the student's guardian email
    // Replace this with your actual logic (e.g., sending an email through a service)
    const guardianEmail = simulateGuardianEmailLookup(studentId);
    alert(`Leave approval sent to ${guardianEmail} for Student ${studentId}`);
}

function simulateGuardianEmailLookup(studentId) {
    // Simulate fetching guardian email from a database
    // Replace this with your actual logic (e.g., fetching data from Firebase)
    const guardianEmails = {
        '123456': 'guardian1@example.com',
        '789012': 'guardian2@example.com',
        '345678': 'guardian3@example.com',
    };
    return guardianEmails[studentId] || 'guardian@example.com';
}
