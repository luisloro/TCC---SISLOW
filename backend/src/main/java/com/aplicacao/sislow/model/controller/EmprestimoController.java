package com.aplicacao.sislow.model.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Emprestimo;
import com.aplicacao.sislow.model.Equipamento;
import com.aplicacao.sislow.repositry.ClienteRepository;
import com.aplicacao.sislow.repositry.EmprestimoRepository;
import com.aplicacao.sislow.repositry.EquipamentoRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class EmprestimoController {
	

	@Autowired
	EmprestimoRepository repository;
	
	@Autowired
	ClienteRepository clienterepository;
	
	@Autowired
	EquipamentoRepository equipamentoRepository;
	
	Set<Equipamento> listaEquipamento = new HashSet<Equipamento>();
	private List<Equipamento> listatemp = new ArrayList<Equipamento>();
	
	
	
	@Transactional
	@GetMapping("/equipamento")
	public List<Equipamento> getEquipamentos(){
		listatemp= equipamentoRepository.findAll();
		listaEquipamento.clear();
		return listatemp;
	}
	
	@Transactional
	@GetMapping("/equipamento2")
	public List<Equipamento> getEquipamentos2(){
		return listatemp;
	}
	
	@Transactional
	@PostMapping("/removeequip")
	public List<Equipamento> removeEquipamento(
			@RequestParam(value="id") String idEquipamento){
		Long id = Long.parseLong(idEquipamento);
		Equipamento equipamento = equipamentoRepository.findById(id).get();
		for(Equipamento equip :listatemp ) {
			if(equip.getId().equals(id)) {
				listatemp.remove(equip);
				return listatemp;
			}
		}
		
		return listatemp;
	}
	
	@Transactional
	@GetMapping("/emprestimo")
	public List<Emprestimo> getEmprestimos(){
		return repository.findAll();
	}
	
	@PostMapping("/cademp")
	public Emprestimo saveEmprestimo(@RequestBody Emprestimo emprestimo) {
		return repository.save(emprestimo);
	}
	
	
	@Transactional
	@PostMapping("/cademprestimo")
	public ResponseEntity<Emprestimo> cadastraEmprestimo(
		@RequestParam(value="idCliente") String idCliente,
		@RequestParam(value="valor")String valoremprestimo,
		@RequestParam(value="datainicio")String datainicio,
		@RequestParam(value="datafim")String datafim
			) {
		Float valor = Float.parseFloat(valoremprestimo);
		Long id = Long.parseLong(idCliente);
		//Long  equipamentoId = Long.parseLong(idEquipamento);
		LocalDate inicio = LocalDate.parse(datainicio);
		LocalDate fim = LocalDate.parse(datafim);
		
		Cliente cliente= clienterepository.findById(id).get();
		//Equipamento equip = equipamentoRepository.findById(equipamentoId).get();
		//Set<Equipamento> equipamento = new HashSet<Equipamento>();
		//equipamento.add(equip);
		Emprestimo novoemprestimo = new Emprestimo();
		
		novoemprestimo.setValor(valor);
		novoemprestimo.setCliente(cliente);
		//novoemprestimo.setEquipamento(equipamento);
		novoemprestimo.setEquipamento(listaEquipamento);
		novoemprestimo.setDatainicio(inicio);
		novoemprestimo.setDatafim(fim);
	    repository.save(novoemprestimo);
		return ResponseEntity.ok(novoemprestimo);
	}
	
	
	@PostMapping("/cad/{valor}/{id}")
	public  ResponseEntity<Emprestimo> cadastraEmprestimoe(@PathVariable Float valor,@PathVariable Long id) {
		
		Cliente cliente= clienterepository.findById(id).get();
		Emprestimo novoemprestimo = new Emprestimo();
		novoemprestimo.setValor(valor);
		novoemprestimo.setCliente(cliente);
	    repository.save(novoemprestimo);
		return ResponseEntity.ok(novoemprestimo);
	}
	
	@PostMapping("/addequip")
	public void adicionaEquipamento(
			@RequestParam(value="idEquipamento") String idEquipamento){
			Long id = Long.parseLong(idEquipamento);
			Equipamento equipamento = equipamentoRepository.findById(id).get();
			listaEquipamento.add(equipamento);
	}
	
	@GetMapping("/listatemp")
	public  ResponseEntity<Set<Equipamento>> listatemp(){
		return ResponseEntity.ok(listaEquipamento);
	}
	
}
