package com.aplicacao.sislow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.aplicacao.sislow.model.Cliente;
import com.aplicacao.sislow.model.Equipamento;
import com.aplicacao.sislow.model.EquipamentoExibicao;
import com.aplicacao.sislow.model.Usuario;
import com.aplicacao.sislow.repositry.ClienteRepository;
import com.aplicacao.sislow.repositry.EquipamentoExibicaoRepository;
import com.aplicacao.sislow.repositry.EquipamentoRepository;
import com.aplicacao.sislow.repositry.UsuarioRepository;

@SpringBootApplication
public class SislowApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired EquipamentoExibicaoRepository exibicaoRepository;
	@Autowired ClienteRepository clienteRepository;
	@Autowired EquipamentoRepository equipRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(SislowApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Usuario usuario = new Usuario("Luis","luis23");
		usuarioRepository.save(usuario);
		
		Usuario usuario2 = new Usuario("Rodrigo","123");
		usuarioRepository.save(usuario2);
		
		EquipamentoExibicao equipamento1 = new EquipamentoExibicao("LaserJet H200", "HP", "Impressora");
		exibicaoRepository.save(equipamento1);
		EquipamentoExibicao equipamento2 = new EquipamentoExibicao("DCP 160", "Brother", "Impressora");
		exibicaoRepository.save(equipamento2);
		EquipamentoExibicao equipamento3 = new EquipamentoExibicao("Inspiron 2587", "Dell", "Notebook");
		exibicaoRepository.save(equipamento3);
		
		Cliente cliente1 = new Cliente("Luis","995123298","123","421.685.888-05",".",".","luis@fae.com",false);
		clienteRepository.save(cliente1);
		Cliente cliente5 = new Cliente("Empresa A","995123298","123",".","12.335.333/0001-21","20939283745","empresaA@hotmail.com",true);
		clienteRepository.save(cliente5);
		
		Cliente cliente2 = new Cliente("Rodrigo","996354578","696996969","123",".",".","rodrigo@fae.com.br",false);
		clienteRepository.save(cliente2);
		
		Cliente cliente3 = new Cliente("Liana","9910740465","03030303l","123",".",".","liana@liana.com.br",false);
		clienteRepository.save(cliente3);
		
		Cliente cliente4 = new Cliente("João","9982458","123654l","123",".",".","joao@joao.com.br",false);
		clienteRepository.save(cliente4);
		
		
		Equipamento equipamento11 = new Equipamento("LaserJet H200", "HP", "Impressora","XLS92S");
		equipRepository.save(equipamento11);
		Equipamento equipamento22 = new Equipamento("DCP 160", "Brother", "Impressora","KSD98S");
		equipRepository.save(equipamento22);
		Equipamento equipamento33 = new Equipamento("Inspiron 2587", "Dell", "Notebook","SDJ20KLS2AS");
		equipRepository.save(equipamento33);
	}

}
