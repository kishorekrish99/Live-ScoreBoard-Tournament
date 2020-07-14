package com.scoreboard.BoardAPI.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="score")
public class Score {
	@Id
	@GeneratedValue
    private Integer id;
	
	private String name;
	private String status;
	private Integer runs;
	private Integer four;
	private Integer six;
	private Double sr;
	private Integer total;
	
	public Score() {
		  
	}

	@Override
	public String toString() {
		return "Score [id=" + id + ", name=" + name + ", status=" + status + ", runs=" + runs + ", four=" + four
				+ ", six=" + six + ", sr=" + sr + ", total=" + total + "]";
	}

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getRuns() {
		return runs;
	}

	public void setRuns(Integer runs) {
		this.runs = runs;
	}

	public Integer getFour() {
		return four;
	}

	public void setFour(Integer four) {
		this.four = four;
	}

	public Integer getSix() {
		return six;
	}

	public void setSix(Integer six) {
		this.six = six;
	}

	public Double getSr() {
		return sr;
	}

	public void setSr(Double sr) {
		this.sr = sr;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Score(int i, String name, String status, Integer runs, Integer four, Integer six, Double j,
			Integer total) {
		super();
		this.id = i;
		this.name = name;
		this.status = status;
		this.runs = runs;
		this.four = four;
		this.six = six;
		this.sr = j;
		this.total = total;
	}
	
	
	
}
