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
    private String productRec1;
    private String productRec2;
    private String productRec3;
    @Lob
    private String prodImg1;
    @Lob
    private String prodImg2;
    @Lob
    private String prodImg3;
    @Lob
    private String prodLink1;
    @Lob
    private String prodLink2;
    @Lob
    private String prodLink3;

    @Lob
    private String longDescription;
    @ManyToMany
    private Collection<Treatment> treatments;

    public Long getID(){return id;}

    public String getName() {return name;}

    public String getImage() {return image;}

    public String getDescription() {return description;}

    public String getProductRec1() {return  productRec1;}

    public String getProductRec2() {return  productRec2;}

    public String getProductRec3() {return  productRec3;}

    public String getProdImg1() {return prodImg1;}
    public String getProdImg2() {return prodImg2;}
    public String getProdImg3() {return prodImg3;}

    public String getProdLink1() {return prodLink1;}
    public String getProdLink2() {return prodLink2;}
    public String getProdLink3() {return prodLink3;}



    public String getLongDescription() {return longDescription;}

    public Collection<Treatment> getTreatments() {return treatments;}

    public Ailment(){}


//String prodLink1, String prodLink2, String prodLink3
    public Ailment(String name,String image, String description,String productRec1, String productRec2, String productRec3,String prodImg1, String prodImg2, String prodImg3, String prodLink1, String prodLink2, String prodLink3,String longDescription, Treatment... treatments){
        this.name = name;
        this.image = image;
        this.description = description;
        this.productRec1 = productRec1;
        this.productRec2 = productRec2;
        this.productRec3 = productRec3;
        this.prodImg1 = prodImg1;
        this.prodImg2 = prodImg2;
        this.prodImg3 = prodImg3;
        this.prodLink1 = prodLink1;
        this.prodLink2 = prodLink2;
        this.prodLink3 = prodLink3;
        this.longDescription = longDescription;
        this.treatments=new ArrayList<>(Arrays.asList(treatments));
    }
}
