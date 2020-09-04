module.exports = function(server) {
	//Convert 
    server.route({
        method: 'GET',
        path: '/convert/service',
        handler: function (request, h) {
    
            var data = {
                message: 'Welcome to our Eth rate service'
            };
    
            return data;
        }
    });
}
