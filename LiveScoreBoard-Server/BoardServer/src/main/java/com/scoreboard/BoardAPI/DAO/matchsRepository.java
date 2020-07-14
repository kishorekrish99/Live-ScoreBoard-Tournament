package com.scoreboard.BoardAPI.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scoreboard.BoardAPI.entity.matchs;

public interface matchsRepository extends JpaRepository<matchs,Integer>{

}
