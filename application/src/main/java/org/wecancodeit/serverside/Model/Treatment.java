package org.wecancodeit.serverside.Model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Treatment {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Lob
    private String description;
    @Lob
    private String benefits;


    public Treatment(){

    }



    public Long getID(){return id;}
    public String getName() {return name;}
    public String getDescription() {return description;}
    public String getBenefits() {return benefits;}




    public Treatment(String name, String description, String benefits) {
        this.name = name;
        this.description=description;
        this.benefits=benefits;
    }
}