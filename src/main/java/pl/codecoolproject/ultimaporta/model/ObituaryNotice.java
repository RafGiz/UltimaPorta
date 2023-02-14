package pl.codecoolproject.ultimaporta.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.beans.factory.annotation.Autowired;


import javax.persistence.*;
import java.time.LocalDateTime;
@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
public class ObituaryNotice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateTimeOfFuneral;
    private String nameOfChurch;
    private String town;
    private String nameOfCementary;




//      private final String notice = "Z wielkim zalem zawiadamiamy\n\t ze w dniu" + this.departed.getDateOfDeath() + "zmarl"
//           +"\n\t\t\t\t\t" + "Śp" + this.departed.getName() + " " + this.departed.getLastName()+ "\t\t\t\t\t\n"
//          + "Msza sw. odbedzie sie dnia " + this.dateTimeOfFuneral.getDayOfMonth()
//            + " o godzinie " + this.dateTimeOfFuneral.getHour() + "," + this.dateTimeOfFuneral.getMinute() + "\nw koszciele " + this.nameOfChurch;


}
