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



        Treatment painRelieverNsaid = new Treatment("Non-Steroidal Anti Inflammatory Drugs", "https://m.media-amazon.com/images/I/71TKja1yz5L._AC_SX679_.jpg", "These include over the counter drugs, such as Ibuprofen and Aleve.", "These drugs can help ease the pain and lower inflammation, which can provide temporary relief.");
        Treatment nightSplints = new Treatment("Night Splints", "https://www.rcai.com/pics/products/22PFNS.jpg", "A physical therapist might recommend a splint that holds the plantar fascia and Achilles tendon in a lengthened position overnight.", "Promotes stretching of the Achilles tendon, and plantar fascia. This reduces muscle contracture, inflammation, and associated pain.");
        Treatment diabetesManagement = new Treatment("Diabaetes Management", "https://www.conch-house.com/wp-content/uploads/2022/06/41guMYlJqkL._SL500_.jpg", "Consistently keeping your blood sugar within range. Tracking your A1C, to make sure it stays at 7% or lower. Maintaining a healthy weight and getting regular physical activity.", "This can slow the progression of the disease, and prevent nerve damage from getting worse.");
        Treatment antiSeizureDrugs = new Treatment("Anti-Seizure Drugs", "https://www.medicinesmexico.com.mx/images/neurontin_gabapentin_400_mg_15_caps.png", "Seizure drugs can be used, such as pregabalin (Lyrica), and Gabapentin (Gralise, Neurontin.", "These drugs, commonly used in treating seizure disorders (epilepsy), can also help reduce nerve pain associated with diabetic neuropathy.");
        Treatment physicalTherapy = new Treatment("Physical Therapy", "https://classicrehabilitation.com/wp-content/uploads/2021/07/Physical-Therapy-Ankle-and-Foot-Classic-Rehabilitation-Bedford-Arlington-Grand-Prairie-Texas_27.jpg", "Working with a physical therapist, and completing the recommended therapy regimen.", "Can help strengthen the muscles in your legs and feet, and loosens tight tendons. Therapy is an option for many foot-related conditions.");
        Treatment orthoticInsoles = new Treatment("Orthotic Insoles", "https://www.gothamfootcare.com/assets/img/blog/torn-between-custom-orthotics-and-insoles.jpg", "Custom-made insoles can be ordered through your podiatrist, that are worn inside your shoes.", "Helps provide support on the foot where needed. This can also help relieve and prevent back and hip pain, stress on the knee, ankle injuries, and inflammation of the sole of the foot.");
        Treatment spurSurgery = new Treatment("Spur Removal", "https://www.premier-podiatry.com/wp-content/uploads/2022/04/Heel-Spur-Surgery-NJ.jpg", "This is a last resort option for people suffering from heel spurs. The spur, which is a calcium deposit/bony protrusion, is removed surgically.", "Relieves pain and restores mobility in those who have no success with conventional treatments.");
        Treatment weightLoss = new Treatment("Weight Loss", "https://www.gannett-cdn.com/-mm-/a0a28bd666af6d80b33247a358069ae6b7ce0cc4/c=0-108-2121-1306/local/-/media/2018/01/09/Reno/Reno/636511166049310446-GettyImages-641963334.jpg", "If you are overweight, simply losing some of the excess weight, can help prevent and reduce some of the symptoms associated with many foot-related conditions.", "Reduces stress on the tendons and muscles in the foot. Can prevent many conditions from worsening, and in some cases, can completely resolve the issue.");
        Treatment fittedShoes = new Treatment ("Good-fitting shoes", "https://www.nbt.nhs.uk/sites/default/files/orthotics-footwear.jpg", "Sometimes we wear shoes that aren't properly fitted. This can exacerbate an already painful condition. A simple solution is to ensure that you are wearing a properly-fitted shoe. Make sure there is ample padding in any prominent areas of the foot.", "Helps reduce pain and helps with mobility");
        Treatment toeSplint = new Treatment ("Toe Splints", "https://i.ebayimg.com/images/g/dYoAAOSwvgdiptHm/s-l500.jpg", "A splint is applied to the toe, which immobilizes it.", "Prevents the toe from moving, which can prevent the condition from worsening in the very early stages.");
        Treatment hammertoePads = new Treatment ("Hammertoe Pads", "https://m.media-amazon.com/images/I/71CkgCvDN+L._AC_SS450_.jpg", "You can buy non-medicated hammertoe pads that fit around the pointy top of the toe joint.", "Helps relieve painful pressure on the hammertoe.");
        Treatment ice = new Treatment ("Ice Pack", "https://www.verywellhealth.com/thmb/8hqCRHGMOsDAZSWch9JDUvTo_VI=/1500x1001/filters:fill(87E3EF,1)/GettyImages-609624894-3e66b5b35451429ea274755956123c75.jpg", "Wrap a bag of frozen veggies, or crushed ice in a towel and put it on the affected area. Do not leave it on for more than 20 minutes at a time, or else it can cause ice burns. If you have nerve damage, talk to your doctor before applying ice.", "Can help ease inflammation and pain.");
        Treatment bunionPads = new Treatment ("Bunion Pads", "https://i.webareacontrol.com/fullimage/1000-X-1000/1/n/1812018560healthsmart-steins-adhesive-felt-bp-12-bunion-pad-ig-steins-adhesive-felt-bp-12-bunion-pad---application-P.png", "These are small pads that are applied to the area near the bunion. These should be tested for a short period to see if they are in fact helping. If the wrong pad is selected, they can add pressure and cause more problems.", "Reduces pressure on the bunion, therefore reducing pain and improving mobility.");
        Treatment steroidInjections = new Treatment ("Steroid Injection", "https://sportdoctorlondon.com/wp-content/uploads/2021/06/Screenshot-2021-06-11-at-21.40.10-e1623444974988.jpg", "Some people are helped by the injection of steroids into the painful area. These can only be administered by a healthcare professional.", "Reduces inflammation and pain.");
        Treatment rest = new Treatment ("Rest", "https://images.squarespace-cdn.com/content/v1/5ab2ae77d274cb95e2e1ee42/1582131831345-0TCV7G7CA1LCGQ5347Q2/33977882_S_relaxing_feet_up_male_man_jeans_couch_toes_barefoot.jpg", "For some conditions, simply elevating your foot for short periods during the day can help. Reducing activities, such as jogging, aerobic exercise or dancing, which subjects your feet to high impact is recommended.", "Reduces impact on the foot, and can help reduce pain and promotes healing");
        Treatment decompressionSurgery = new Treatment ("Decompression Surgery", "https://www.researchgate.net/publication/269793947/figure/fig2/AS:615042248617988@1523648907706/Placement-of-the-intermetatarsal-ligament-into-a-rigid-position-via-the-placement-of-a_Q320.jpg", "Surgeons can cut nearby structures, such as the ligament that binds together some of the bones in the front of the foot. This is a last resort, for those who aren't getting relief from the morton's neuroma-related issues through conventional, non-invasive means.", "Relieves pressure on the nerve, which reduces pain.");
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

