package org.wecancodeit.serverside.Repository;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Model.Treatment;

import java.util.List;
import java.util.Optional;

public interface TreatmentRepository extends CrudRepository<Treatment, Long> {
    Optional<Treatment> findByName(String name);
    List<Treatment> findByAilments_id(Long id);
}
