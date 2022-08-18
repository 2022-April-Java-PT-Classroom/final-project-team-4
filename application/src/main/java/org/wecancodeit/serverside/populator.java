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
//        "", "", "",
        Ailment plantarFisciitis = new Ailment("Plantar Fasciitis","https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/plantar-fasciitis-1296x1000-body-1-1296x1004.png?w=1155&h=2137","An inflammation of a thick band of tissue that connects the heel bone to the toes. The inflamed tissue runs across the bottom of the foot.",
                "Hoka One One Bondi 8",
//                change pic of bondi 8, 840v5, gel-contend 7
                "New Balance 990 v5",
                "Brooks Adrenaline GTS 22",
                "https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dw6cf7df47/images/transparent/1110519-CCSD_7.jpg?sw=1650&sfrm=png&q=0&bgcolor=F9F9F9",
                "https://nb.scene7.com/is/image/NB/w990gl5_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
                "https://cdn11.bigcommerce.com/s-kk5b4m/images/stencil/1280x1280/products/45068/50264/brooks__120353134__a__78270.1650994235.jpg?c=2",
                "https://www.hoka.com/en/us/search/?q=bondi+8&lang=en_US",
                "https://www.newbalance.com/990/",
                "https://www.brooksrunning.com/en_us/search-result/?q=adrenaline",
                "An inflammation of a thick band of tissue that connects the heel bone to the toes.\n" +
                "The inflamed tissue runs across the bottom of the foot.\n" +
                "Symptoms include stabbing pain near the heel. Pain might be worst in the morning.\n" +
                "Treatments include physical therapy, shoe inserts, steroid injections, and surgery." ,painRelieverNsaid, nightSplints, physicalTherapy, ice);
//Product Recs: Hoka One One Bondi 7, New Balance 990, Brooks Adrenaline GTS 21
        Ailment diabeticNeuropathy = new Ailment("Diabetic Neuropathy","https://cacvi.org/wp-content/uploads/2021/10/diagram-of-Diabetic-neuropathy.jpg","A type of nerve damage that can occur with diabetes. The condition most often affects the legs and feet. This is a problem that occurs when diabetes goes uncontrolled.",
                "Brooks Addiction Walker 2",
                "New Balance 840 v5",
                "SAS Journey",
                "data:image/jpeg;base64,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",
                "https://cdn.shopify.com/s/files/1/2275/1533/products/mens-new-balance-840-v4-mens-running-shoes-new-balance-grayblackredwhite-12-2e-us-413334.jpg?v=1608174494",
                "data:image/jpeg;base64,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",
                "https://www.brooksrunning.com/en_us/search-result/?q=addiction%20walker",
                "https://www.newbalance.com/search/?q=840v5",
                "https://www.sasshoes.com/search/?q=journey",
                "A type of nerve damage that can occur with diabetes.\n" +
                "The condition most often affects the legs and feet. For some people, symptoms are mild. For others, symptoms can be painful, debilitating, and even fatal.\n" +
                "Symptoms include pain and numbness in the legs. In more severe cases, symptoms include issues with digestion, the bladder, and controlling heart rate.\n" +
                "Treatment includes managing blood sugar and using medications to control symptoms.",diabetesManagement, antiSeizureDrugs, physicalTherapy, weightLoss);
//Product Recs: Brooks Addiction Walker 2, New Balance 840 v4, SAS Journey
        Ailment supination = new Ailment("Supination","https://boneandspine.com/wp-content/uploads/2014/12/normal-supination.gif" ,"Supination (or under-pronation) is the outward roll of the foot during normal motion. A natural amount of supination occurs during the push-off phase of running.",
                "New Balance 847 v4",
                "New Balance 1540 v3",
                "New Balance 990 v5",
                "https://m.media-amazon.com/images/I/81XiQVaMiqL._AC_SR920,736_.jpg",
                "https://nb.scene7.com/is/image/NB/m1540bk3_nb_02_i?$pdpflexf2MD2x$&fmt=webp&wid=1026&hei=1026",
                "https://nb.scene7.com/is/image/NB/w990gl5_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
                "https://www.newbalance.com/847/",
                "https://www.newbalance.com/1540/",
                "https://www.newbalance.com/990/",
                "Supination of the foot occurs when your weight rolls onto the outer edges of your feet. Another name for supination is underpronation.\n" +
                "\n" + "In a normal stride, your foot should roll inward a bit (pronate) so that your weight is on the ball of your foot. Then you push off the big toe. If you supinate, most of your weight falls on the outside of your foot and you push off from your outer toes instead. Supination is usually a result of an inherited problem with the structure of your foot. In other words, it may run in families. Supination may also be caused by weakness in certain muscles of your foot, ankle, and leg. " ,orthoticInsoles, physicalTherapy, fittedShoes);
