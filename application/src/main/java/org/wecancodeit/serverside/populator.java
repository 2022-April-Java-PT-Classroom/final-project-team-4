package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.Model.Ailment;
import org.wecancodeit.serverside.Repository.AilmentRepository;

import javax.annotation.Resource;

@Component
public class populator implements CommandLineRunner {

    @Resource
    private AilmentRepository ailmentRepo;

    @Override
    public void run(String... args) throws Exception {

        Ailment plantarFisciitis =  new Ailment("Plantar Fasciitis");
        Ailment diabeticNeuropathy = new Ailment("Diabetic Neuropathy");
        Ailment supination = new Ailment("Supination");
        Ailment pronation = new Ailment("Pronation");
        Ailment heelSpur = new Ailment("Heel Spur");
        Ailment hammerToe = new Ailment("Hammer Toe");
        Ailment bunions = new Ailment("Bunions");
        Ailment mortonNeuroma = new Ailment("Morton Neuroma");
        ailmentRepo.save(plantarFisciitis);
        ailmentRepo.save(diabeticNeuropathy);
        ailmentRepo.save(supination);
        ailmentRepo.save(pronation);
        ailmentRepo.save(heelSpur);
        ailmentRepo.save(hammerToe);
        ailmentRepo.save(bunions);
        ailmentRepo.save(mortonNeuroma);

    }
}

//- Plantar Fasciitis
//        - Diabetic Neuropathy
//        - Supination
//        - Pronation
//        - Heel Spur
//        - Hammer Toe
//        - Bunions
//        - Morton Neuroma