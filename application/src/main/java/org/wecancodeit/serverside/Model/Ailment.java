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
//    private String productRec1;
//    private String productRec2;
//    private String productRec3;
    @Lob
    private String longDescription;
    @ManyToMany
    private Collection<Treatment> treatments;

    public Long getID(){return id;}

    public String getName() {return name;}

    public String getImage() {return image;}

    public String getDescription() {return description;}

//    public String getProductRec1() {return  productRec1;}
//
//    public String getProductRec2() {return  productRec2;}
//
//    public String getProductRec3() {return  productRec3;}

    public String getLongDescription() {return longDescription;}

    public Collection<Treatment> getTreatments() {return treatments;}

    public Ailment(){}


//String productRec1, String productRec2, String productRec3
    public Ailment(String name,String image, String description,String longDescription, Treatment... treatments){
        this.name = name;
        this.image = image;
        this.description = description;
//        this.productRec1 = productRec1;
//        this,productRec2 = productRec2;
//        this.productRec3 = productRec3;
        this.longDescription = longDescription;
        this.treatments=new ArrayList<>(Arrays.asList(treatments));
    }
}
