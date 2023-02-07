package pl.codecoolproject.ultimaporta.offer.controlls;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.codecoolproject.ultimaporta.offer.model.Coffin;
import pl.codecoolproject.ultimaporta.offer.services.CoffinService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/coffins")
public class CoffinController {

    private final CoffinService coffinService;

    public CoffinController(CoffinService coffinService) {
        this.coffinService = coffinService;
    }
    @GetMapping
    public ResponseEntity<List<Coffin>> getAllCoffins() {
        List<Coffin> coffins = coffinService.findAllCoffins();
        return ResponseEntity.ok(coffins);
    }
    @PostMapping
    public ResponseEntity<Coffin> addCoffin(@Valid @RequestBody Coffin coffin) {
        Coffin newCoffin = coffinService.addCoffin(coffin);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCoffin);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Coffin> updateCoffin(@PathVariable Long id, @Valid @RequestBody Coffin coffin) {
        Coffin updatedCoffin = coffinService.updateCoffin(id, coffin);
        return ResponseEntity.ok(updatedCoffin);
    }
    @DeleteMapping("/{id}")
    public void deleteCoffin(@PathVariable Long id) {
        coffinService.delete(id);
    }
}
