//var Subscriber = require('../models/Subscriber');

// Render a form to send an MMS message
exports.showForm = function(request, response) {
    // Render form, with any success or error flash messages
    response.render('index', {
        errors: request.flash('errors'),
        successes: request.flash('successes')
    });
};
// exports.showForm = function(request, response) {
//     // Render form, with any success or error flash messages
//         Subscriber.find({
//             subscribed: true
//         }, function(err, docs){
// 	    response.render('index', {
// 	        errors: request.flash('errors'),
// 	        successes: request.flash('successes'),
// 	        data:docs
// 	    });    	
//     });

// };