package com.aplicacao.sislow.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aplicacao.sislow.model.Emprestimo;

@Repository
public interface EmprestimoRepository extends JpaRepository<Emprestimo, Long>{
	
	@Query("SELECT obj FROM Emprestimo obj WHERE obj.datafim BETWEEN :max AND :min and obj.emprestado = :estado")
	List<Emprestimo> findByEmprestado(LocalDate max, LocalDate min ,Boolean estado);
	
	
	@Query("SELECT obj FROM Emprestimo obj WHERE obj.datafim BETWEEN :max AND :min")
	List<Emprestimo> findEmprestimos(LocalDate max, LocalDate min);
	
	@Query("SELECT obj FROM Emprestimo obj WHERE obj.datafim < :data")
	List<Emprestimo> findEmprestimosAtrasados(LocalDate data);
	

}
