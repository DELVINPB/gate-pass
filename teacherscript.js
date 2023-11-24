function toggleReasonBox(rowId) {
    const reasonBox = document.querySelectorAll('.reason-box')[rowId - 1];
    reasonBox.style.display = reasonBox.style.display === 'none' ? 'table-cell' : 'none';
}