//        ADD PRODUCT RECOMMENDATIONS TO AILMENTS
        Ailment plantarFisciitis = new Ailment("Plantar Fasciitis","https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/plantar-fasciitis-1296x1000-body-1-1296x1004.png?w=1155&h=2137","An inflammation of a thick band of tissue that connects the heel bone to the toes. The inflamed tissue runs across the bottom of the foot.","An inflammation of a thick band of tissue that connects the heel bone to the toes.\n" +
                "The inflamed tissue runs across the bottom of the foot.\n" +
                "Symptoms include stabbing pain near the heel. Pain might be worst in the morning.\n" +
                "Treatments include physical therapy, shoe inserts, steroid injections, and surgery." ,painRelieverNsaid, nightSplints, physicalTherapy, ice);
//Product Recs: Hoka One One Bondi 7, New Balance 990, Brooks Adrenaline GTS 21
        Ailment diabeticNeuropathy = new Ailment("Diabetic Neuropathy","https://cacvi.org/wp-content/uploads/2021/10/diagram-of-Diabetic-neuropathy.jpg","A type of nerve damage that can occur with diabetes. The condition most often affects the legs and feet. This is a problem that occurs when diabetes goes uncontrolled.", "A type of nerve damage that can occur with diabetes.\n" +
                "The condition most often affects the legs and feet. For some people, symptoms are mild. For others, symptoms can be painful, debilitating, and even fatal.\n" +
                "Symptoms include pain and numbness in the legs. In more severe cases, symptoms include issues with digestion, the bladder, and controlling heart rate.\n" +
                "Treatment includes managing blood sugar and using medications to control symptoms.",diabetesManagement, antiSeizureDrugs, physicalTherapy, weightLoss);
//Product Recs: Brooks Addiction Walker 2, New Balance 840 v4, SAS Journey
        Ailment supination = new Ailment("Supination","https://boneandspine.com/wp-content/uploads/2014/12/normal-supination.gif" ,"Supination (or under-pronation) is the outward roll of the foot during normal motion. A natural amount of supination occurs during the push-off phase of running.","Supination of the foot occurs when your weight rolls onto the outer edges of your feet. Another name for supination is underpronation.\n" +
                "\n" + "In a normal stride, your foot should roll inward a bit (pronate) so that your weight is on the ball of your foot. Then you push off the big toe. If you supinate, most of your weight falls on the outside of your foot and you push off from your outer toes instead. Supination is usually a result of an inherited problem with the structure of your foot. In other words, it may run in families. Supination may also be caused by weakness in certain muscles of your foot, ankle, and leg. " ,orthoticInsoles, physicalTherapy, fittedShoes);
