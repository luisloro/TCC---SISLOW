package com.aplicacao.sislow.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
<<<<<<< HEAD
@NoArgsConstructor
=======

>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
//@Table(name = "tb_usuarios")
public class Usuario implements Serializable {
	private static final long serialVersion = 1l;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	private String password;
	
<<<<<<< HEAD
	public Usuario() {
		
	}
=======

	public Usuario() {
		
	}

>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170
	
public Usuario(String name, String password) {
		this.name=name;
		this.password=password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	
	
}
