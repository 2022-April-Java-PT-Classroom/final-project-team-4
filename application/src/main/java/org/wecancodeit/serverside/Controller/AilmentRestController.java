package org.wecancodeit.serverside.Controller;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Model.Ailment;
import org.wecancodeit.serverside.Repository.AilmentRepository;

import javax.annotation.Resource;
import java.util.Collection;

@CrossOrigin
@RestController
public class AilmentRestController {

    @Resource
    private AilmentRepository ailmentRepo;

    @GetMapping("/api/ailment")
    public Collection<Ailment> getAilment(){return (Collection<Ailment>) ailmentRepo.findAll(); }

    @GetMapping ("/api/ailment/{id}")
    public Ailment getAilment(@PathVariable Long id){return ailmentRepo.findById(id).get();}

}
