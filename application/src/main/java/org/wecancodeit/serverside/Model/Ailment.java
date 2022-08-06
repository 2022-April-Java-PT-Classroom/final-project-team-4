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
    @ManyToMany
    private Collection<Treatment> treatments;

    public Long getID(){return id;}

    public String getName() {return name;}

    public Collection<Treatment> getTreatments() {return treatments;}

    public Ailment(){}

    public Ailment(String name, Treatment... treatments){
        this.name = name;
        this.treatments=new ArrayList<>(Arrays.asList(treatments));
    }
}
