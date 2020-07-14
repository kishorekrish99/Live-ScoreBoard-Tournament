package com.scoreboard.BoardAPI.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scoreboard.BoardAPI.DAO.teamRepository;
import com.scoreboard.BoardAPI.dto.TeamToPlayers;
import com.scoreboard.BoardAPI.entity.team;

@Service
public class TeamServiceImpl implements TeamService{
	
	@Autowired
	private teamRepository teamrepository;
	
	@Override
	@Transactional
	public team placeTeams(TeamToPlayers request) {
		return teamrepository.save(request.getTeam());
	}

	@Override
	@Transactional
	public List<team> findAllTeams() {
		return teamrepository.findAll();
	}

	
	
}
