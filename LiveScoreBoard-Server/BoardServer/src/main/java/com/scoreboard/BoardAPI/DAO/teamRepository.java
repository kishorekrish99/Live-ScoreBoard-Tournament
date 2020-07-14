package com.scoreboard.BoardAPI.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scoreboard.BoardAPI.entity.team;

public interface teamRepository extends JpaRepository<team, Integer> {

}
