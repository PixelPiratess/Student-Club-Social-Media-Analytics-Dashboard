function fetchData() {
    const username = document.getElementById('username').value;
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const user = data[0];
                document.getElementById('stats').innerHTML = `
                    <h2>@${user.username}</h2>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;
            } else {
                document.getElementById('stats').innerHTML = '<p>User not found.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}
