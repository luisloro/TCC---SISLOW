package com.aplicacao.sislow.model.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.Usuario;
import com.aplicacao.sislow.repositry.UsuarioRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	
	@PostMapping("/usuario")
	public Usuario buscaNome(@RequestParam(value = "name") String name,
							@RequestParam (value = "password") String password
			) {
		
		
		Usuario usuarioCadastrado = usuarioRepository.encontraUsuario(name,password);
		
		return usuarioCadastrado;
	
	}
	
	/*
	@PostMapping("/usuario")
	public Boolean buscaNome(@RequestParam(value = "name") String name) {
		
		
		Usuario usuarioCadastrado = usuarioRepository.encontraUsuario(name);
		if(usuarioCadastrado.getName().equals(name)) {
			return true;
		}
		
		return false;
	}*/

}
