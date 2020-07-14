package com.scoreboard.BoardAPI.TeamsServiceTest;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import com.scoreboard.BoardAPI.DAO.teamRepository;
import com.scoreboard.BoardAPI.Service.TeamServiceImpl;
import com.scoreboard.BoardAPI.entity.players;
import com.scoreboard.BoardAPI.entity.team;



@ExtendWith(SpringExtension.class)
@SpringBootTest
class TeamsServiceTest {
	
	@Autowired
	private TeamServiceImpl teamservice;

	@MockBean
	private teamRepository teamrepository;
	
	@Test
	public void placeteamstest() {
		
		players p1 = new players("Kishore");
		players p2 = new players("Rahul Krishna");
		players p3 = new players("Raghuvaran");
		
		List<players> play = new ArrayList();
		play.add(p1);
		play.add(p2);
		play.add(p3);
		team teamtest = new team("Achievers","Kishore","Rahul",play);
	    
		teamrepository.save(teamtest);
		
		verify(teamrepository,times(1)).save(teamtest);
		
		
	}
	
	@Test
	public void findallteamstest() {
		
		players p1 = new players("Kishore");
		players p2 = new players("Rahul Krishna");
		players p3 = new players("Raghuvaran");
		players p4 = new players("Rajendhar");
		players p5 = new players("Shashi");
		players p6 = new players("Karthik");
		
		
		List<players> playerslistone = new ArrayList();
		playerslistone.add(p1);
		playerslistone.add(p2);
		playerslistone.add(p3);
		
		List<players> playerslisttwo = new ArrayList();
		playerslisttwo.add(p4);
		playerslisttwo.add(p5);
		playerslisttwo.add(p6);
		
		
		team teamtest = new team("Achievers","Kishore","Rahul",playerslistone);
		
		Mockito.when(teamrepository.findAll()).thenReturn(Stream.of(new team("Achievers","Kishore","Rahul",playerslistone),new team("Nexus","Narender","Naveen",playerslisttwo)).collect(Collectors.toList()));
		
		assertEquals(2,teamservice.findAllTeams().size());
		
		
	}
    

}