//Product Recs: New Balance 847, New Balance 1540, New Balance 990
        Ailment pronation = new Ailment("Pronation","https://www.precisionmovement.coach/wp-content/uploads/2019/01/pronation-definition.gif","Pronation is a natural inward movement of the foot that occurs during running or walking. This creates some shock absorption as your foot hits the ground. ", "When your foot rolls more than the 15\n" +
                "percent inward or downward,\n" +
                "it’s called overpronation. People with this condition colloquially are considered to\n" +
                "have “flat feet.” This can cause iliotibial band syndrome, which hurts the outside of the knee.",orthoticInsoles, physicalTherapy, fittedShoes);
//Product Recs: New Balance 860, Hoka One One Gaviota, Brooks Adrenaline GTS 21
        Ailment heelSpur = new Ailment("Heel Spur","https://sa1s3optim.patientpop.com/assets/images/provider/photos/2169293.jpg","A bony growth that develops around the heel bone, often caused by ill-fitting shoes. The outgrowth, which is a calcium deposit, can take months to develop. ","A heel spur is a calcium deposit causing a bony protrusion on the underside of the heel bone. Although heel spurs are often painless, they can cause heel pain. They are frequently associated with plantar fasciitis, a painful inflammation of the fibrous band of connective tissue (plantar fascia) that runs along the bottom of the foot and connects the heel bone to the ball of the foot." ,spurSurgery, ice, fittedShoes, orthoticInsoles, weightLoss, rest);
//Product Recs: Altra Olympus 4, Hoka One One Clifton 8, Asics Gel-Contend 5
        Ailment hammerToe = new Ailment("Hammer Toe","https://www.afacc.net/wp-content/uploads/2019/03/hammer-toe.jpg","A foot condition in which the toe has an abnormal bend in the middle joint. A hammer toe is usually caused by wearing shoes with high heels or narrow toe boxes.","A foot condition in which the toe has an abnormal bend in the middle joint.\n" +
                "A hammer toe is usually caused by wearing shoes with high heels or narrow toe boxes. It often affects the toe next to the big toe.\n" +
                "The affected toe may be painful or hard to move, and may develop corns or calluses.\n" +
                "Treatment can include wearing roomier shoes and using shoe inserts or pads. Surgery might be needed." ,toeSplint, fittedShoes, hammertoePads);
//Product Recs: NAOT Galaxy, Vionic Classic Walker, Allbirds Wool Runners
        Ailment bunions = new Ailment("Bunions", "https://www.knowyourdoctor.com.cy/wp-content/uploads/2020/05/BUNIONS-1.jpg","A bony bump that forms on the joint at the base of the big toe. A bunion is formed when the big toe pushes against the next toe. They occur after years of pressure and are often painful.","A bony bump that forms on the joint at the base of the big toe.\n" +
                "A bunion is formed when the big toe pushes against the next toe. Tight shoes, foot stress, and arthritis are causes.\n" +
                "The main symptoms are bone deformity, pain, and stiffness.\n" +
                "Treatments include changing shoes, padding the foot, and pain medications. Painful bunions can be removed surgically." ,bunionPads, painRelieverNsaid, ice, fittedShoes);
// Product Recs: Skechers GOwalk Joy, Saucony Echelon Walker 3, Kuru Atom
        Ailment mortonNeuroma = new Ailment("Morton's Neuroma","https://sportsfootankle.com/wp-content/uploads/2017/12/Mortons-Neuroma.jpg","A relatively common condition. It is a thickening of the tissue around a nerve leading to the toes that results from pressure or injury, such as from running or use of high heels.", "A thickening of the tissue around a nerve leading to the toes.\n" +
                "Morton's neuroma may be caused by pressure or injury, such as from running or use of high heels.\n" +
                "Morton's neuroma may feel like a pebble in a shoe or a fold in a sock. There may be sharp, burning pain or numbness in the ball of the foot or toes.\n" +
                "Treatment might include arch supports and foot pads, corticosteroid injections, strength exercises, wide-toe shoes, or surgery.", decompressionSurgery, physicalTherapy, fittedShoes, painRelieverNsaid, steroidInjections);
//Product Recs: Brooks Addiction Walker 2, Asics Gel-Cumulus, New Balance 840 v4
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