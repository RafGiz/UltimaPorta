package pl.codecoolproject.ultimaporta.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.codecoolproject.ultimaporta.model.Departed;
import pl.codecoolproject.ultimaporta.service.DepartedService;

import java.util.List;

@RestController
public class DepartedController {

    private final DepartedService departedService;

    public DepartedController(DepartedService departedService) {
        this.departedService = departedService;
    }

    @GetMapping("/departed")
    public List<Departed> showAll(){
        return departedService.showAllDeparted();
    }

    @PostMapping("/departed")
    public void createDeparted(@RequestBody Departed departed){
        departedService.createDeparted(departed);
    }
}
