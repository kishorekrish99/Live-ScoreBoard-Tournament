package com.scoreboard.BoardAPI.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.scoreboard.BoardAPI.entity.players;

public interface playersRepository extends JpaRepository<players, Integer> {

}
