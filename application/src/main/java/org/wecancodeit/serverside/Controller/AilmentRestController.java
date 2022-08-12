package org.wecancodeit.serverside.Controller;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Ailment;
import org.wecancodeit.serverside.Model.Treatment;
import org.wecancodeit.serverside.Repository.AilmentRepository;
import org.wecancodeit.serverside.Repository.TreatmentRepository;

import javax.annotation.Resource;
import java.util.Collection;

@CrossOrigin
@RestController
public class AilmentRestController {

    @Resource
    private AilmentRepository ailmentRepo;
    @Resource
    private TreatmentRepository treatmentRepo;

    @GetMapping("/ailment")
    public Collection<Ailment> getAilment(){return (Collection<Ailment>) ailmentRepo.findAll(); }


    @GetMapping ("/ailment/{id}")
    public Ailment getAilment(@PathVariable Long id){return ailmentRepo.findById(id).get();}

}
