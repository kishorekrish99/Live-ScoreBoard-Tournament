package com.scoreboard.BoardAPI.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.scoreboard.BoardAPI.DAO.ScoreRepository;
import com.scoreboard.BoardAPI.entity.Score;

@Service
public class ScoreServiceImpl implements ScoreService {
	@Autowired
	private ScoreRepository scorerepository;
	
	@Override
	public ResponseEntity getallscores() throws Exception {
				
        List<Score> players = new ArrayList();
	
		String s= "playing";
		
		
		List<Score> allplayers ;
		
		try {
			
		    allplayers=scorerepository.findAll();
		    
		}catch(Exception e) {
			
			throw e;
			
		}
		
		
		if(allplayers.size()==0) {
			  return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		
		
	    for(Score score: allplayers){
	    		    	
	       if(score.getStatus().equals("playing")) {
	    	   players.add(score);
	    	   System.out.println(score.getStatus());
	       }
	    	
	    }
	    
	    if(players.size()==0) {
	    	return new ResponseEntity(HttpStatus.NOT_FOUND);
	    }
	    
	    return new ResponseEntity(players, HttpStatus.OK);
	    
	}

	@Override
	public ResponseEntity getleftplayers() throws Exception {

	    List<String> allnames = new ArrayList<String>();
	    
	    List<Score> allplayers;
	    
	    try {
	       allplayers = scorerepository.findAll();
	    }catch(Exception e) {
	    	throw e;
	    }
	    

	    
	    for(Score score: allplayers) {
	    	if(score.getStatus().equals("not out")) {
	    		allnames.add(score.getName());
	    	}
	    }
	    
	    if(allnames.size()==0) return new ResponseEntity(HttpStatus.NOT_FOUND);
		
		return new ResponseEntity(allnames,HttpStatus.OK);
	}

	@Override
	public void saveplayer(Score score) throws Exception{
		System.out.println(score);
		try {
	        scorerepository.save(score);
		}catch(Exception e) {
			
		}
		
	}
	
	

	@Override
	public ResponseEntity getplayer(String name) throws Exception{


       List<Score> x;
		
		try {
		  x = scorerepository.findAll();
		}catch(Exception e) {
			throw e;
		}
	
		Integer flag=0;
		for(Score score: x) {
			if(score.getName().equals(name)){
				score.setStatus("playing");
				flag=1;
				try {
				    scorerepository.save(score);
				}catch(Exception e) {throw e;}
				return new ResponseEntity(score, HttpStatus.OK);
			}
		}
		
		if(flag==0) {return new ResponseEntity(HttpStatus.NOT_FOUND);}
		
		return null;
		
	}

	@Override
	public boolean isout(int id) {
		Score score = scorerepository.findById(id).get();
		if(score.getStatus().equals("out"))
			return true;
		else return false;
		
	}

	@Override
	public ResponseEntity chartdetails() throws Exception{

       Map<String, List<Object>> map = new HashMap<>();
		
		
		
		List<Object> m,n,o,p,q = new ArrayList();
		
		try {
		
		m = scorerepository.findnames();
		n=scorerepository.findruns();
		o=scorerepository.findfours();
		p=scorerepository.findsix();
		q=scorerepository.findtotal();
		
		}catch(Exception e) {throw e;}		
		
		
		if(m.size()==0) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		
		
		map.put("names",m);
		map.put("runs", n);
		map.put("fours",o);
		map.put("six",p);
		map.put("total",q);
		
		return new ResponseEntity(map,HttpStatus.OK);
	}

	@Override
	public ResponseEntity bettingscorecard() throws Exception{
//		

		return new ResponseEntity(scorerepository.findAll(),HttpStatus.OK);
				
	}
	
	
	
	
	
}
