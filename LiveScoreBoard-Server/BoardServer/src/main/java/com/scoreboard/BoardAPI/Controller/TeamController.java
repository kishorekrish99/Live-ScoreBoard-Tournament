package com.scoreboard.BoardAPI.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scoreboard.BoardAPI.Service.TeamService;
import com.scoreboard.BoardAPI.dto.TeamToPlayers;
import com.scoreboard.BoardAPI.entity.team;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class TeamController {
	
	@Autowired
	private TeamService teamservice;
	
	@PostMapping("/team")
	public team placeTeams(@RequestBody TeamToPlayers request) {
		return teamservice.placeTeams(request);
	}
	
	@GetMapping("/team")
	public List<team> findAllTeams(){
		return teamservice.findAllTeams();
	}
	
//	@DeleteMapping("/team/{id}")
//	public String removeid(@PathVariable int id) {
//		return teamservice.removeid(id);
//	}
}
