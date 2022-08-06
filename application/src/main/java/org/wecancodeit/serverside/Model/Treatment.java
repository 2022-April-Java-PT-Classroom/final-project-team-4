package org.wecancodeit.serverside.Model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

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
    @ManyToMany
    private Collection<Ailment> ailments;
    public Treatment(){
    }

    public Long getID(){return id;}
    public String getName() {return name;}
    public String getDescription() {return description;}
    public String getBenefits() {return benefits;}
    public Collection<Ailment> getAilments() {return ailments;}

    public Treatment(String name, String description, String benefits, Ailment...ailments) {
        this.name = name;
        this.description=description;
        this.benefits=benefits;
        this.ailments=new ArrayList<>(Arrays.asList(ailments));
    }
}