var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function (request,response) {
  var rsvpEmail = request.body.rsvpEmail;
  // this will print to your terminal whenever the POST request is made
  console.log(rsvpEmail);

  data.rsvp.push(rsvpEmail); // add to current data

  response.send(rsvpEmail);
}
