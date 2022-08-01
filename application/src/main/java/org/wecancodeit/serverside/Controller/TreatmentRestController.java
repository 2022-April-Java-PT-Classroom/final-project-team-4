package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Treatment;
import org.wecancodeit.serverside.Repository.TreatmentRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class TreatmentRestController {

    @Resource
    private TreatmentRepository treatmentRepo;

    @GetMapping("/api/treatment/{id}")
    public Treatment singleTreatment(@PathVariable Long id) throws JSONException{
        Optional<Treatment> treatment = treatmentRepo.findById(id);
        return treatment.get();
    }

    @GetMapping("/api/ailment/{id}/treatments")
    public Iterable<Treatment> treatmentsByAilment(@PathVariable Long id){
        return treatmentRepo.findByAilments_id(id);
    }
}
