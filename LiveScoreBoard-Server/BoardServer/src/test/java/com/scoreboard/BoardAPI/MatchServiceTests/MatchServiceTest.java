package com.scoreboard.BoardAPI.MatchServiceTests;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.scoreboard.BoardAPI.DAO.matchsRepository;
import com.scoreboard.BoardAPI.Service.MatchServiceImpl;
import com.scoreboard.BoardAPI.dto.MatchesToTeams;
import com.scoreboard.BoardAPI.entity.matchs;
import com.scoreboard.BoardAPI.entity.players;
import com.scoreboard.BoardAPI.entity.team;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class MatchServiceTest {

	@Autowired
	private MatchServiceImpl matchservice;
	
	@MockBean
	private matchsRepository matchrepository;
	
	private List<players> playerslistone = new ArrayList();
	private List<players> playerslisttwo = new ArrayList();
	players p1 = new players("Kishore");
	players p2 = new players("Rahul Krishna");
	players p3 = new players("Raghuvaran");
	players p4 = new players("Rajendhar");
	players p5 = new players("Shashi");
	players p6 = new players("Karthik");
	
	

	@Test
	public void savematchtest() {
		
		playerslistone.add(p1);
		playerslistone.add(p2);
		playerslistone.add(p3);
		
		
		playerslisttwo.add(p4);
		playerslisttwo.add(p5);
		playerslisttwo.add(p6);
		
		
		team teamtestone = new team("Achievers","Kishore","Rahul",playerslistone);
		
		team teamtesttwo = new team("Strivers","Nagendra","Ramu",playerslisttwo);
		
		
		List<team> teamslist = new ArrayList();
		
		teamslist.add(teamtestone);
		teamslist.add(teamtesttwo);
		
		
		matchs match = new matchs("teamA",5,teamslist);
		
		MatchesToTeams match2teams = new MatchesToTeams(match);
		
		Mockito.when(matchrepository.save(match)).thenReturn(match);
		
		assertEquals(match,matchservice.getMatches(match2teams));
		
		
	}
	
	
	
	@Test
	public void getallmatchestest() {
		
		playerslistone.add(p1);
		playerslistone.add(p2);
		playerslistone.add(p3);
		
		
		playerslisttwo.add(p4);
		playerslisttwo.add(p5);
		playerslisttwo.add(p6);
		
		
		team teamtestone = new team("Achievers","Kishore","Rahul",playerslistone);
		
		team teamtesttwo = new team("Strivers","Nagendra","Ramu",playerslisttwo);
		
		
		List<team> teamslist = new ArrayList();
		
		teamslist.add(teamtestone);
		teamslist.add(teamtesttwo);
		
		List<matchs> matcheslist = new ArrayList();
		
		matchs match = new matchs("teamA",5,teamslist);
		
		matcheslist.add(match);
		
		Mockito.when(matchrepository.findAll()).thenReturn(matcheslist);
		
		assertEquals(1,matchservice.getall().size());
		
	}
	
	
	
	

}