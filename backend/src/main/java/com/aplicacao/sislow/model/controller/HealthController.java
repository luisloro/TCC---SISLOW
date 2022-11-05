package com.aplicacao.sislow.model.controller;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@Transactional
public class HealthController {
	
	@GetMapping("/health")
	public String health() {
		return "OK";
	}

}
