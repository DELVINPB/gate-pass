function toggleReasonBox(rowNumber) {
    const reasonBox = document.querySelector(`.reason-box-${rowNumber}`);
    reasonBox.style.display = reasonBox.style.display === 'none' ? 'block' : 'none';
}

function handleAction(action, rowNumber) {
    const reasonBox = document.querySelector(`.reason-box-${rowNumber}`);
    
    // You can perform additional actions based on the selected action (View, Reject, Approve)
    if (action === 'View') {
        alert(`Viewing request for row ${rowNumber}`);
    } else if (action === 'Reject') {
        reasonBox.style.display = 'block';
    } else if (action === 'Approve') {
        alert(`Approving request for row ${rowNumber}`);
    }
}

function submitRejection(rowNumber) {
    const reason = document.getElementById(`reason-${rowNumber}`).value;
    alert(`Rejection reason submitted for row ${rowNumber}: ${reason}`);
    // You can add Firebase logic to send the rejection reason to the student
}
