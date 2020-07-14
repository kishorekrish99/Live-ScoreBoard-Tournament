package com.scoreboard.BoardAPI.ScoreService;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scoreboard.BoardAPI.DAO.ScoreRepository;
import com.scoreboard.BoardAPI.Service.ScoreServiceImpl;
import com.scoreboard.BoardAPI.entity.Score;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;


import java.util.stream.*;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class ScoreServiceTests {

	
	@Autowired
	private ScoreServiceImpl scoreservice;
	
	@MockBean
	private ScoreRepository repository;
    
	private List<String> allnames = new ArrayList();
	 
	
	private ResponseEntity expected; 
     
	@Test
	public void getallscores_withsomeplayers() throws Exception{
	     
		List<Score> x = Stream.of(new Score(1001,"virat","playing", 9,2,0,1.0,17),new Score(1002,"rahul","playing",24,3,2,2.0,44)).collect(Collectors.toList());
		
		Mockito.when(repository.findAll()).thenReturn(x);
		
		
		expected = new ResponseEntity(x,HttpStatus.OK);
		
		assertEquals(expected, scoreservice.getallscores());
		
		
	}
	
	@Test
	public void getallscores_withzeroplayers() throws Exception {
		
		List<Score> x = Stream.of(new Score(1001,"virat","not out", 9,2,0,1.0,17),new Score(1002,"rahul","not out",24,3,2,2.0,44)).collect(Collectors.toList());
		
		Mockito.when(repository.findAll()).thenReturn(x);
		
		
		expected = new ResponseEntity(HttpStatus.NOT_FOUND);
		
		assertEquals(expected, scoreservice.getallscores());
		
	}
	
	
	@Test
	public void getleftplayerswithsomeplayers() throws Exception{
		
		
		Mockito.when(repository.findAll()).thenReturn(Stream.of(new Score(1001,"virat","not out", 9,2,0,1.0,17),new Score(1002,"rahul","not out",24,3,2,2.0,44)).collect(Collectors.toList()));
		
		allnames.add("virat");
		allnames.add("rahul");
		
		expected = new ResponseEntity(allnames,HttpStatus.OK);
		
		
		
		assertEquals(expected,scoreservice.getleftplayers());
		
	}
	
	
	@Test
	public void getleftplayers_zeroplayers() throws Exception{
           
		Mockito.when(repository.findAll()).thenReturn(Stream.of(new Score(1001,"virat","out", 9,2,0,1.0,17),new Score(1002,"rahul","out",24,3,2,2.0,44)).collect(Collectors.toList()));
        
		expected = new ResponseEntity(HttpStatus.NOT_FOUND);
		
		assertEquals(expected, scoreservice.getleftplayers());
           
	}
	
	@Test
	public void saveplayertest() throws Exception{
		
		Score score = new Score(1001,"Dhoni","out", 9,2,0,1.0,17);
		
		scoreservice.saveplayer(score);
		
		verify(repository,times(1)).save(score);
		
		
	}
	
	@Test
	public void getplayer_found() throws Exception{
		
		Score score = new Score(1001,"Sehwag","not out", 9,2,0,1.0,17);
		
		Mockito.when(repository.findAll()).thenReturn(Stream.of(score).collect(Collectors.toList()));
		
		score.setStatus("playing");
		
		expected = new ResponseEntity(score, HttpStatus.OK);
		
		assertEquals(expected, scoreservice.getplayer("Sehwag"));
		
		verify(repository,times(1)).save(score);
	}
	
	@Test
	public void getplayer_notfound() throws Exception {
	    
        Score score = new Score(1001,"Arjun","not out", 9,2,0,1.0,17);
		
		Mockito.when(repository.findAll()).thenReturn(Stream.of(score).collect(Collectors.toList()));
		
		expected = new ResponseEntity(HttpStatus.NOT_FOUND);
		
		assertEquals(expected, scoreservice.getplayer("Sehwag"));
		
		
		
	}
	
	@Test
    public void isout_yes(){
    	
    	
    	  Score score = new Score(1001,"malik","out", 9,2,0,1.0,17);
    	  
    	  Score scoreone = new Score(1002,"Vamshi","not out", 9,2,0,1.0,17);
    	  Optional<Score> myscore =  
                  Optional.ofNullable(score);   
    	  
    	  Optional<Score> myscoreone = Optional.ofNullable(scoreone);
    	  
    	Mockito.when(repository.findById((int) 1001)).thenReturn(myscore);
    	
    	Mockito.when(repository.findById((int) 1002)).thenReturn(myscoreone);
    	
    	assertEquals(false, scoreservice.isout(1002));
    	
    	assertEquals(true,scoreservice.isout(1001));
    	
    	
    }
	
	@Test
	public void chart_details_found() throws Exception {
		
		List<Object> Names = new ArrayList();
		List<Object> Runs = new ArrayList();
		List<Object> Fours = new ArrayList();
		List<Object> Six = new ArrayList();
		List<Object> Total = new ArrayList();
		
		
		Names.add("Dhoni");
		Runs.add(2);
		Fours.add(3);
		Six.add(1);
		Total.add(20);
		
		Mockito.when(repository.findnames()).thenReturn(Names);
		Mockito.when(repository.findruns()).thenReturn(Runs);
		Mockito.when(repository.findfours()).thenReturn(Fours);
		Mockito.when(repository.findsix()).thenReturn(Six);
		Mockito.when(repository.findtotal()).thenReturn(Total);
		
		Map<String, List<Object>> map = new HashMap<>();
		
		map.put("names",Names);
		map.put("runs", Runs);
		map.put("fours",Fours);
		map.put("six",Six);
		map.put("total",Total);
		
		
		expected = new ResponseEntity(map,HttpStatus.OK);
		
		assertEquals(expected, scoreservice.chartdetails());
		
		
		
	}
	
	@Test
	public void chart_details_notfound() throws Exception {
		
		List<Object> Names = new ArrayList();
		List<Object> Runs = new ArrayList();
		List<Object> Fours = new ArrayList();
		List<Object> Six = new ArrayList();
		List<Object> Total = new ArrayList();
		
		Mockito.when(repository.findnames()).thenReturn(Names);
		Mockito.when(repository.findruns()).thenReturn(Runs);
		Mockito.when(repository.findfours()).thenReturn(Fours);
		Mockito.when(repository.findsix()).thenReturn(Six);
		Mockito.when(repository.findtotal()).thenReturn(Total);
		
		Map<String, List<Object>> map = new HashMap<>();

        expected =new ResponseEntity(HttpStatus.NOT_FOUND);
         
        assertEquals(expected, scoreservice.chartdetails());
		
		
	}
	
	@Test
	public void battingscorecard() throws Exception {
		
		
        List<Score> x = Stream.of(new Score(1001,"virat","out", 9,2,0,1.0,17),new Score(1002,"rahul","not out",24,3,2,2.0,44)).collect(Collectors.toList());
		
		Mockito.when(repository.findAll()).thenReturn(x);
		
		
		expected = new ResponseEntity(x,HttpStatus.OK);
		
		assertEquals(expected, scoreservice.bettingscorecard());
		
	}
	
	
	
	
	
	
	

}
