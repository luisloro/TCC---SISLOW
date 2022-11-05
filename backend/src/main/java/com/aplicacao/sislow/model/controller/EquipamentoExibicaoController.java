package com.aplicacao.sislow.model.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.Equipamento;
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
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
<<<<<<< HEAD
	
	@Transactional
	@PostMapping("/cadequipexib")
	public ResponseEntity<EquipamentoExibicao> cadastraEmprestimo(
		@RequestParam(value="modelo") String modelo,
		@RequestParam(value="marca")String marca,
		@RequestParam(value="tipo")String tipo
			) {
		EquipamentoExibicao novoequipamento = new EquipamentoExibicao();
		
		novoequipamento.setModelo(modelo);
		novoequipamento.setMarca(marca);
		novoequipamento.setTipo(tipo);
		repository.save(novoequipamento);
		return ResponseEntity.ok(novoequipamento);
	}
	
	@Transactional
	@PostMapping("/editequipexib")
	public ResponseEntity<EquipamentoExibicao> atualizaEquipamento(
			@RequestParam(value="modelo") String modelo,
			@RequestParam(value="marca")String marca,
			@RequestParam(value="tipo")String tipo,
			@RequestParam(value="idEquipamento") String idEquipamento
				) {

		
		Long id = Long.parseLong(idEquipamento);
		

		EquipamentoExibicao equipamento = repository.findById(id).get();
		equipamento.setModelo(modelo);
		equipamento.setMarca(marca);
		equipamento.setTipo(tipo);
		repository.save(equipamento);
		return ResponseEntity.ok(equipamento);
	}
	
	@GetMapping("/equipexib/{id}")
	public ResponseEntity<EquipamentoExibicao> clienteById(@PathVariable Long id) {
		EquipamentoExibicao equipamento = repository.findById(id).get();
		return ResponseEntity.ok(equipamento);
	}
	
	@DeleteMapping("/excluiequipexib/{id}")
	public void deletaEquipamento(@PathVariable Long id) {
		repository.deleteById(id);
	}
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

}
