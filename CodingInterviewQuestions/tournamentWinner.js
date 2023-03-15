function tournamentWinner(competitions, results) {
    let tournament_winner = '';
    const HOME_TEAM_WON = 1;
    const scoreboard = {[tournament_winner]: 0};
    
    for(let idx=0; idx<competitions.length; ++idx){
      const [HOME_TEAM, AWAY_TEAM] = competitions[idx];
      const result = results[idx];
      
      const winner = result === HOME_TEAM_WON ? HOME_TEAM : AWAY_TEAM;
      
      update_scoreboard(winner, scoreboard);
      
      if(scoreboard[winner] > scoreboard[tournament_winner]){
        tournament_winner = winner;
      }
    }
    
    console.log(scoreboard);
    
    return tournament_winner;
  }
  
  function update_scoreboard(team, scoreboard){
    const POINTS = 3;
    if(!(team in scoreboard)){
      scoreboard[team] = 0;
    }
    scoreboard[team] += POINTS;
  }
  
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;