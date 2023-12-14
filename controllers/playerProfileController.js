const PlayerProfile = require('../models/playerProfile');

exports.postAddPlayer = (req, res, next) => {
  console.log('Received form data:', req.body);
  const {
    name,
    dateOfBirth,
    photo,
    birthPlace,
    career,
    matches,
    score,
    fifties,
    centuries,
    wickets,
    average
  } = req.body;

  PlayerProfile.create({
    name,
    dateOfBirth,
    photo,
    birthPlace,
    career,
    matches,
    score,
    fifties,
    centuries,
    wickets,
    average
  })
    .then(result => {
      console.log('Created player profile');
      // res.redirect('/');
      res.redirect(`/playerDetails?name=${name}`);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
};

exports.getPlayerDetails = (req, res, next) => {
  const playerName = req.query.searchName;

  // Fetch player details from the database based on the player's name
  PlayerProfile.findOne({
      where: { name: playerName }
  })
    .then(player => {
        if (!player) {
            res.status(404).send('Player not found');
            return;
        }

        // Render playerDetails.ejs and pass player details
        res.render('playerDetails', { player });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });
};

exports.getEditPlayer = (req, res, next) => {
  const pId = req.query.playerId;

  // Fetch player details from the database based on the player's Id
  PlayerProfile.findOne({
    where: { id: pId }
  })
    .then(player => {
      if (!player) {
        // Player not found
        res.status(404).send('Player not found');
        return;
      }

      // Render the editPlayer form and pass player details
      res.render('editPlayer', { player });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
};


exports.postEditPlayer = (req, res, next) => {
  const playerId = parseInt(req.body.playerId, 10); 
  const updatedName = req.body.name;
  const updatedDateOfBirth = req.body.dateOfBirth;
  const updatedPhoto = req.body.photo;
  const updatedBirthPlace = req.body.birthPlace;
  const updatedCareer = req.body.career;
  const updatedMatches = req.body.matches;
  const updatedScore = req.body.score;
  const updatedFifties = req.body.fifties;
  const updatedCenturies = req.body.centuries;
  const updatedAvg = req.body.average;
  const updatedWickets = req.body.wickets;

  PlayerProfile.findByPk(playerId)
    .then(player => {
      player.name = updatedName;
      player.photo = updatedPhoto;
      player.dateOfBirth = updatedDateOfBirth;
      player.birthPlace = updatedBirthPlace;
      player.career = updatedCareer;
      player.matches = updatedMatches;
      player.score = updatedScore;
      player.fifties = updatedFifties;
      player.centuries = updatedCenturies;
      player.average = updatedAvg;
      player.wickets = updatedWickets;

      return player.save();
    })
    .then(result => {
      console.log('PLAYER DETAILS UPDATED!');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
