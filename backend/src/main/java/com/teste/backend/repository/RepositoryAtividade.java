package com.teste.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.backend.entities.Atividade;

public interface RepositoryAtividade extends JpaRepository<Atividade, Long> {
  
}
