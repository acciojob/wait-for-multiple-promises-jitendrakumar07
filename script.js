function createPromise(promiseNumber) {
    const delay = Math.random() * 2000 + 1000; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ promiseNumber, time: (delay / 1000).toFixed(3) }); 
        }, delay);
    });
}

const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

const outputTable = document.getElementById("output");

outputTable.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

Promise.all(promises).then(results => {
    
    outputTable.innerHTML = '';

    let totalTime = 0;
    results.forEach(result => {
        totalTime = Math.max(totalTime, result.time); 
        const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time}</td>`; // Use backticks here
        outputTable.appendChild(row);
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`; // Use backticks here
    outputTable.appendChild(totalRow);
});
