package KHakhakhakha.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KHakhakhakha.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISKHakhakhakhaКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерТел")
    private String номертел;

    @Column(name = "Наим")
    private String наим;

    @Column(name = "ДР")
    private Date др;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BankDan")
    @Convert("BankDan")
    @Column(name = "БанкДан", length = 16, unique = true, nullable = false)
    private UUID _bankdanid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BankDan", insertable = false, updatable = false)
    private BankDan bankdan;

    @OneToMany(mappedBy = "klient", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHKl> tchkls;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерТел() {
      return номертел;
    }

    public void setНомерТел(String номертел) {
      this.номертел = номертел;
    }

    public String getНаим() {
      return наим;
    }

    public void setНаим(String наим) {
      this.наим = наим;
    }

    public Date getДР() {
      return др;
    }

    public void setДР(Date др) {
      this.др = др;
    }


}