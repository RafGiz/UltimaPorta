package pl.codecoolproject.ultimaporta.service;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;

import java.util.List;

@Service
public class DepartedService {
    private final DepartedRepository departedRepository;

    public DepartedService(DepartedRepository departedRepository) {
        this.departedRepository = departedRepository;
    }

    public Departed createDeparted(Departed departed){
       return departedRepository.save(departed);
    }

    public List<Departed> showAllDeparted(){
        return departedRepository.findAll();
    }
}
