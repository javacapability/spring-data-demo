package com.acn.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping("/home")
	public String home() {
		return "index";
	}

	@Autowired
	DepositAccountsRepository depositAccountsRepository;

	@RequestMapping(value="/accountsList", method = RequestMethod.GET)
	public ResponseEntity<Object> getAccountsList() {
		List<DepositAccount> accountsList = (List<DepositAccount>)depositAccountsRepository.findAll();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.set("Access-Control-Allow-Origin", "*");
		httpHeaders.set("Access-Control-Allow-Methods", "POST, GET");
		httpHeaders.set("Access-Control-Allow-Headers", "x-requested-with");
		httpHeaders.set("Accept", "application/json");

		return new ResponseEntity<Object>(accountsList, httpHeaders , HttpStatus.OK);
	}

}