//Product Recs: New Balance 847, New Balance 1540, New Balance 990
        Ailment pronation = new Ailment("Pronation","https://www.precisionmovement.coach/wp-content/uploads/2019/01/pronation-definition.gif","Pronation is a natural inward movement of the foot that occurs during running or walking. This creates some shock absorption as your foot hits the ground. ",
                "New Balance 860 v12",
                "Hoka One One Gaviota 4",
                "Brooks Adrenaline GTS 22",
                "https://nb.scene7.com/is/image/NB/m860c12_nb_02_i?$pdpflexf2MD2x$&fmt=webp&wid=1026&hei=1026",
                "https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dw5cfcfa8a/images/transparent/1123198-BBGP_7.jpg?sw=555&sh=571&sm=fit&sfrm=png&bgcolor=f7f7f9",
                "https://cdn11.bigcommerce.com/s-kk5b4m/images/stencil/1280x1280/products/45068/50264/brooks__120353134__a__78270.1650994235.jpg?c=2",
                "https://www.newbalance.com/860/",
                "https://www.hoka.com/en/us/search/?q=gaviota",
                "https://www.brooksrunning.com/en_us/search-result/?q=adrenaline",
                "When your foot rolls more than the 15\n" +
                "percent inward or downward,\n" +
                "it’s called overpronation. People with this condition colloquially are considered to\n" +
                "have “flat feet.” This can cause iliotibial band syndrome, which hurts the outside of the knee.",orthoticInsoles, physicalTherapy, fittedShoes);
//Product Recs: New Balance 860, Hoka One One Gaviota, Brooks Adrenaline GTS 21
        Ailment heelSpur = new Ailment("Heel Spur","https://sa1s3optim.patientpop.com/assets/images/provider/photos/2169293.jpg","A bony growth that develops around the heel bone, often caused by ill-fitting shoes. The outgrowth, which is a calcium deposit, can take months to develop. ",
                "Altra Olympus 4",
                "Hoka One One Clifton 8",
                "Asics Gel-Contend 7",
                "https://images.altrarunning.com/is/image/altra/AL0A4VQW446-HERO?wid=400&hei=400&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
                "https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dw5b594ecd/images/transparent/1119393-RYMZ_7.jpg?sw=555&sh=571&sm=fit&sfrm=png&bgcolor=f7f7f9",
                "https://images.asics.com/is/image/asics/1131A049_100_SR_RT_GLB?$sfcc-product$",
                "https://www.altrarunning.com/shop/VFSearchDisplay?catalogId=19001&storeId=8001&langId=-1&searchTerm=olympus",
                "https://www.altrarunning.com/shop/VFSearchDisplay?catalogId=19001&storeId=8001&langId=-1&searchTerm=olympus",
                "https://www.asics.com/us/en-us/search/?q=contend+7&lang=en_US",
                "A heel spur is a calcium deposit causing a bony protrusion on the underside of the heel bone. Although heel spurs are often painless, they can cause heel pain. They are frequently associated with plantar fasciitis, a painful inflammation of the fibrous band of connective tissue (plantar fascia) that runs along the bottom of the foot and connects the heel bone to the ball of the foot." ,spurSurgery, ice, fittedShoes, orthoticInsoles, weightLoss, rest);
