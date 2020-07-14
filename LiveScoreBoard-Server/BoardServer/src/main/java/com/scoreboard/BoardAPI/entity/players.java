package com.scoreboard.BoardAPI.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="players")
public class players {
	@Id
	@GeneratedValue
	private int player_id;
	private String player_name;
	
	public players() { 
		
	}
	public int getPlayer_id() {
		return player_id;
	}
	public void setPlayer_id(int player_id) {
		this.player_id = player_id;
	}
	public String getPlayer_name() {
		return player_name;
	}
	public void setPlayer_name(String player_name) {
		this.player_name = player_name;
	}
	@Override
	public String toString() {
		return "players [player_id=" + player_id + ", player_name=" + player_name + "]";
	}
	public players(String player_name) {
		this.player_name = player_name;
	}
	
}
