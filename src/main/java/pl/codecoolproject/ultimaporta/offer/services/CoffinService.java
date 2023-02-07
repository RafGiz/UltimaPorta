package pl.codecoolproject.ultimaporta.offer.services;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.offer.model.Coffin;
import pl.codecoolproject.ultimaporta.offer.repos.CoffinRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CoffinService {
    private final CoffinRepository coffinRepository;

    public CoffinService(CoffinRepository coffinRepository) {
        this.coffinRepository = coffinRepository;
    }
    public List<Coffin> findAllCoffins() {
        return coffinRepository.findAll();
    }
    public Coffin addCoffin (Coffin coffin) {
        return coffinRepository.save(coffin);
    }
    public Coffin updateCoffin (Long id, Coffin coffin) {
        return coffinRepository.save(coffin);
    }

    public void delete(Long id) {
        coffinRepository.deleteById(id);
    }
}
