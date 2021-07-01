const express = require('express');
const User = require('../user');
const db = require('../db');

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log(req.body);
    const user = new User({
        ...req.body

    });
    user.save()    
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));

});

router.delete('/', (req, res, next) => {
    const user = new User({

        email: "test@gmail.com",
        
    });
    User.deleteOne({"email" : user.email})    
      .then(() => res.status(201).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));

});


router.get('/', (req, res, next) => {
    User.find() 
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
});



module.exports = router;
