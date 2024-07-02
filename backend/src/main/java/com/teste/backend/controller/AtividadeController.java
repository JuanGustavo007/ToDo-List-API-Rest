package com.teste.backend.controller;

import com.teste.backend.dto.AtividadeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.teste.backend.entities.Atividade;
import com.teste.backend.services.AtividadeService;



@RestController
@RequestMapping(value="/atividade")
public class AtividadeController {
    @Autowired
    private AtividadeService atividadeService;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public Page<AtividadeDto> getAtividades(Pageable pageable) {
          Page<AtividadeDto> atividades =  atividadeService.findAll(pageable);
          return atividades;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public ResponseEntity<AtividadeDto> postMethodName(@RequestBody AtividadeDto entity) {
          //TODO: process POST request
          AtividadeDto atividade = atividadeService.saveAtividade(entity);
          return ResponseEntity.ok(atividade);
      }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/{id}")
    public ResponseEntity<AtividadeDto> putMethodName(@PathVariable Long id, @RequestBody AtividadeDto entity) {
            AtividadeDto atividadeDto = atividadeService.updateAtividade(id, entity);
            return ResponseEntity.ok(atividadeDto);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMethodName(@PathVariable Long id) {
            atividadeService.deleteAtividade(id);
            return ResponseEntity.noContent().build();
    }


}
