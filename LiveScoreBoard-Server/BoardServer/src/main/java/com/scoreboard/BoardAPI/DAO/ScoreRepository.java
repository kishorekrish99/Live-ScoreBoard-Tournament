package com.scoreboard.BoardAPI.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.scoreboard.BoardAPI.entity.Score;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel="score",path="score")
public interface ScoreRepository extends JpaRepository<Score, Integer> {
	public static final String findnames = "SELECT name FROM score";
	public static final String runs = "SELECT runs FROM score";
	public static final String fours = "SELECT four FROM score";
	public static final String six = "SELECT six FROM score";
	public static final String total = "SELECT total FROM score";
	
	@Query(value = findnames, nativeQuery = true)
	public List<Object> findnames();
	
	@Query(value=runs, nativeQuery=true)
	public List<Object> findruns();
	
	@Query(value=fours, nativeQuery=true)
	public List<Object> findfours();
	
	@Query(value=six, nativeQuery=true)
	public List<Object> findsix();
	
	
	@Query(value=total, nativeQuery=true)
	public List<Object> findtotal();
}
