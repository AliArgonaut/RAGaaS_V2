package infera.backend.ragaas.controllers;

import java.net.http.HttpResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import infera.backend.ragaas.services.FileUploadService;

@RestController
@RequestMapping("/v1/api/upload")
public class FileUploadController {
    private FileUploadService fileUploadService;

    public FileUploadController(FileUploadService fileUploadService) {
        this.fileUploadService = fileUploadService;
    }

    @PostMapping
    public ResponseEntity<FileUploadResponseDto> uploadFile(@RequestBody @MultiPartFile) {
        FileUploadResponseDto fileUploadResponse = fileUploadService.uploadFile(fileUploadRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(fileUploadResponse);
    }

}
