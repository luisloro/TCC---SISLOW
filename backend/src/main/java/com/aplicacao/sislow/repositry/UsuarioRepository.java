package com.aplicacao.sislow.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aplicacao.sislow.model.Emprestimo;
import com.aplicacao.sislow.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	List<Usuario> findByName(String name);
	
	@Query("SELECT obj FROM Usuario obj WHERE obj.name = :name and obj.password = :password")
	Usuario encontraUsuario(String name, String password);
	
}
