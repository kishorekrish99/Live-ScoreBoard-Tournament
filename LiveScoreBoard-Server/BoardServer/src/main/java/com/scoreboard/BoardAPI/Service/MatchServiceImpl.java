package com.scoreboard.BoardAPI.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scoreboard.BoardAPI.DAO.matchsRepository;
import com.scoreboard.BoardAPI.dto.MatchesToTeams;
import com.scoreboard.BoardAPI.entity.matchs;

@Service
public class MatchServiceImpl implements MatchService {
	
	
	@Autowired
	private matchsRepository matchsrepository;

	@Override
	@Transactional
	public matchs getMatches(MatchesToTeams matchs) {
		return matchsrepository.save(matchs.getMatchs());
	}

	@Override
	@Transactional
	public List<matchs> getall() {
		
		return matchsrepository.findAll();
	}

	@Override
	@Transactional
	public matchs getbyid(int id) {
		
		Optional<matchs> result = matchsrepository.findById(id);
		matchs matchs=null;
		if(result.isPresent()) {
			matchs=result.get();
		}else {
			throw new RuntimeException("Employee id not foundd "+id);
		}	
		return matchs;
	}	
}
 
