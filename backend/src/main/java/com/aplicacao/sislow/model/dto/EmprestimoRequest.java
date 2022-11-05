package com.aplicacao.sislow.model.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Emprestimo;
import com.aplicacao.sislow.repositry.ClienteRepository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmprestimoRequest implements Serializable {
	
	private static final long serialVersion = 15l;
	
	private Float valor;
	private LocalDate datainicio;
	private LocalDate datafim;
	private Long clienteId;
	private ArrayList<Long> equipamentos;
	
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
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
	public Long getClienteId() {
		return clienteId;
	}
	public void setClienteId(Long clienteId) {
		this.clienteId = clienteId;
	}
	public ArrayList<Long> getEquipamentos() {
		return equipamentos;
	}
	public void setEquipamentos(ArrayList<Long> equipamentos) {
		this.equipamentos = equipamentos;
	}
	
	public Emprestimo toEmprestimo() {
		
		Emprestimo emprestimo = new Emprestimo();
		emprestimo.setDatafim(datafim);
		emprestimo.setDatainicio(datainicio);
		emprestimo.setValor(valor);
		emprestimo.setEmprestado(true);
		return emprestimo;
	}
	
}