//Product Recs: Altra Olympus 4, Hoka One One Clifton 8, Asics Gel-Contend 5
        Ailment hammerToe = new Ailment("Hammer Toe","https://www.afacc.net/wp-content/uploads/2019/03/hammer-toe.jpg","A foot condition in which the toe has an abnormal bend in the middle joint. A hammer toe is usually caused by wearing shoes with high heels or narrow toe boxes.",
                "NAOT Galaxy",
                "Vionic Classic Walker",
                "Allbirds Wool Runners",
                "https://naot.com/wp-content/uploads/2021/07/GALAXY-18027-55B-gallery1.jpg",
                "https://www.vionicshoes.com/media/catalog/product/cache/c0185507fba436dc9e382ea0f9ec2c68/2/3/23walk_taupe_silo_1.jpg",
                "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_840,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/AB004RM_SHOE_ANGLE_GLOBAL_MENS_WOOL_RUNNER_LUX_BEIGE_LUX_BEIGE_99aa7c90-eedc-44bc-b15e-d0624e368c5a.png?v=1650401796",
                "https://naot.com/?s=galaxy&submit=",
                "https://www.vionicshoes.com/catalogsearch/result/?q=classic+walker",
                "https://www.allbirds.com/products/mens-wool-runners",
                "A foot condition in which the toe has an abnormal bend in the middle joint.\n" +
                "A hammer toe is usually caused by wearing shoes with high heels or narrow toe boxes. It often affects the toe next to the big toe.\n" +
                "The affected toe may be painful or hard to move, and may develop corns or calluses.\n" +
                "Treatment can include wearing roomier shoes and using shoe inserts or pads. Surgery might be needed." ,toeSplint, fittedShoes, hammertoePads);
//Product Recs: NAOT Galaxy, Vionic Classic Walker, Allbirds Wool Runners
        Ailment bunions = new Ailment("Bunions", "https://www.knowyourdoctor.com.cy/wp-content/uploads/2020/05/BUNIONS-1.jpg","A bony bump that forms on the joint at the base of the big toe. A bunion is formed when the big toe pushes against the next toe. They occur after years of pressure and are often painful.",
                "Skechers GOwalk Joy",
                "Saucony Echelon Walker 3",
                "Kuru Atom",
                "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dw7f17a4c3/images/large/124187_BKW.jpg?sw=1600",
                "https://s7d4.scene7.com/is/image/WolverineWorldWide/S40200-2_1?wid=584&hei=484&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=.5,1,1,0&iccEmbed=0&printRes=72",
                "https://www.kurufootwear.com/media/catalog/product/cache/e962d4425cb057736cffb54b131f4b63/1/0/102131-m-atom-mountainsage-white-smokegray-main_16.jpg",
                "https://www.skechers.com/technologies/collections/go-walk/",
                "https://www.saucony.com/en/search?q=echelon%20walker",
                "https://www.kurufootwear.com/womens-atom.html?color=JetBlack-White-Gum",
                "A bony bump that forms on the joint at the base of the big toe.\n" +
                "A bunion is formed when the big toe pushes against the next toe. Tight shoes, foot stress, and arthritis are causes.\n" +
                "The main symptoms are bone deformity, pain, and stiffness.\n" +
                "Treatments include changing shoes, padding the foot, and pain medications. Painful bunions can be removed surgically." ,bunionPads, painRelieverNsaid, ice, fittedShoes);
// Product Recs: Skechers GOwalk Joy, Saucony Echelon Walker 3, Kuru Atom
        Ailment mortonNeuroma = new Ailment("Morton's Neuroma","https://sportsfootankle.com/wp-content/uploads/2017/12/Mortons-Neuroma.jpg","A relatively common condition. It is a thickening of the tissue around a nerve leading to the toes that results from pressure or injury, such as from running or use of high heels.",
                "Brooks Addiction Walker 2",
                "Asics Gel-Cumulus",
                "New Balance 840 v5",
                "https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw467ec906/original/110318/110318-072-l-addiction-walker-2-mens-supportive-shoe.png?sw=1534&sh=1534&sm=fit",
                "https://images.asics.com/is/image/asics/1011B012_030_SR_RT_GLB?$sfcc-product$",
                "https://nb.scene7.com/is/image/NB/m840br5_nb_02_i?$pdpflexf2MD2x$&fmt=webp&wid=1026&hei=1026",
                "https://www.brooksrunning.com/en_us/search-result/?q=addiction%20walker",
                "https://www.newbalance.com/search/?q=840v5",
                "https://www.newbalance.com/search/?q=840v5",
                "A thickening of the tissue around a nerve leading to the toes.\n" +
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