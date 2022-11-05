package com.aplicacao.sislow.model.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Usuario;
import com.aplicacao.sislow.repositry.ClienteRepository;
import com.aplicacao.sislow.repositry.UsuarioRepository;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class LoginController {
	@Autowired
	ClienteRepository clienteRepository;
	
	@Autowired
	UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public Object login(
			@RequestParam(value = "username") String username, 
			@RequestParam (value = "password") String password
			) {
		
		
		Usuario usuarioCadastrado = usuarioRepository.encontraUsuario(username,password);
		if(usuarioCadastrado instanceof Usuario) {
			return new LoggedUser(UserType.ADMIN, usuarioCadastrado.getName(), usuarioCadastrado.getPassword(), usuarioCadastrado.getId());
			
		}else {
			Cliente clienteCadastrado = clienteRepository.encontraCliente(username, password);
			if(clienteCadastrado instanceof Cliente) {
				return new LoggedUser(UserType.CLIENTE, clienteCadastrado.getNome(), clienteCadastrado.getSenha(), clienteCadastrado.getId());
			}
		}
		
		return null;
	
	}

}

class LoggedUser{
	private UserType type;
	private String name;
	private String password;
	private Long id;
	
	public LoggedUser(UserType type, String name, String password, Long id) {
		super();
		this.type = type;
		this.name = name;
		this.password = password;
		this.id = id;
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
}

enum UserType{
	ADMIN, CLIENTE 
}
