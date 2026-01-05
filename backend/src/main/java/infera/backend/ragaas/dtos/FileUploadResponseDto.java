package infera.backend.ragaas.dtos;

public record FileUploadResponseDto(
        Long documentId,
        String filename,
        Long fileSize,
        String contentType,
        String status,
        String uploadedAt,
        Long collectionId,
        String message) {
}
