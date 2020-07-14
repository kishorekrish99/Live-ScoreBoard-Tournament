package com.scoreboard.BoardAPI.Service;

import java.util.List;

import com.scoreboard.BoardAPI.dto.TeamToPlayers;
import com.scoreboard.BoardAPI.entity.team;

public interface TeamService {

	public team placeTeams(TeamToPlayers request);

	public List<team> findAllTeams();

	

	

}
