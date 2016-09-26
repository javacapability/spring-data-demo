package com.acn.demo;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.PagingAndSortingRepository;

@RepositoryRestResource(path="accounts",exported=true)
public interface TimeDepositAccountsRepository extends PagingAndSortingRepository<TimeDepositAccount, Integer> {

}
