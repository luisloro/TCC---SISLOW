package com.aplicacao.sislow.model.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.DeleteMapping;
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Emprestimo;
import com.aplicacao.sislow.model.Equipamento;
import com.aplicacao.sislow.repositry.EmprestimoRepository;
import com.aplicacao.sislow.repositry.EquipamentoRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class EquipamentoController {
	
	@Autowired
	EmprestimoRepository emprestimoRepository;
	@Autowired
	EquipamentoRepository equipamentoRepository;
	
<<<<<<< HEAD
	
	@Transactional
	@GetMapping("/todosequip")
	public List<Equipamento> getTodosEquips(){
		return equipamentoRepository.findAll();
	}
=======
	/*
	@Transactional
	@GetMapping("/equipamento")
	public List<Equipamento> getEmprestimos(){
		return equipamentoRepository.findAll();
	}*/
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
	/*
	@PostMapping("/cadequip")
	public Equipamento saveEmprestimo(@RequestBody Equipamento equipamento) {
		return equipamentoRepository.save(equipamento);
	}*/

	@Transactional
	@PostMapping("/cadequip")
	public ResponseEntity<Equipamento> cadastraEmprestimo(
		@RequestParam(value="modelo") String modelo,
		@RequestParam(value="marca")String marca,
		@RequestParam(value="tipo")String tipo,
		@RequestParam(value="serial") String serial
			) {
		Equipamento novoequipamento = new Equipamento();
		
		novoequipamento.setModelo(modelo);
		novoequipamento.setMarca(marca);
		novoequipamento.setTipo(tipo);
		novoequipamento.setEmprestado(false);
		novoequipamento.setSerial(serial);
		equipamentoRepository.save(novoequipamento);
		return ResponseEntity.ok(novoequipamento);
	}
	
<<<<<<< HEAD
	@GetMapping("/equip/{id}")
	public ResponseEntity<Equipamento> clienteById(@PathVariable Long id) {
		Equipamento equipamento = equipamentoRepository.findById(id).get();
		return ResponseEntity.ok(equipamento);
	}
	
	@Transactional
	@PostMapping("/editequip")
	public ResponseEntity<Equipamento> atualizaEquipamento(
			@RequestParam(value="modelo") String modelo,
			@RequestParam(value="marca")String marca,
			@RequestParam(value="tipo")String tipo,
			@RequestParam(value="serial") String serial,
			@RequestParam(value="idEquipamento") String idEquipamento
				) {

		
		Long id = Long.parseLong(idEquipamento);
		

		Equipamento equipamento = equipamentoRepository.findById(id).get();
		equipamento.setModelo(modelo);
		equipamento.setMarca(marca);
		equipamento.setTipo(tipo);
		equipamento.setSerial(serial);
		equipamentoRepository.save(equipamento);
		return ResponseEntity.ok(equipamento);
	}
	
	@DeleteMapping("/excluiequip/{id}")
	public void deletaEquipamento(@PathVariable Long id) {
		equipamentoRepository.deleteById(id);
	}
=======
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6
	
}
