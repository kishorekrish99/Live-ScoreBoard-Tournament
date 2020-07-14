package com.kishore.client.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
@RefreshScope
public class ClientApplication {

	@Autowired
	@Lazy
	private RestTemplate template;
	
	@Bean
	public RestTemplate template() {
		return new RestTemplate();
	}

	@Value("${spring.datasource.url}")
	public String url;
	
	@Value("${spring.datasource.username}")
	public String username;

	@GetMapping("/message")
	public String message() {
		return url+" "+username;
	}

	public static void main(String[] args) {
		SpringApplication.run(ClientApplication.class, args);
	}

	

}
