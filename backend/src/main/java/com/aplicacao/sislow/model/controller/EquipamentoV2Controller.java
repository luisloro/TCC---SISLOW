package com.aplicacao.sislow.model.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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

@RequestMapping("api/v2/equipamento")
public class EquipamentoV2Controller {
	
	@Autowired
	EquipamentoRepository equipamentoRepository;
	
	
	@GetMapping
	public List<Equipamento> getAll(){
		return equipamentoRepository.findAll();
	}
	
	@PostMapping
	public ResponseEntity create(@RequestBody Equipamento equipamento){
		try {
			if(equipamento.getSerial() == "") {
				throw new Exception("Serial não pode ser vazio");
			}
			
			equipamentoRepository.save(equipamento);
			return ResponseEntity.ok(equipamento);
			
		}catch(Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		equipamentoRepository.deleteById(id);
	}
	
}
