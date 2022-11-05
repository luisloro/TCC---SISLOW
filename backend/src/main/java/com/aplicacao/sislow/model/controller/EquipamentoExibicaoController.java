package com.aplicacao.sislow.model.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.EquipamentoExibicao;
import com.aplicacao.sislow.repositry.EquipamentoExibicaoRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class EquipamentoExibicaoController {
	
	@Autowired
	EquipamentoExibicaoRepository repository;
	
	@GetMapping("/equipexib")
	public List<EquipamentoExibicao> getEquipamentos() {
		return repository.findAll();
	}

}
