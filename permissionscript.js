document.addEventListener('DOMContentLoaded', function () {
    const participantsTableBody = document.getElementById('participantsTableBody');
    const participantsNumberInput = document.getElementById('participantsNumber');

    participantsNumberInput.addEventListener('input', function () {
        updateParticipantsTable();
    });

    function updateParticipantsTable() {
        const participantsNumber = participantsNumberInput.value;
        participantsTableBody.innerHTML = ''; // Clear existing rows

        for (let i = 0; i < participantsNumber; i++) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="text" name="participantName${i + 1}" required></td>
                <td><input type="text" name="participantSrNumber${i + 1}" required></td>
                <td><input type="text" name="participantBranch${i + 1}" required></td>
                <td><input type="text" name="participantSemester${i + 1}" required></td>
                <td><input type="file" name="participantSignature${i + 1}" accept="image/*" required></td>
            `;
            participantsTableBody.appendChild(row);
        }
    }
});
