package org.wecancodeit.serverside.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class Ailment {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String image;
    private String description;
    @Lob
    private String longDescription;
    @ManyToMany
    private Collection<Treatment> treatments;

    public Long getID(){return id;}

    public String getName() {return name;}

    public String getImage() {return image;}

    public String getDescription() {return description;}

    public String getLongDescription() {return longDescription;}

    public Collection<Treatment> getTreatments() {return treatments;}

    public Ailment(){}

    public Ailment(String name,String image, String description,String longDescription, Treatment... treatments){
        this.name = name;
        this.image = image;
        this.description = description;
        this.longDescription = longDescription;
        this.treatments=new ArrayList<>(Arrays.asList(treatments));
    }
}
