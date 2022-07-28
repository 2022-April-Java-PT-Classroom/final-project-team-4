package org.wecancodeit.serverside.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Ailment {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(mappedBy = "ailment")
    @JsonIgnore
    private Collection<Ailment> ailment;

    public Long getID(){return id;}

    public String getName() {return name;}

    public Collection<Ailment> getAilment() {return ailment;}

    public Ailment(){}

    public Ailment(String name){
        this.name = name;
    }
}
