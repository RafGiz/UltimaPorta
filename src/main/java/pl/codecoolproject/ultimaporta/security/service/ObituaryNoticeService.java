package pl.codecoolproject.ultimaporta.security.service;

import lombok.Getter;
import org.springframework.stereotype.Service;
import pl.codecoolproject.ultimaporta.model.ObituaryNotice;
import pl.codecoolproject.ultimaporta.repository.DepartedRepository;
import pl.codecoolproject.ultimaporta.repository.ObituaryNoticeRepository;
@Getter
@Service
public class ObituaryNoticeService {
    private final ObituaryNoticeRepository obituaryNoticeRepository;

    public ObituaryNoticeService(ObituaryNoticeRepository obituaryNoticeRepository) {
        this.obituaryNoticeRepository = obituaryNoticeRepository;
    }





}
