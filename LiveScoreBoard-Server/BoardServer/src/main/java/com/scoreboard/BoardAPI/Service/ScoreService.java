package com.scoreboard.BoardAPI.Service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import com.scoreboard.BoardAPI.entity.Score;

public interface ScoreService {

	public ResponseEntity getallscores() throws Exception;

	public ResponseEntity getleftplayers() throws Exception;

	public void saveplayer(Score score) throws Exception;

	public ResponseEntity getplayer(String name) throws Exception;

	public boolean isout(int id);

	public ResponseEntity chartdetails() throws Exception;

	public ResponseEntity bettingscorecard() throws Exception;

	

}
