package com.teste.backend.dto;

import com.teste.backend.entities.Atividade;

public class AtividadeDto {

    private Long id;
    private String nome;
    private String description;

    public AtividadeDto(Long id, String nome, String description) {
        this.id = id;
        this.nome = nome;
        this.description = description;
    }

    public AtividadeDto() {
    }

    public AtividadeDto(Atividade entity) {
        id = entity.getId();
        nome = entity.getNome();
        description = entity.getDescription();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescription() {
        return description;
    }
}
