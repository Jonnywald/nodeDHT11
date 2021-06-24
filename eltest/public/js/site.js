var refreshData = function() {
        $.ajax({
        url: '/temp',
        datatype: 'json',
        success: function(data) {
        	console.log(data);
        },
        error: function(data) {
        console.log("erro");
        }
        })
        };
        
        setInterval(refreshData, 1000);
