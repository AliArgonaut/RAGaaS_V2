package infera.backend.ragaas.repositories;

import org.springframework.stereotype.Repository;
import infera.backend.ragaas.entities.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FileUploadRepository extends JpaRepository<FileEntity, Long> {

}
