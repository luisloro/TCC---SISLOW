package com.aplicacao.sislow.model.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.aplicacao.sislow.model.Usuario;
import com.aplicacao.sislow.repositry.ClienteRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class ClienteController {
	@Autowired
	ClienteRepository repository;

	@GetMapping("/cliente")
	public List<Cliente> getClietes() {
		return repository.findAll();
	}

	/*
	 @GetMapping("/cliente") 
	 public List<Cliente> getCliete(){ 
	  List clientes = new ArrayList<Cliente>();
	  
	 clientes = repository.findAll();
	  
	  return clientes; 
	  }*/
	 
	
	@GetMapping("/cliente/{id}")
	public ResponseEntity<Cliente> clienteById(@PathVariable Long id) {
		Cliente cliente = repository.findById(id).get();
		return ResponseEntity.ok(cliente);
	}
	
	

	@Transactional
	@GetMapping("/cliente/emprestimos/{id}")
	public List<Emprestimo> emprestimosDoCliente(@PathVariable Long id) {
		Cliente cliente = repository.findById(id).get();
		List<Emprestimo> emprestimos = new ArrayList<>();
		for (Emprestimo emprestimo : cliente.getEmprestimo()) {
			emprestimos.add(emprestimo);
		}

		return emprestimos;
	}

	@PostMapping("/cadcli")
	public Cliente cadastraCliente(@RequestBody Cliente cliente) {
		return repository.save(cliente);
	}


	
	

	@DeleteMapping("/cliente/{id}")
	public void deletaCliente(@PathVariable Long id) {
		repository.deleteById(id);
	}

	@GetMapping("/buscaCliente")
	public List<Cliente> buscaNome(@RequestParam(value = "nome") String nome) {
		List<Cliente> cliente = new ArrayList<Cliente>();
		List<Cliente> clientes = new ArrayList<Cliente>();
		cliente = repository.findAll();
		String nm = nome.toLowerCase();
		for (Cliente cli : cliente) {
			if (cli.getNome().toLowerCase().contains(nm)) {
				clientes.add(cli);
			}
		}
		return clientes;
	}
	
	@GetMapping("/testemenssagem")
	public String retornaMenssagem() {
		
		String msg = "Teste Menssagem";
		
		return msg;
	}
	
	
	
	
	

}
