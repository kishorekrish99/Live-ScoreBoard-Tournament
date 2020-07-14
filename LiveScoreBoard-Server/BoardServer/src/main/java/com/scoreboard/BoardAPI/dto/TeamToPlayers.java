package com.scoreboard.BoardAPI.dto;

import com.scoreboard.BoardAPI.entity.team;

public class TeamToPlayers {
	private team team;
	
	public TeamToPlayers() {
		
	}

	public team getTeam() {
		return team;
	}

	public void setTeam(team team) {
		this.team = team;
	}

	@Override
	public String toString() {
		return "TeamToPlayers [team=" + team + "]";
	}

	public TeamToPlayers(com.scoreboard.BoardAPI.entity.team team) {
		super();
		this.team = team;
	}
	
	
}
