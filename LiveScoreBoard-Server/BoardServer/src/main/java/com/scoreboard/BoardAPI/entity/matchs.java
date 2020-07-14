package com.scoreboard.BoardAPI.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.springframework.beans.factory.annotation.Autowired;

import com.scoreboard.BoardAPI.dto.TeamToPlayers;



@Entity
public class matchs {
	
	@Id
	@GeneratedValue
	private int match_id;
	private String toss;
	private int overs;
	 @OneToMany(targetEntity = team.class,cascade = CascadeType.ALL)
	 @JoinColumn(name ="mt_fk",referencedColumnName = "match_id")
	private List<team> team;
	public matchs() { 
		
	}
	public int getMatch_id() {
		return match_id;
	}
	public void setMatch_id(int match_id) {
		this.match_id = match_id;
	}
	public String getToss() {
		return toss;
	}
	public void setToss(String toss) {
		this.toss = toss;
	}
	public int getOvers() {
		return overs;
	}
	public void setOvers(int overs) {
		this.overs = overs;
	}
	public List<team> getTeam() {
		return team;
	}
	public void setTeam(List<team> team) {
		this.team = team;
	}
	@Override
	public String toString() {
		return "matchs [match_id=" + match_id + ", toss=" + toss + ", overs=" + overs + ", team=" + team + "]";
	}
	public matchs(String toss, int overs, List<com.scoreboard.BoardAPI.entity.team> team) {
		super();
		this.toss = toss;
		this.overs = overs;
		this.team = team;
	}
	

}
