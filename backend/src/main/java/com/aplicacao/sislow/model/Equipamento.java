package com.aplicacao.sislow.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Equipamento implements Serializable {
	private static final long serialVersion = 1l;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	
	private String modelo;
	private String marca;
	private String tipo;

	@ManyToMany(mappedBy = "equipamento", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Emprestimo> emprestimo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Set<Emprestimo> getEmprestimo() {
		return emprestimo;
	}

	public void setEmprestimo(Set<Emprestimo> emprestimo) {
		this.emprestimo = emprestimo;
	}
	
	
}
