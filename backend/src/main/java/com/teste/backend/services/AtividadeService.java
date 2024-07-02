package com.teste.backend.services;


import com.teste.backend.dto.AtividadeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // Import correto

import com.teste.backend.entities.Atividade;
import com.teste.backend.repository.RepositoryAtividade;

@Service
public class AtividadeService {
    @Autowired
    public RepositoryAtividade repository;

    @Transactional
    public Page<AtividadeDto> findAll(Pageable pageable){
        Page<Atividade> atividades = repository.findAll(pageable);
        return atividades.map((att) -> new AtividadeDto(att));
    }

    @Transactional
    public AtividadeDto saveAtividade(AtividadeDto att){
        Atividade atividade = new Atividade();
        atividade.setNome(att.getNome());
        atividade.setDescription(att.getDescription());
        atividade = repository.save(atividade);
        return  new AtividadeDto(atividade);
    }

    @Transactional
    public AtividadeDto updateAtividade(Long id, AtividadeDto att){
        Atividade atividade = repository.getOne(id);
        atividade.setNome(att.getNome());
        atividade.setDescription(att.getDescription());
        atividade = repository.save(atividade);
        return new AtividadeDto(atividade);
    }

    @Transactional
    public void deleteAtividade(Long id){
        repository.deleteById(id);
    }


}
