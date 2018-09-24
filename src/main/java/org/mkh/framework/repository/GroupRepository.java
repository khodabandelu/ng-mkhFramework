package org.mkh.framework.repository;


import org.mkh.framework.domain.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Group entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

//    @Query("select group from Group group where group.user.login = ?#{principal.username}")
//    List<Group> findByUserIsCurrentUser();

}
