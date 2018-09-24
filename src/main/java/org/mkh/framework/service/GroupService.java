package org.mkh.framework.service;

import org.mkh.framework.domain.Authority;
import org.mkh.framework.repository.AuthorityRepository;
import org.mkh.framework.repository.GroupRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service class for managing groups.
 */
@Service
@Transactional
public class GroupService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);

    private final GroupRepository groupRepository;

    private final AuthorityRepository authorityRepository;

    public GroupService(GroupRepository groupRepository, AuthorityRepository authorityRepository) {
        this.groupRepository = groupRepository;
        this.authorityRepository = authorityRepository;
    }

    public List<String> getAuthorities() {
        return authorityRepository.findAll().stream().map(Authority::getName).collect(Collectors.toList());
    }


}
