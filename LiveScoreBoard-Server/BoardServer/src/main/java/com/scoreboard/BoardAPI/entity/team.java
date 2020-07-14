package com.scoreboard.BoardAPI.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="team")
public class team {
	@Id
	@GeneratedValue
	private int team_id;
	private String team_name;
	private String manager;
	private String coach;
	
	@OneToMany(targetEntity = players.class,cascade=CascadeType.ALL)
	@JoinColumn(name="tp_fk",referencedColumnName = "team_id")
	private List<players> players;
	
	public team() {
		
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}

	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public String getCoach() {
		return coach;
	}

	public void setCoach(String coach) {
		this.coach = coach;
	}

	public List<players> getPlayers() {
		return players;
	}

	public void setPlayers(List<players> players) {
		this.players = players;
	}

	@Override
	public String toString() {
		return "team [team_id=" + team_id + ", team_name=" + team_name + ", manager=" + manager + ", coach=" + coach
				+ ", players=" + players + "]";
	}

	public team(String team_name, String manager, String coach, List<com.scoreboard.BoardAPI.entity.players> players) {
		super();
		this.team_name = team_name;
		this.manager = manager;
		this.coach = coach;
		this.players = players;
	}
	
}
