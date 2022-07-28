package org.wecancodeit.serverside.Controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Treatment;
import org.wecancodeit.serverside.Repository.TreatmentRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class TreatmentRestController {

    @Resource
    private TreatmentRepository treatmentRepo;

    @GetMapping("/api/treatment")
    public Collection<Treatment>getTreatment(){
        return (Collection<Treatment>) treatmentRepo.findAll();
    }

    @PostMapping("/api/treatments")

    public Collection<Treatment>addTreatment(@RequestBody String body) throws JSONException {
        JSONObject newTreatment = new JSONObject(body);
        String addTreatmentName = newTreatment.getString("name");

        return (Collection<Treatment>) treatmentRepo.findAll();
    }
}
