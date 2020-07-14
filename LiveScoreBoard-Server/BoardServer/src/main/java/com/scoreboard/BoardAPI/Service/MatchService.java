package com.scoreboard.BoardAPI.Service;

import java.util.List;

import com.scoreboard.BoardAPI.dto.MatchesToTeams;
import com.scoreboard.BoardAPI.entity.matchs;
import com.scoreboard.BoardAPI.entity.team;

public interface MatchService {

	public matchs getMatches(MatchesToTeams matchs);

	public List<matchs> getall();

	public matchs getbyid(int id);

	

	

}
