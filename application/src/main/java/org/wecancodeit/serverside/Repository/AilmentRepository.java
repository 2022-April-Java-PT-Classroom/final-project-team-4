package org.wecancodeit.serverside.Repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Model.Ailment;

import java.util.Optional;

public interface AilmentRepository extends CrudRepository<Ailment, Long> {
    Optional<Ailment> findByName(String name);
}
