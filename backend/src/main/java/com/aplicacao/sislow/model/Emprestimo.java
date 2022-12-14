package com.aplicacao.sislow.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor

public class Emprestimo implements Serializable {
	private static final long serialVersion = 1l;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	private Float valor;
	private LocalDate datainicio;
	private LocalDate datafim;
	private Boolean emprestado;
<<<<<<< HEAD
=======
	
	@Transient
	private String dataInicioFormatada;
	@Transient
	private String dataFimFormatada;
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="cliente_id" )
	private Cliente cliente;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "emprestimo_equipamento", 
	joinColumns = @JoinColumn(name="emprestimo_fk"),
	inverseJoinColumns = @JoinColumn(name = "equipamento_fk"))
	private Set<Equipamento> equipamento;

	public Emprestimo() {
		equipamento = new HashSet<Equipamento>();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Float getValor() {
		return valor;
	}

	public void setValor(Float valor) {
		this.valor = valor;
	}

	public Set<Equipamento> getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(Set<Equipamento> equipamento) {
		this.equipamento = equipamento;
	}

	public LocalDate getDatainicio() {
		return datainicio;
	}

	public void setDatainicio(LocalDate datainicio) {
		this.datainicio = datainicio;
	}

	public LocalDate getDatafim() {
		return datafim;
	}

	public void setDatafim(LocalDate datafim) {
		this.datafim = datafim;
	}
<<<<<<< HEAD

	public Boolean getEmprestado() {
		return emprestado;
	}

	public void setEmprestado(Boolean emprestado) {
		this.emprestado = emprestado;
	}
	
	
=======
>>>>>>> c6d6c3fe5ab09525a359dfb14e2252b32c14c170

	public Boolean getEmprestado() {
		return emprestado;
	}

	public void setEmprestado(Boolean emprestado) {
		this.emprestado = emprestado;
	}

	@Transient
	public String getDataInicioFormatada() {
		return dataInicioFormatada;
	}

	public void setDataInicioFormatada(String dataInicioFormatada) {
		this.dataInicioFormatada = dataInicioFormatada;
	}

	@Transient
	public String getDataFimFormatada() {
		return dataFimFormatada;
	}

	public void setDataFimFormatada(String dataFimFormatada) {
		this.dataFimFormatada = dataFimFormatada;
	}
	

}
