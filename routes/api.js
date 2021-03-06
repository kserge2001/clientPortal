var express = require('express');
var request = require('request');
var router = express.Router();
var endpoint = '127.0.0.1:9000';

function reqChecker(req) {
	var length = 0;
	for (var keys in req.session) {
		length++;
	}
	return length;
}

router.get('/users', function(req, res, next) {
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/users", args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/userdata/:id', function(req, res, next) {
	if (reqChecker !== 0) {
		var uuid = req.session.uuid;
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/userdata/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/userdata', function(req, res, next) {
    console.log("get");
	if (reqChecker !== 0) {
		var uuid = req.session.uuid;
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/userdata/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.put('/userdata', function(req, res, next) {
    console.log("put");
	if (reqChecker !== 0) {
		var uuid = req.session.uuid;
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request({
				url: "http://127.0.0.1:9000/userdata/" + uuid,
				method: 'PUT',
				json: req.body
			},
			function(error, response, body) {
				if (!error && response.statusCode == 200) {
					res.send(body);
				}
			});
	} else {
		res.redirect('/');
	}
});

router.get('/userappointments', function(req, res, next) {
	var uuid = req.session.uuid;
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/userappointments/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/usertestresult', function(req, res, next) {
	var uuid = req.session.uuid;
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/usertestresult/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/userallergies', function(req, res, next) {
	var uuid = req.session.uuid;
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/userallergies/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/usermedicines', function(req, res, next) {
	var uuid = req.session.uuid;
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/usermedicines/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.get('/userimmunization', function(req, res, next) {
	var uuid = req.session.uuid;
	if (reqChecker !== 0) {
		var args = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		request("http://127.0.0.1:9000/userimmunization/" + uuid, args, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				res.send(body);
			}
		});
	} else {
		res.redirect('/');
	}
});

router.post('/requestAppointment', function(req, res, next) {
	res.end();
});

module.exports = router;
