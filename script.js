function getRandomDelay(min, max) {
    return Math.random() * (max - min) + min;
  }

  const promise1 = new Promise(resolve => {
    setTimeout(() => {
      resolve(getRandomDelay(1, 3).toFixed(3));
    }, getRandomDelay(1000, 3000)); 
  });

  const promise2 = new Promise(resolve => {
    setTimeout(() => {
      resolve(getRandomDelay(1, 3).toFixed(3));
    }, getRandomDelay(1000, 3000)); 
  });

  const promise3 = new Promise(resolve => {
    setTimeout(() => {
      resolve(getRandomDelay(1, 3).toFixed(3));
    }, getRandomDelay(1000, 3000));
  });

  Promise.all([promise1, promise2, promise3])
    .then(values => {
      const outputTbody = document.getElementById('output');
      outputTbody.innerHTML = '';
		 const totalTime = Math.max(...values).toFixed(3); 
      values.forEach((time, index) => {
        const row = outputTbody.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        cell1.textContent = `Promise ${index + 1}`;
        cell2.textContent = time;
      });


      const totalRow = outputTbody.insertRow();
      const totalCell1 = totalRow.insertCell();
      const totalCell2 = totalRow.insertCell();
      totalCell1.textContent = 'Total';
      totalCell2.textContent = totalTime;
    });