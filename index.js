document.getElementById('getDataButton').addEventListener('click', getData);
document.getElementById('postDataButton').addEventListener('click', postData);

async function getData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/data')
        const data = await response.json();
        document.getElementById('getDataResult').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function postData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const occupation = document.getElementById('occupation').value;

    const data = { name, age, occupation };

    try {
        const response = await fetch('http://127.0.0.1:5000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        document.getElementById('postDataResult').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}
