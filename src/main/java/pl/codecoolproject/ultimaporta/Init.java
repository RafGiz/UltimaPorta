package pl.codecoolproject.ultimaporta;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;
import pl.codecoolproject.ultimaporta.repository.ObituaryNoticeRepository;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalDateTime;

@AllArgsConstructor
@Component
public class Init {
    private final DepartedRepository departedRepository;

    private final ObituaryNoticeRepository obituaryNoticeRepository;

    @PostConstruct
    public void runList(){

        Departed departed1 = new Departed(1l,"Jan", "Kowalski", LocalDate.of(2023,2,3));
        departedRepository.save(departed1);
        ObituaryNotice obituaryNotice1 = new ObituaryNotice(1l
                , LocalDateTime.of(2023,2,9,14,00,00,00)
                ,"Św.Elzbiety", "Kamienna","Cmentarz w Kamiennej");

        obituaryNoticeRepository.save(obituaryNotice1);



    }

}
