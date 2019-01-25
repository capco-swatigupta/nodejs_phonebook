const Phone = require('../models/phone.model')

exports.getPhones = (req, res) => {
    Phone.find({}, function(err, entries) {
        var entriesMap = {};
    
        entries.forEach(function(entry) {
          entriesMap[entry._id] = entry;
        });
    
        res.send(entries);  
      });
}

exports.getPhoneByName = (req, res) => {

}

exports.insertPhone = (req, res) => { 
    let phone = new Phone({
        name: req.body.name,
        phone: req.body.phone
    });

    phone.save(function(error) {
        if(error) {
            return next(error)
        }
        res.send('Saved Successfully');
    });
}