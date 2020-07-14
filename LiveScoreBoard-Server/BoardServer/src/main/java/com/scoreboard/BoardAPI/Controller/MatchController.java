package com.scoreboard.BoardAPI.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scoreboard.BoardAPI.Service.MatchService;
import com.scoreboard.BoardAPI.dto.MatchesToTeams;
import com.scoreboard.BoardAPI.entity.matchs;

@RestController

@CrossOrigin(origins="http://localhost:4200")
public class MatchController {
		
	@Autowired
	private MatchService matchservice;
	
	@PostMapping("/matches")
	public matchs getMatches(@RequestBody MatchesToTeams matchs) {
		return matchservice.getMatches(matchs);
	}
	
	@GetMapping(("/matches"))
	public List<matchs> getall(){
		return matchservice.getall();
	}
	
	@GetMapping("/matches/{id}")
	public matchs getbyid(@PathVariable int id) {
		return matchservice.getbyid(id);
	} 
	
	
}
