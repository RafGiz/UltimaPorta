package pl.codecoolproject.ultimaporta.security.service;

import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;
import pl.codecoolproject.ultimaporta.repository.ObituaryNoticeRepository;
@Service
public class ObituaryNoticeService {
    private final DepartedRepository departedRepository;
    private final ObituaryNoticeRepository obituaryNoticeRepository;

    public ObituaryNoticeService(DepartedRepository departedRepository, ObituaryNoticeRepository obituaryNoticeRepository) {
        this.departedRepository = departedRepository;
        this.obituaryNoticeRepository = obituaryNoticeRepository;
    }


}
