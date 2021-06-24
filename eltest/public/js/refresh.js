        function update() {
        setInterval(() => {
        	fetch('/dados', {mode: 'cors'})
        	.then(function(response) {
        		return response.text();
        	})
        	.then(function(resp) {
        		console.log('Request successful', resp);
        		const obj = JSON.parse(resp);
        		document.getElementById("temperature").innerText = obj.temperature + '°C';
        		document.getElementById("humidity").innerText = obj.humidity + '%';
        	})
        	.catch(function(error){
        		console.log('Request failed', error);
        	});
        }, 1000)
        }
        update();
