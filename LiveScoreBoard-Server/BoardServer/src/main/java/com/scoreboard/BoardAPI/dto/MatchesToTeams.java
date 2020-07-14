package com.scoreboard.BoardAPI.dto;


import com.scoreboard.BoardAPI.entity.matchs;

public class MatchesToTeams {
	private matchs matchs;
	public MatchesToTeams() {
		
	}
	public matchs getMatchs() {
		return matchs;
	}
	public void setMatchs(matchs matchs) {
		this.matchs = matchs;
	}
	@Override
	public String toString() {
		return "MatchesToPlayers [matchs=" + matchs + "]";
	}
	public MatchesToTeams(com.scoreboard.BoardAPI.entity.matchs matchs) {
		super();
		this.matchs = matchs;
	}
	
	
	
}
