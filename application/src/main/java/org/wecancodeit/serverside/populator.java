package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.Model.Ailment;
import org.wecancodeit.serverside.Model.Treatment;
import org.wecancodeit.serverside.Repository.AilmentRepository;
import org.wecancodeit.serverside.Repository.TreatmentRepository;

import javax.annotation.Resource;

@Component
public class populator implements CommandLineRunner {

    @Resource
    private AilmentRepository ailmentRepo;
    @Resource
    private TreatmentRepository treatmentRepo;

    @Override
    public void run(String... args) throws Exception {

        Ailment plantarFisciitis = new Ailment("Plantar Fasciitis");
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

        Treatment painRelieverNsaid = new Treatment("Non-Steroidal Anti Inflammatory Drugs", "These include over the counter drugs, such as Ibuprofen and Aleve.", "These drugs can help ease the pain and lower inflammation, which can provide temporary relief.");
        Treatment nightSplints = new Treatment("Night Splints", "A physical therapist might recommend a splint that holds the plantar fascia and Achilles tendon in a lengthened position overnight.", "Promotes stretching of the Achilles tendon, and plantar fascia. This reduces muscle contracture, inflammation, and associated pain.");
        Treatment diabetesManagement = new Treatment("Diabaetes Management", "Consistently keeping your blood sugar within range. Tracking your A1C, to make sure it stays at 7% or lower. Maintaining a healthy weight and getting regular physical activity.", "This can slow the progression of the disease, and prevent nerve damage from getting worse.");
        Treatment antiSeizureDrugs = new Treatment("Anti-Seizure Drugs", "Seizure drugs can be used, such as pregabalin (Lyrica), and Gabapentin (Gralise, Neurontin.", "These drugs, commonly used in treating seizure disorders (epilepsy), can also help reduce nerve pain associated with diabetic neuropathy.");
        Treatment physicalTherapy = new Treatment("Physical Therapy", "Working with a physical therapist, and completing the recommended therapy regimen.", "Can help strengthen the muscles in your legs and feet, and loosens tight tendons. Therapy is an option for many foot-related conditions.");
        Treatment orthoticInsoles = new Treatment("Orthotic Insoles", "Custom-made insoles can be ordered through your podiatrist, that are worn inside your shoes.", "Helps provide support on the foot where needed. This can also help relieve and prevent back and hip pain, stress on the knee, ankle injuries, and inflammation of the sole of the foot.");
        Treatment spurSurgery = new Treatment("Spur Removal", "This is a last resort option for people suffering from heel spurs. The spur, which is a calcium deposit/bony protrusion, is removed surgically.", "Relieves pain and restores mobility in those who have no success with conventional treatments.");
        Treatment weightLoss = new Treatment("Weight Loss", "If you are overweight, simply losing some of the excess weight, can help prevent and reduce some of the symptoms associated with many foot-related conditions.", "Reduces stress on the tendons and muscles in the foot. Can prevent many conditions from worsening, and in some cases, can completely resolve the issue.");
        Treatment fittedShoes = new Treatment ("Good-fitting shoes", "Sometimes we wear shoes that aren't properly fitted. This can exacerbate an already painful condition. A simple solution is to ensure that you are wearing a properly-fitted shoe. Make sure there is ample padding in any prominent areas of the foot.", "Helps reduce pain and helps with mobility");
        Treatment toeSplint = new Treatment ("Toe Splints", "A splint is applied to the toe, which immobilizes it.", "Prevents the toe from moving, which can prevent the condition from worsening in the very early stages.");
        Treatment hammertoePads = new Treatment ("Hammertoe Pads", "You can buy non-medicated hammertoe pads that fit around the pointy top of the toe joint.", "Helps relieve painful pressure on the hammertoe.");
        Treatment ice = new Treatment ("Ice Pack", "Wrap a bag of frozen veggies, or crushed ice in a towel and put it on the affected area. Do not leave it on for more than 20 minutes at a time, or else it can cause ice burns. If you have nerve damage, talk to your doctor before applying ice.", "Can help ease inflammation and pain.");
        Treatment bunionPads = new Treatment ("Bunion Pads", "These are small pads that are applied to the area near the bunion. These should be tested for a short period to see if they are in fact helping. If the wrong pad is selected, they can add pressure and cause more problems.", "Reduces pressure on the bunion, therefore reducing pain and improving mobility.");
        Treatment steroidInjections = new Treatment ("Steroid Injection", "Some people are helped by the injection of steroids into the painful area. These can only be administered by a healthcare professional.", "Reduces inflammation and pain.");
        Treatment rest = new Treatment ("Rest", "For some conditions, simply elevating your foot for short periods during the day can help. Reducing activities, such as jogging, aerobic exercise or dancing, which subjects your feet to high impact is recommended.", "Reduces impact on the foot, and can help reduce pain and promotes healing");
        Treatment decompressionSurgery = new Treatment ("Decompression Surgery", "Surgeons can cut nearby structures, such as the ligament that binds together some of the bones in the front of the foot. This is a last resort, for those who aren't getting relief from the morton's neuroma-related issues through conventional, non-invasive means.", "Relieves pressure on the nerve, which reduces pain.");
        treatmentRepo.save(painRelieverNsaid);
        treatmentRepo.save(nightSplints);
        treatmentRepo.save(diabetesManagement);
        treatmentRepo.save(antiSeizureDrugs);
        treatmentRepo.save(physicalTherapy);
        treatmentRepo.save(orthoticInsoles);
        treatmentRepo.save(spurSurgery);
        treatmentRepo.save(weightLoss);
        treatmentRepo.save(fittedShoes);
        treatmentRepo.save(toeSplint);
        treatmentRepo.save(hammertoePads);
        treatmentRepo.save(ice);
        treatmentRepo.save(bunionPads);
        treatmentRepo.save(steroidInjections);
        treatmentRepo.save(rest);
        treatmentRepo.save(decompressionSurgery);




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