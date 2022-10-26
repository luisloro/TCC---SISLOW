package com.aplicacao.sislow.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aplicacao.sislow.model.Equipamento;

public interface EquipamentoRepository extends JpaRepository<Equipamento, Long>{
	
	
	List<Equipamento> findByEmprestado(Boolean situacaoz);


}
