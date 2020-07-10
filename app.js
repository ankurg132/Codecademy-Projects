const team = {
  _players:[{  firstName: 'Pablo',
             lastName: 'Sanchez',
              age: 11
    }],
  _games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){

    player= {firstName:firstName,lastName:lastName,age:age};
    this._players.push(player);
  },
  addGame(oppName,teamPoint,oppPoint){
    const game= {
      opponent:oppName,teamPoints:teamPoint,opponentPoints:oppPoint
    };
    this._games.push(game);
  }
}
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('Pagal',10,20);
team.addGame('Gadha',15,16);
team.addGame('Ullu',100,200);
console.log(team.games);