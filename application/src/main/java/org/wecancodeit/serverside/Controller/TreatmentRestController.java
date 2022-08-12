package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Ailment;
import org.wecancodeit.serverside.Model.Treatment;
import org.wecancodeit.serverside.Repository.AilmentRepository;
import org.wecancodeit.serverside.Repository.TreatmentRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class TreatmentRestController {

    @Resource
    private TreatmentRepository treatmentRepo;
    private AilmentRepository ailmentRepo;

    @GetMapping("/api/treatment/{id}")
    public Treatment singleTreatment(@PathVariable Long id) throws JSONException{
        Optional<Treatment> treatment = treatmentRepo.findById(id);
        return treatment.get();
    }

    @GetMapping("/treatments")
    public Collection<Treatment> getTreatments(){return (Collection<Treatment>) treatmentRepo.findAll();}

    @GetMapping("/api/ailment/{id}/treatments")
    public Collection<Treatment> treatmentsByAilment(@PathVariable Long id){
        Ailment ailmentToFind = ailmentRepo.findById(id).get();
        return ailmentToFind.getTreatments();
    }
}
