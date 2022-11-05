package com.aplicacao.sislow.repositry;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Emprestimo;
import com.aplicacao.sislow.model.Usuario;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

<<<<<<< HEAD
	@Query("SELECT obj FROM Cliente obj WHERE obj.email = :email and obj.senha = :senha")
	Cliente encontraCliente(String email, String senha);
	
	@Query("SELECT obj FROM Cliente obj WHERE obj.cpf = :cpf")
	Cliente encontraClienteCPF(String cpf);
	
	@Query("SELECT obj FROM Cliente obj WHERE obj.cnpj = :cnpj")
	Cliente encontraClienteCNPJ(String cnpj);
=======
	//@Query("SELECT obj FROM Cliente obj WHERE obj.documento = :doc and obj.senha = :senha")
	//Cliente encontraCliente(Long doc, String senha);
	
>>>>>>> ee6cfc2ec7a18d0f1eb2ac32e7594751812b81e6

}
