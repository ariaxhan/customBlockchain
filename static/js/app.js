function submitTransaction() {
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    fetch('/transactions/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({sender, recipient, amount})
    }).then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
}

function mineBlock() {
    fetch('/mine')
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            displayBlockchain();
        })
        .catch(error => console.error('Error:', error));
}

function displayBlockchain() {
    fetch('/chain')
        .then(response => response.json())
        .then(data => {
            document.getElementById('blockchainDisplay').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}

window.onload = () => {
    displayBlockchain(); // Display blockchain on initial load
}
