package com.aplicacao.sislow.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor

public class Cliente implements Serializable{
	private static final long serialVersion = 1l;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	private String fone;
	private String senha;
	private String cpf;
	private String cnpj;
	private String ie;
	private String email;
	private Boolean tipo;
	
	
	
	@OneToMany(mappedBy = "cliente", fetch = FetchType.EAGER)
	@JsonIgnore
	private List<Emprestimo> emprestimo;
	
	
	
	
public Cliente(String nome,String fone,String senha,String cpf, Boolean tipo) {
	this.nome=nome;
	this.fone=fone;
	this.senha=senha;
	this.cpf=cpf;
	this.tipo=tipo;
		
	}
public Cliente(String nome,String fone,String senha,String cpf,String cnpj,String ie,String email, Boolean tipo) {
	this.nome=nome;
	this.fone=fone;
	this.senha=senha;
	this.cpf=cpf;
	this.tipo=tipo;
	this.cnpj=cnpj;
	this.email=email;
	this.ie=ie;
	}

	public Cliente() {
	// TODO Auto-generated constructor stub
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	

	public String getFone() {
		return fone;
	}

	public void setFone(String fone) {
		this.fone = fone;
	}

	public List<Emprestimo> getEmprestimo() {
		return emprestimo;
	}

	public void setEmprestimo(List<Emprestimo> emprestimo) {
		this.emprestimo = emprestimo;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getIe() {
		return ie;
	}

	public void setIe(String ie) {
		this.ie = ie;
	}

	public Boolean getTipo() {
		return tipo;
	}

	public void setTipo(Boolean tipo) {
		this.tipo = tipo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
}

