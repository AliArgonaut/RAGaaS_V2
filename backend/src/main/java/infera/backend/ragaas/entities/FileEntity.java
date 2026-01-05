import jakarta.persistence.Entity;
import jakarta.persistence.Index;
import jakarta.persistence.Table;

@Entity
@Table(name = "files", indexes = {
@Index(name = "idx_filename", columnList = "filename")
})
